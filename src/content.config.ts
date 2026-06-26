import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/[0-9]*.md' }),
  schema: z.object({
    title: z.string(),
    status: z.string().optional(),
    owner: z.string().optional(),
    created: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    target_platforms: z.array(z.string()).optional(),
    confidentiality: z.string().optional(),
    public_ready: z.boolean().optional(),
    revision: z.number().optional(),
    source_path: z.string().optional(),
    human_review_required: z.boolean().optional(),
    ai_assistance: z.string().optional(),
    last_feedback: z.string().optional(),
    canonical_url: z.string().optional(),
    published_urls: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
