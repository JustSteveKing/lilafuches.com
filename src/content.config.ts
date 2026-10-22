import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/services" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    short: z.string(),
    headline: z.string(),
    accent: z.string(),
    summary: z.string(),
    description: z.string(),
    offers: z.array(z.object({ name: z.string(), detail: z.string() })),
    fit: z.array(z.string()),
  }),
});

export const collections = { services };
