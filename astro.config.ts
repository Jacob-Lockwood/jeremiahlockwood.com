import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jeremiahlockwood.com",
  integrations: [solidJs()],
  vite: { plugins: [tailwindcss()] },
  redirects: {
    "/misc": "/visual-art/",
    "/multidisciplinary": "/visual-art/",
    "/scholarship": "/academic/",
  },
});
