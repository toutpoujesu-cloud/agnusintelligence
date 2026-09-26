import Stripe from 'https://esm.sh/stripe@14?target=deno'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', { apiVersion: '2024-06-20' })
const PRICE_ID = Deno.env.get('STRIPE_PRICE_ID') ?? 'price_1UJvPd64JSHZyrDFtTJ75kgz'
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? ''

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  const auth = req.headers.get('Authorization')
  if (!auth) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Verify user via Supabase anon client (RLS-safe)
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { global: { headers: { Authorization: auth } } })
  const { data: { user }, error: authErr } = await sb.auth.getUser()
  if (authErr || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Check not already enrolled
  const { data: ent } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('status', 'active').maybeSingle()
  if (ent) {
    return new Response(JSON.stringify({ error: 'Already enrolled' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  const body = await req.json().catch(() => ({}))
  const successUrl = body.success_url || 'https://agnus-intelligence.pages.dev/academy/AGNUS%20-%20Academy%20Welcome.html?session_id={CHECKOUT_SESSION_ID}'
  const cancelUrl  = body.cancel_url  || 'https://agnus-intelligence.pages.dev/academy/AGNUS%20-%20Academy%20Enrol.html'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: PRICE_ID, quantity: 1 }],
    customer_email: user.email,
    metadata: { user_id: user.id },
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
})
