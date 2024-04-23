// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const music = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    previewText: z.string().optional(),
  }),
});
const scholarship = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
const visualArt = defineCollection({
  schema: z.object({ title: z.string() }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  music,
  scholarship,
  visualArt,
};
