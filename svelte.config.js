import { vitePreprocess } from '@astrojs/svelte';
import adapter from "svelte-adapter-bun";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: { hydratable: true },
	kit: {
	  adapter: adapter(),
	alias: {
		"@/*": "./src/lib",
		}
    }
};

	export default config;
	