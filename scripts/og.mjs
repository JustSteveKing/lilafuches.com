// Renders the Open Graph images and app icons with a local Chromium.
// Run `bun run build` first, because the fonts come from the built site.
// Usage: bun run images   (set CHROME if Chromium is not at /usr/bin/chromium)
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const chrome = process.env.CHROME ?? "/usr/bin/chromium";
const tmp = mkdtempSync(join(tmpdir(), "lf-og-"));

const built = readFileSync(join(root, "dist/index.html"), "utf8");
const fontFaces = (built.match(/@font-face\{[^}]*\}/g) ?? [])
  .filter((rule) => rule.includes("/_astro/fonts/"))
  .map((rule) => rule.replaceAll('url("/_astro/', `url("file://${root}/dist/_astro/`))
  .join("\n");
const family = (name) => `"${built.match(new RegExp(`font-family:"?(${name}-[a-f0-9]+)`))?.[1] ?? name}"`;

const monogram = (attrs) => `<svg viewBox="0 0 229 268" ${attrs} aria-hidden="true"><g transform="translate(0 -27)">
  <rect height="219" rx="31" stroke="currentColor" stroke-width="22" width="207" x="11" y="38" fill="none"/>
  <path d="m52 69h22v158h-22z" fill="currentColor"/>
  <path d="m52 206h98v21h-98zm41-137h23v122h-23z" fill="currentColor"/>
  <path d="m93 69h85v21h-85zm0 62h83v20h-83z" fill="currentColor"/></g></svg>`;

const paper = "oklch(18.5% 0.025 305)";
const ink = "oklch(94% 0.014 85)";
const lilac = "oklch(76% 0.11 300)";

function shoot(name, width, height, html, out) {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, html);
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    `--user-data-dir=${join(tmp, "profile")}`, `--window-size=${width},${height}`,
    "--allow-file-access-from-files", "--virtual-time-budget=5000", `--screenshot=${out}`, `file://${file}`,
  ], { stdio: "ignore" });
}

const service = (id) => {
  const md = readFileSync(join(root, `src/content/services/${id}.md`), "utf8");
  const field = (key) => md.match(new RegExp(`^${key}: (.*)$`, "m"))[1].trim();
  return { slug: id, label: field("short"), line: field("headline"), accent: field("accent") };
};

const pages = [
  { slug: "home", label: "A small technical agency", line: "High-level expertise,", accent: "approachably delivered." },
  { slug: "about", label: "About", line: "Two founders,", accent: "one standard of work." },
  service("engineering"),
  service("content"),
  service("education"),
  { slug: "contact", label: "Contact", line: "Tell us what you're", accent: "trying to get done." },
];

const ogDir = join(root, "public/images/og");
mkdirSync(ogDir, { recursive: true });

for (const page of pages) {
  shoot(`og-${page.slug}`, 1200, 630, `<!doctype html><meta charset="utf-8"><style>
    ${fontFaces}
    * { box-sizing: border-box; margin: 0 }
    html, body { width: 1200px; height: 630px; overflow: hidden; background: ${paper}; color: ${ink} }
    body { position: relative; padding: 64px 72px; display: flex; flex-direction: column; font-family: ${family("Schibsted Grotesk")} }
    .brand { display: flex; align-items: center; gap: 16px; font: 400 38px/1 ${family("Newsreader")}; letter-spacing: -.02em }
    .brand svg { height: 48px; color: ${lilac} }
    h1 { margin-top: auto; max-width: 1056px; font: 400 88px/1.04 ${family("Newsreader")}; letter-spacing: -.02em; text-wrap: balance; position: relative }
    em { display: block; color: ${lilac} }
    footer { margin-top: 44px; display: flex; align-items: center; gap: 22px; font: 400 22px/1 ${family("JetBrains Mono")}; letter-spacing: .08em; text-transform: uppercase; color: oklch(78% 0.02 300); position: relative }
    .faces { display: flex }
    .faces img { width: 64px; height: 64px; border-radius: 50%; background: oklch(91% 0.045 300); border: 3px solid ${paper} }
    .faces img + img { margin-left: -14px }
    .mark { position: absolute; right: -40px; bottom: -110px; height: 560px; color: ${lilac}; opacity: .07 }
    .site { margin-left: auto }
  </style>
  ${monogram('class="mark"')}
  <div class="brand">${monogram("")}<span>Lila <i>Fuches</i></span></div>
  <h1>${page.line} <em>${page.accent}</em></h1>
  <footer><span class="faces"><img src="file://${root}/public/images/steve-112.webp"><img src="file://${root}/public/images/amy-112.webp"></span>
  <span>${page.label}</span><span class="site">lilafuches.com</span></footer>`, join(ogDir, `${page.slug}.png`));
}

const icon = (name, size, scale, out) =>
  shoot(name, size, size, `<!doctype html><style>
    * { margin: 0 }
    html, body { width: ${size}px; height: ${size}px; overflow: hidden; background: ${paper}; display: grid; place-items: center }
    svg { height: ${Math.round(size * scale)}px; color: ${lilac} }
  </style>${monogram("")}`, out);

icon("touch", 180, 0.68, join(root, "public/apple-touch-icon.png"));
icon("192", 192, 0.68, join(root, "public/images/icon-192.png"));
icon("512", 512, 0.68, join(root, "public/images/icon-512.png"));
icon("maskable", 512, 0.5, join(root, "public/images/icon-maskable-512.png"));
copyFileSync(join(root, "public/images/icon-512.png"), join(root, "public/images/logo.png"));

rmSync(tmp, { recursive: true, force: true });
