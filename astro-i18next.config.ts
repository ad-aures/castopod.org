import { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "fr"],
  namespaces: ["common", "home", "getting-started"],
  defaultNamespace: "common",
  i18nextServer: {
    debug: true,
  },
  routes: {
    fr: {
      "getting-started": "commencer",
    },
  },
};

export default config;
