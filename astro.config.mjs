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
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600, 700],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
