// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  env:{
    schema:{
      PUBLIC_SHOW_BUTTON: envField.boolean({context:"server", access:"public", default: true}),
      PUBLIC_SCORE_API: envField.string({ context:"server", access:"public"}),
      PUBLIC_REPO_API: envField.string({ context:"server", access:"public"}),
    },
  },

  adapter: vercel(),
})