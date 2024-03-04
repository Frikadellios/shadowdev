import { vitePreprocess } from '@astrojs/svelte';
import adapter from "svelte-adapter-bun";

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			"@/*": "./src/components/*",
		  },
	  }
};
