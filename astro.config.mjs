import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://castopod.org/",
  integrations: [
    icon({
      include: {
        ri: ["*"], // Loads entire Remix Icon set
      },
      svgoOptions: {
        multipass: true,
        plugins: [
          "preset-default",
          "removeXMLNS",
          "removeDimensions",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [
                { fill: "currentColor" },
                { width: "1em" },
                { height: "1em" },
              ],
            },
          },
        ],
      },
    }),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          fr: "fr",
        },
      },
    }),
    astroI18next(),
  ],
});
