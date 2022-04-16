import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    filter: true
  }), partytown()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});