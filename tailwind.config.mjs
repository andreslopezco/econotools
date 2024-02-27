/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFDFF",
        secondary: "#1f1300",
        accent: "#8fb339",
      },
    },
  },
  plugins: [],
};
