// me — returns { profile, entitled, entitlement, progress, is_admin }
// Uses the caller's own JWT so RLS enforces row-level isolation.
// No service-role key needed here.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ADMINS = (Deno.env.get('ACADEMY_ADMINS') ?? '').split(',').map(s => s.trim()).filter(Boolean)
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? ''

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  const auth = req.headers.get('Authorization')
  if (!auth) {
    return new Response(JSON.stringify({ profile: null, entitled: false, entitlement: null, progress: [], is_admin: false }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  // Create a client that acts as the calling user (RLS applies)
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: auth } },
  })

  const { data: { user }, error: authErr } = await sb.auth.getUser()
  if (authErr || !user) {
    return new Response(JSON.stringify({ profile: null, entitled: false, entitlement: null, progress: [], is_admin: false }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  const [{ data: profile }, { data: entitlement }, { data: progress }] = await Promise.all([
    sb.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    sb.from('entitlements').select('*').eq('user_id', user.id).eq('status', 'active').maybeSingle(),
    sb.from('progress').select('item_id, completed_at, score').eq('user_id', user.id),
  ])

  const is_admin = ADMINS.includes(user.email ?? '')

  return new Response(
    JSON.stringify({
      profile,
      entitled: !!entitlement || is_admin,
      entitlement,
      progress: progress ?? [],
      is_admin,
    }),
    { headers: { ...CORS, 'Content-Type': 'application/json' } },
  )
})
