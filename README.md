# Smile Again Families — website

The redesigned site for [Smile Again Families Foundation](https://www.smileagainfamilies.org), Masaka, Uganda. **Live preview:** https://smile-again.netlify.app. Netlify redeploys it automatically on every push to `main`.

It's built with [Astro](https://astro.build) as a fast static site, with [Supabase](https://supabase.com) for form submissions and stories.

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `src/pages/index.astro` | Story, impact, projects, Safe Home appeal, giving tiers, latest stories |
| Give | `src/pages/give.astro` | Monthly/one-time picker that opens the PayPal donate button |
| Get involved | `src/pages/get-involved.astro` | Contact, volunteer and sponsor form → `contact_messages` table |

Shared content (stats, projects, tiers, contact details) lives in `src/lib/site.ts`. Photos are in `public/images/`.

## Run it locally

```bash
npm install
cp .env.example .env   # add your Supabase URL and publishable key
npm run dev            # http://localhost:4321
npm run build          # static output in dist/
```

The site still builds without Supabase keys. Stories then fall back to the built-in list, and the form shows an "email us" message.

## Supabase

Project: `jimskfusprtpcdmkocuu` (org **Smile Again**, eu-west-1). Its public URL and publishable key are in `.env.production`. They're safe to publish, because row-level security protects the data. The schema in `supabase/migrations/20261029000000_init.sql` is already applied, and it creates:

- **contact_messages**: visitors can only insert. Staff read them in the dashboard and tick `handled`.
- **stories**: visitors can only read rows with `published = true`. Add or edit stories in the dashboard's Table Editor, then rebuild the site.

## Still to do

- Footer NGO / registration number (`[REGISTRATION / NGO NUMBER]` in `src/layouts/Base.astro`)
- Inner pages: About & Team, individual project pages, story detail pages
- Hosting: deploy `dist/` to Netlify, Vercel or Cloudflare Pages, and add a rebuild hook for new stories
