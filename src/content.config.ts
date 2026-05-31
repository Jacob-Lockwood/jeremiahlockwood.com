// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
// 2. Define your collection(s)
const music = defineCollection({
  loader: glob({ base: "./src/content/music", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    previewText: z.string().optional(),
  }),
});
const academic = defineCollection({
  loader: glob({ base: "./src/content/academic", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});
const visualArt = defineCollection({
  loader: glob({ base: "./src/content/visual-art", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    count: z.number(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  music,
  academic,
  "visual-art": visualArt,
};
