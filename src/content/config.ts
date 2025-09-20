import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    slug: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };
