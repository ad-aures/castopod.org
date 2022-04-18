import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://castopod.org/",
  integrations: [tailwind(), sitemap(), partytown()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
