import Stripe from 'https://esm.sh/stripe@14?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', { apiVersion: '2024-06-20' })
const SUPABASE_URL      = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  const auth = req.headers.get('Authorization')
  if (!auth) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Verify caller with their own JWT (RLS applies — they can only see their own entitlement)
  const sbUser = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { global: { headers: { Authorization: auth } } })
  const { data: { user }, error: authErr } = await sbUser.auth.getUser()
  if (authErr || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Read active entitlement (user's own row — RLS enforces this)
  const { data: ent, error: entErr } = await sbUser
    .from('entitlements')
    .select('id, stripe_payment_intent, refund_deadline, status')
    .eq('user_id', user.id)
    .eq('status', 'active')
    .maybeSingle()

  if (entErr || !ent) {
    return new Response(JSON.stringify({ error: 'No active entitlement found' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Enforce refund window
  if (new Date() > new Date(ent.refund_deadline)) {
    return new Response(JSON.stringify({ error: 'Refund window has expired (14 days)' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Issue Stripe refund via payment intent
  if (ent.stripe_payment_intent) {
    try {
      await stripe.refunds.create({ payment_intent: ent.stripe_payment_intent })
    } catch (err) {
      console.error('Stripe refund failed:', err)
      return new Response(JSON.stringify({ error: 'Stripe refund failed — contact support' }), { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } })
    }
  }

  // Update entitlement status with service role (bypasses RLS for write)
  const sbAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
  const { error: updateErr } = await sbAdmin
    .from('entitlements')
    .update({ status: 'refunded' })
    .eq('id', ent.id)

  if (updateErr) {
    console.error('Failed to update entitlement status:', updateErr)
    return new Response(JSON.stringify({ error: 'DB update failed — contact support' }), { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
})
