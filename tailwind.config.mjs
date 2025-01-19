import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Mea Culpa", "serif"],
      sans: ["Newsreader"],
    },
    extend: {},
  },
  plugins: [typography],
};
