import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change SITE_URL (Netlify env var) to https://www.smileagainfamilies.org when the domain moves.
const site = process.env.SITE_URL || 'https://smile-again.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
