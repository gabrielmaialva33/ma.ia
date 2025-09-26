import vercel from '@sveltejs/adapter-vercel';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isGhPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: isGhPages ? adapterStatic({ fallback: 'index.html' }) : vercel(),
		paths: isGhPages
			? {
				base: basePath,
				relative: true
			}
			: {}
	}
};

export default config;
