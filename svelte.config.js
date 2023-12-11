import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		csp : {
			directives: {
				'script-src' : ['self'],
				'default-src' : ['self'],
				'img-src' : ['self'],
			},
			mode: 'auto',
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
		}),
		/*
        paths: {
               // Add this line here
            base: process.env.NODE_ENV === 'production' ? '/gh-pages' : ''
        }*/
	}
};

export default config;
