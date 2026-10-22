# lilafuches.com

The website for Lila Fuches, a small technical agency: engineering, content and education for Laravel and API-focused companies.

Built with Astro 7 and Tailwind CSS 4, as a fully static site with no client-side JavaScript framework.

## Working on it

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # static output in dist/
bunx astro check   # type-check .astro files
```

## Where things live

- `src/content/services/` holds one Markdown file per service. Each becomes a page at `/<filename>`, and the home page lists them in `order`. The front matter is validated by `src/content.config.ts`.
- `src/data/site.ts` holds everything else: site details, navigation, founders, testimonials, client logos, principles and the numbers on the About page.
- `src/styles/global.css` holds the brand: colour tokens for light and dark, type, and the few shared component classes.
- `src/assets/clients/` holds client logos, which are inlined so they can be shown in one ink colour in either theme.

Testimonials are quoted verbatim. Don't edit someone else's words, and confirm permission before adding a client logo.

## The brand

"Lila" is lilac and "Fuchs" is fox. The palette is warm paper and aubergine ink, with lilac as the brand colour and fox orange kept for the main action on a page. Type is Newsreader for display, Schibsted Grotesk for text and JetBrains Mono for labels, loaded through Astro's font API.
