import Stripe from 'https://esm.sh/stripe@14?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', { apiVersion: '2024-06-20' })
const WEBHOOK_SECRET   = Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
const SUPABASE_URL     = Deno.env.get('SUPABASE_URL') ?? ''
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  const sig = req.headers.get('stripe-signature')
  if (!sig) return new Response('No signature', { status: 400 })

  const body = await req.text()
  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return new Response(`Webhook error: ${(err as Error).message}`, { status: 400 })
  }

  // Log every event for audit
  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
  await sb.from('stripe_events').insert({
    stripe_event_id: event.id,
    type: event.type,
    payload: event,
    processed: false,
  }).throwOnError()

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.user_id

    if (!userId) {
      console.error('checkout.session.completed missing user_id in metadata')
      return new Response('Missing user_id', { status: 400 })
    }

    const now = new Date()
    const refundDeadline = new Date(now)
    refundDeadline.setDate(refundDeadline.getDate() + 14) // 14-day refund window

    const { error } = await sb.from('entitlements').insert({
      user_id: userId,
      status: 'active',
      stripe_checkout_id: session.id,
      stripe_payment_intent: typeof session.payment_intent === 'string' ? session.payment_intent : null,
      purchased_at: now.toISOString(),
      refund_deadline: refundDeadline.toISOString(),
    })

    if (error) {
      console.error('Failed to insert entitlement:', error)
      return new Response('DB error', { status: 500 })
    }

    // Mark event processed
    await sb.from('stripe_events').update({ processed: true }).eq('stripe_event_id', event.id)
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
})
