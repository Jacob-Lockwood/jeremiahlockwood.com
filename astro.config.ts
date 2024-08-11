import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://jeremiahlockwood.com",
  integrations: [tailwind(), solidJs(), db()],
  redirects: {
    "/misc": "/visual-art/",
    "/multidisciplinary": "/visual-art/",
    "/scholarship": "/academic/"
  }
});