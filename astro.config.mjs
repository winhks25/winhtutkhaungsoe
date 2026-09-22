import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://winhks25.github.io',
  base: '/winhtutkhaungsoe',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
