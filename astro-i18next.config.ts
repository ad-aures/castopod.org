import { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLanguage: "en",
  supportedLanguages: ["en", "fr"],
  i18next: {
    // debug is convenient during development to check for missing keys
    debug: true,
    initImmediate: false,
    ns: ["common", "home", "getting-started"],
    defaultNS: ["common"],
    backend: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};

export default config;
