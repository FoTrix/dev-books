// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'astro:env/server': '/src/astro-env-server.ts' 
      }
    }
  },
  output: "server",
  adapter: vercel(),
})