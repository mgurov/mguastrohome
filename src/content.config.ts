import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const genericSchema = z.object({
	title: z.string(),
	hideTitleFromMainBody: z.boolean().optional(),
	summary: z.string(),
	// Transform string to Date object
	date: z.coerce.date().optional(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	weight: z.number().optional(),
	draft: z.boolean().optional(),
});

const talks = defineCollection({
	loader: glob({ base: './src/content/talks', pattern: '**/*.{md,mdx}' }),
	schema: genericSchema,
}); 

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: genericSchema,
}); 

const about = defineCollection({
	loader: glob({ base: './src/content/about', pattern: '**/*.{md,mdx}' }),
	schema: genericSchema,
}); 

export const collections = { talks, notes, about };
