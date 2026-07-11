import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.enum(['Founder', 'Co-founder', 'Co-founder & CTO', 'Lead Developer', 'Senior Frontend Engineer']),
    year: z.coerce.number(),
    duration: z.string().optional(),
    technologies: z.array(z.string()),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    aiRole: z.string().optional(),
    context: z.string().optional(),
    problem: z.string().optional(),
    constraints: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    technologies: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['client', 'colleague']),
    role: z.string().optional(),
    date: z.coerce.date(),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects, lab, posts, reviews };
