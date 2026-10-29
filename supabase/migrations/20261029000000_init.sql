-- Smile Again Families: initial schema
-- Visitors may only INSERT contact messages and READ published stories.
-- Staff read messages and write stories from the Supabase dashboard.

create table public.contact_messages (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  type        text not null default 'general'
              check (type in ('general', 'volunteer', 'sponsor', 'partner')),
  first_name  text not null check (char_length(first_name) between 1 and 100),
  last_name   text check (char_length(last_name) <= 100),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  phone       text check (char_length(phone) <= 40),
  message     text not null check (char_length(message) between 1 and 5000),
  handled     boolean not null default false
);

alter table public.contact_messages enable row level security;

create policy "Anyone can send a message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (handled = false);

create table public.stories (
  id            bigint generated always as identity primary key,
  slug          text not null unique,
  title         text not null,
  excerpt       text not null default '',
  body          text not null default '',
  category      text,
  cover_image   text,
  published     boolean not null default false,
  published_at  timestamptz not null default now(),
  created_at    timestamptz not null default now()
);

alter table public.stories enable row level security;

create policy "Published stories are public"
  on public.stories for select
  to anon, authenticated
  using (published = true);

create index stories_published_at_idx on public.stories (published_at desc) where published;

-- Explicit table privileges (RLS policies above still decide which rows)
revoke all on public.contact_messages from anon, authenticated;
grant insert (type, first_name, last_name, email, phone, message) on public.contact_messages to anon, authenticated;
revoke all on public.stories from anon, authenticated;
grant select on public.stories to anon, authenticated;

-- Existing posts from the current site
insert into public.stories (slug, title, excerpt, category, published, published_at) values
  ('christmas-brings-a-lot-of-joy', 'Christmas brings a lot of joy', 'Our thanks to every friend who supported and prayed for the mothers this year.', 'Community', true, '2023-12-27'),
  ('staff-leadership-training', 'Staff leadership training', 'Equipping our staff to walk alongside young mothers with skill and care.', 'Team', true, '2021-12-23'),
  ('help-mothers-discover-their-inner-worth', 'Helping mothers discover their inner worth', 'Our yearly gathering for young mothers aged 19 and below.', 'Annual event', true, '2021-06-18');
