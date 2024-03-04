import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";
import path from "path";
// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve("./src/components"),
      },
    },
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), svelte({ preprocess: [] })]
});