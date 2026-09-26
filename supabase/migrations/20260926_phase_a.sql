-- Phase A: Accounts
-- Run in: Supabase dashboard → SQL Editor → New query → paste & run

-- ── Tables ──────────────────────────────────────────────────────────────────

create table if not exists profiles (
  id          uuid primary key references auth.users on delete cascade,
  full_name   text not null,
  created_at  timestamptz default now()
);

create table if not exists entitlements (
  id                        uuid primary key default gen_random_uuid(),
  user_id                   uuid not null references auth.users on delete cascade,
  product                   text not null default 'academy_full',
  status                    text not null check (status in ('active','refunded','revoked')),
  stripe_checkout_session   text unique,
  stripe_payment_intent     text unique,
  amount_cents              int not null,
  currency                  text not null default 'usd',
  purchased_at              timestamptz default now(),
  refund_deadline           timestamptz not null,
  refunded_at               timestamptz,
  org_id                    uuid
);

create table if not exists progress (
  user_id       uuid not null references auth.users on delete cascade,
  item_id       text not null,
  completed_at  timestamptz default now(),
  score         int,
  primary key (user_id, item_id)
);

create table if not exists certificates (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  user_id     uuid not null references auth.users on delete cascade,
  full_name   text not null,
  programme   text not null default 'AGNUS Academy — Full Programme',
  issued_at   timestamptz default now(),
  revoked     boolean default false
);

create table if not exists stripe_events (
  id           text primary key,
  type         text not null,
  received_at  timestamptz default now()
);

-- ── Row Level Security ───────────────────────────────────────────────────────

alter table profiles     enable row level security;
alter table entitlements enable row level security;
alter table progress     enable row level security;
alter table certificates enable row level security;
alter table stripe_events enable row level security;

-- profiles: own row only
create policy "profiles_select_own" on profiles
  for select using (auth.uid() = id);
create policy "profiles_update_own" on profiles
  for update using (auth.uid() = id);

-- entitlements: read own, no client writes
create policy "entitlements_select_own" on entitlements
  for select using (auth.uid() = user_id);

-- progress: read own, no client inserts (complete-item function writes via service role)
create policy "progress_select_own" on progress
  for select using (auth.uid() = user_id);

-- certificates: read own
create policy "certificates_select_own" on certificates
  for select using (auth.uid() = user_id);

-- stripe_events: service role only — no policies for authenticated users

-- ── Auto-create profile on sign-up ──────────────────────────────────────────

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
