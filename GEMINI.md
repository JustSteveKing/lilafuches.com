# Lila Fuches - Project Context

This project is a high-performance, developer-focused agency website for **Lila Fuches**, a technical content and developer relations agency. It is built using a modern, lightweight tech stack centered around **Astro** and **Tailwind CSS v4**.

## 🚀 Project Overview

- **Framework:** Astro 6 (Static Site Generation)
- **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` plugin and `@theme` block in CSS)
- **Interactivity:** Alpine.js 3 (via `@astrojs/alpinejs`)
- **Type Safety:** TypeScript 5
- **Content Management:** Centralized static configuration in `src/utils/siteContent.ts`
- **Icons:** `astro-icon` with custom icons in `src/assets/icons`
- **Fonts:** Managed via Astro's built-in font configuration in `astro.config.mjs` (Inter and JetBrains Mono).

### Architecture
The project follows a component-driven architecture with a strong emphasis on content/code separation. Most site copy, metadata, and structured data are managed within a single TypeScript file to ensure consistency and ease of updates.

## 🛠 Building and Running

The project uses standard Astro commands. While `npm` is listed in the `package.json`, the presence of `pnpm-lock.yaml` and `bun.lock` suggests a preference for modern package managers.

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies |
| `pnpm run dev` | Starts the local development server at `localhost:4321` |
| `pnpm run build` | Builds the production site to the `./dist/` directory |
| `pnpm run preview` | Previews the production build locally |
| `pnpm run astro ...` | Executes Astro CLI commands (e.g., `astro check`) |

## 📐 Development Conventions

### Content Updates
- **DO NOT** hardcode text directly into components if it belongs to the site's primary copy.
- **DO** update `src/utils/siteContent.ts` to change slogans, service descriptions, team info, or meta tags.
- The `siteContent` object is the "Single Source of Truth" for the entire site.

### Styling with Tailwind CSS v4
- The project uses **Tailwind CSS v4**.
- Theme tokens (colors, fonts, spacing, animations) are defined in `src/styles/main.css` using the `@theme` block.
- Prefer using the custom semantic variables defined in the theme (e.g., `bg-background`, `text-primary`, `glass-card`).
- Custom animations (e.g., `fade-in-up`, `shimmer`) are also defined in `main.css`.

### Components and Layouts
- **Components:** Found in `src/components/`. Keep them atomic and reusable.
- **Layouts:** `src/layouts/Layout.astro` is the primary wrapper. It handles the `<head>`, global styles, and the standard page structure.
- **UI Components:** Specialized UI-only components are organized in `src/components/ui/`.

### Interactivity
- Use **Alpine.js** for client-side logic (toggles, intersections, simple state).
- The Alpine entrypoint is `src/utils/alpine.ts`.
- Complex state should be kept to a minimum as this is primarily a static site.

### Media and Icons
- **Icons:** Place SVG icons in `src/assets/icons/` and use them via the `<Icon name="..." />` component from `astro-icon`.
- **Fonts:** Configured in `astro.config.mjs`. Use `<Font cssVariable="..." />` in layouts to inject variables.
- **Images:** Static images (logos, team photos) are stored in `public/images/`.

### SEO and Metadata
- SEO is handled via the `siteContent.site` object and `src/utils/siteContent.ts`'s `structuredData` for JSON-LD.
- Ensure any new pages are reflected in `src/pages/sitemap.xml.ts` or handled by the `@astrojs/sitemap` integration.
