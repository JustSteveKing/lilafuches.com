// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lilafuches.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [sitemap()],

  fonts: [
    {
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      provider: fontProviders.google(),
      weights: ["300 700"],
      styles: ["normal", "italic"],
    },
    {
      name: "Schibsted Grotesk",
      cssVariable: "--font-schibsted",
      provider: fontProviders.google(),
      weights: ["400 700"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      provider: fontProviders.google(),
      weights: [400, 500],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
