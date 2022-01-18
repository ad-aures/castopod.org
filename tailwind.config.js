const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pine: {
          50: "#F2FAF9",
          100: "#E7F9E4",
          200: "#bfe4e1",
          300: "#99d4cf",
          400: "#4db4aa",
          500: "#009486",
          600: "#008579",
          700: "#006D60",
          800: "#00564A",
          900: "#003D0B",
        },
        amber: {
          50: "#FFF0EB",
          100: "#FFD5C5",
          500: "#FF6022",
          800: "#B13200",
          900: "#792200",
        },
      },
    },
  },
};
