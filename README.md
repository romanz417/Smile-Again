# Smile Again Families — website

The website of [Smile Again Families Foundation](https://www.smileagainfamilies.org), Masaka, Uganda.

**Live preview:** https://smile-again.netlify.app. Netlify redeploys it automatically on every push to `main`.

Built with [Astro](https://astro.build) as a fast static site, with [Supabase](https://supabase.com) for form submissions, newsletter sign-ups and stories.

## Pages

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home |
| `/about`, `/about/team` | `src/pages/about/` | Story, mission, timeline; founders, board, staff |
| `/our-work`, `/our-work/[slug]` | `src/pages/our-work/` | Programs overview and six program pages |
| `/sponsor` | `src/pages/sponsor.astro` | Sponsor a young mother's education |
| `/volunteer` | `src/pages/volunteer.astro` | Volunteer role and FOCUS mission trips |
| `/events` | `src/pages/events.astro` | Your Worth Summit |
| `/stories`, `/stories/[slug]` | `src/pages/stories/` | Blog, from Supabase |
| `/give` | `src/pages/give.astro` | Donation picker, opens PayPal |
| `/contact`, `/privacy` | `src/pages/` | Contact form, privacy policy |

## Where content lives

- **Programs, team, students, timeline, figures:** `src/data/*.ts`
- **Photos:** `src/assets/photos/`, referenced by file name (e.g. `safe-drone-2`). Astro resizes them and serves AVIF/WebP automatically.
- **Stories:** the `stories` table in Supabase (`src/data/stories.ts` is a fallback copy). `cover_image` is a photo file name from `src/assets/photos`. After adding a story, trigger a Netlify redeploy.
- **Old Wix URLs** redirect to the new pages via `public/_redirects`.

## Supabase

Project `jimskfusprtpcdmkocuu` (org **Smile Again**, eu-west-1). The public URL and publishable key are in `.env.production`; they're safe to publish because row-level security protects the data. The migrations in `supabase/migrations/` are already applied:

- **contact_messages:** visitors can only insert. Staff read them in the dashboard and tick `handled`.
- **subscribers:** newsletter emails; visitors can only insert.
- **stories:** visitors can only read rows with `published = true`.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
```

## When the domain moves to this site

Set the Netlify environment variable `SITE_URL=https://www.smileagainfamilies.org` and redeploy. Canonical URLs, the sitemap and social previews will then use the real domain.
