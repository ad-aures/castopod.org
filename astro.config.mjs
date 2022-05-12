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
      resourcesPath: "./src/locales/",
      i18nextConfig: {
        fallbackLng: ["en", "fr"],
        supportedLngs: ["en", "fr"],
        debug: true,
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
