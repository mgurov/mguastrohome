// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mgurov.github.io',
	trailingSlash: "ignore",
	integrations: [mdx(), sitemap()],
	redirects: {
    	"/cv/": "/about/cv/",
		"/": "/about/",
  	}
});
