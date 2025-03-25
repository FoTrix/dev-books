// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from "@astrojs/vercel";
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  env: {
    schema: {
      SCORE_API_URL: envField.string({context: "client", access: "public"}),
      SHOW_BUY_BUTTON: envField.boolean({context: "client", access: "public", default: true})
    }
  },
  adapter: vercel(),
})