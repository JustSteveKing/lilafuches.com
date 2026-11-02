// build.format "file" makes Astro.url.pathname end in .html at build time,
// so /about renders as /about.html and the home page as /index.html.
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
