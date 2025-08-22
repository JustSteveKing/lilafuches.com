// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://lilafuches.com',
  integrations: [
    alpinejs({ entrypoint: '/src/utils/alpine' }), 
    sitemap(),
    icon({
      iconDir: "src/assets/icons",
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});