import { vitePreprocess } from '@astrojs/svelte';
import adapter from "svelte-adapter-bun";

export default {
	kit: {
		adapter: adapter(),
		alias: {
				"@/*": "./src/components/*",
	  	}
	},
  preprocess: vitePreprocess(),
};
	