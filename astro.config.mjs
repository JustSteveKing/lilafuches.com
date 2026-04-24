// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lilafuches.com",
  integrations: [
    alpinejs({ entrypoint: "/src/utils/alpine" }),
    sitemap(),
    icon({
      include: {
        mdi: ["*"],
      },
      iconDir: "src/assets/icons",
    }),
  ],

  fonts: [
    {
      name: "Bricolage Grotesque",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
      weights: [200, 300, 400, 500, 600, 700, 800],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
