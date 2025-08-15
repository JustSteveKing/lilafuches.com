// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs({ entrypoint: '/src/utils/alpine' }), icon({
    iconDir: "src/assets/icons",
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});