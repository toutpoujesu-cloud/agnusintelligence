// Public configuration — safe to ship in the browser.
// Service-role key and Stripe secret key are NEVER here; they live in Supabase Edge Function secrets only.
window.AGNUS_CONFIG = {
  SUPABASE_URL:      'https://jndoxwgnsuvmznfpgoks.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuZG94d2duc3V2bXpuZnBnb2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MTUwMzcsImV4cCI6MjEwNTk5MTAzN30.ps9cOMjchcoNKt55377VbeQEVWHiZ63hjMr4_moZ9zs',
  FUNCTIONS_URL:     'https://jndoxwgnsuvmznfpgoks.supabase.co/functions/v1',
  STRIPE_PK:         'pk_test_51UJvIb64JSHZyrDFhkwwb8M7lKceMKzKRC5jVLApSk39WUpVv4MPtgdGvwzpO01fCZUhYDO1wRRUQvmKoGpGgTLA003l1AhTJe',
  STRIPE_PRICE_ID:   'price_1UJvPd64JSHZyrDFtTJ75kgz',
};
