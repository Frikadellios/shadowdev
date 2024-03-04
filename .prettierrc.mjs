/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  trailingComma: "none",
  printWidth: 100,
	printWidth: 100,
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false
}
