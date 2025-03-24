// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
    
  },

  env:{
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({context:"server", access:"public", default: true}),
      SCORE_API_URL: envField.string({ context:"server", access:"public"}),
      REPO_API_URL: envField.string({ context:"server", access:"secret"}),
    },
  },

  adapter: vercel(),
})