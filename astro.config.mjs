import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import path from "path";
import million from "million/compiler";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve("./src/components")
      }
    },
    plugins: [yaml(),
      million.vite({
      mode: "react",
      server: true,
      auto: {
        threshold: 0.05,
        skip: ["useBadHook", /badVariable/g]
      }
    })]
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), svelte({
    preprocess: []
  }), tailwind({
    applyBaseStyles: false,
  }),]
});