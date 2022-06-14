import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://castopod.org/",
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    sitemap(),
    astroI18next({
      baseLanguage: "en",
      resourcesPath: "./src/locales/",
      i18next: {
        debug: true,
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
