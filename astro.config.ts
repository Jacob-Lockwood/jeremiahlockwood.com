import type { AstroUserConfig } from "astro"

import svelte from "@astrojs/svelte"

// https://astro.build/config
export default {
  site: "https://jeremiahlockwood.com",
  integrations: [svelte()],
} as AstroUserConfig
