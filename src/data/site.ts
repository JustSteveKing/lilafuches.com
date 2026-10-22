// Everything that is not a service page lives here: meta, people, quotes.
// Service pages are a content collection in src/content/services/.

export const site = {
  name: "Lila Fuches",
  legalName: "Lila Fuches Limited",
  url: "https://lilafuches.com",
  founded: 2019,
  tagline: "High-level expertise, approachably delivered.",
  description:
    "A small technical agency for Laravel and API-focused companies: fractional CTO work and API architecture, developer content, and training for engineering teams.",
  email: "hello@lilafuches.com",
  booking: "https://juststeveking.link/cal",
  linkedin: "https://www.linkedin.com/company/lilafuches/",
  ogImage: "/images/open-graph.png",
};

export const nav = [
  { label: "Engineering", href: "/engineering" },
  { label: "Content", href: "/content" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
];

export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  links: { label: string; href: string }[];
};

export const founders: Founder[] = [
  {
    name: "Steve McDougall",
    role: "Co-founder, technical lead",
    photo: "/images/steve.png",
    bio: "Steve has spent more than fifteen years in engineering, as a CTO, an engineering manager, and a fractional CTO through more than one acquisition. He's known in the Laravel community and the API space for writing and teaching, and he does the technical work on every engagement himself.",
    links: [
      { label: "GitHub", href: "https://github.com/JustSteveKing" },
      { label: "LinkedIn", href: "https://linkedin.com/in/steve-mcdougall" },
      { label: "X", href: "https://x.com/JustSteveKing" },
    ],
  },
  {
    name: "Amy McDougall",
    role: "Co-founder, operations lead",
    photo: "/images/amy.png",
    bio: "Amy runs how the work actually gets done: scoping, scheduling, keeping everyone informed, and making sure a project ends with the client better off than when it started. She's the reason senior-level help from us stays approachable and affordable.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/amy-mcdougall-3a78b713a/" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  pillar: "engineering" | "content" | "education";
};

// Quotes are verbatim. Do not edit someone else's words.
export const testimonials: Testimonial[] = [
  {
    quote:
      "We came for the APIs but we stayed for the clean code, robust systems architecture and deep knowledge of Laravel conventions. The team made our code faster, more stable and easier to maintain ourselves in the future.",
    name: "Peter Thomson",
    role: "Chief Technology Officer",
    company: "Icehouse Ventures",
    avatar: "https://github.com/peterjthomson.png",
    pillar: "engineering",
  },
  {
    quote:
      "The team was fantastic to work with. Their deep understanding of Laravel, both technically and culturally, made them the perfect partners to collaborate with.",
    name: "Phil Leggetter",
    role: "Head of Developer Relations",
    company: "Hookdeck",
    avatar: "https://github.com/leggetter.png",
    pillar: "content",
  },
  {
    quote:
      "Lila Fuches brings knowledge and passion to the community, with easy to follow content that adds real value to any company that works with them.",
    name: "Steven Tey",
    role: "Founder",
    company: "Dub.co",
    avatar: "https://github.com/steven-tey.png",
    pillar: "content",
  },
  {
    quote:
      "The team are awesome writers and communicators who can take complex problems and communicate them in a way that anyone can understand.",
    name: "Eric Barnes",
    role: "Founder/Editor",
    company: "Laravel News",
    avatar: "https://github.com/ericlbarnes.png",
    pillar: "education",
  },
];

// Shown as "teams we've worked with". Confirm permission before adding a name.
// `logo` names an SVG in src/assets/clients/, inlined so it can take the text colour.
export const clients = [
  { name: "Hookdeck", logo: "hookdeck", href: "https://hookdeck.com" },
  { name: "Permit.io", logo: "permit", href: "https://permit.io" },
  { name: "Sevalla", logo: "sevalla", href: "https://sevalla.com" },
  { name: "Tighten", logo: "tighten", href: "https://tighten.com" },
  { name: "Warp", logo: "warp", href: "https://warp.dev" },
  { name: "Zuplo", logo: "zuplo", href: "https://zuplo.com" },
];

export const principles = [
  {
    title: "You get the founders",
    body: "The people you speak to before the contract are the people who do the work after it. There's no hand-off to someone junior once it's signed.",
  },
  {
    title: "Built for the team you'll have",
    body: "We design for the team you'll have in two years, not just the code you need this quarter, and we leave things in a state your own people can carry on with.",
  },
  {
    title: "Plain English",
    body: "No jargon for the sake of it. You'll get honest, actionable advice and status updates you can forward to someone non-technical without translating them first.",
  },
  {
    title: "Rooted in the community",
    body: "A lot of what we recommend comes from years spent inside the Laravel and API communities, writing, teaching and building alongside the people who make the tools.",
  },
];

export const numbers = [
  { value: "15+", label: "years in engineering" },
  { value: "4+", label: "CTO and leadership roles" },
  { value: "1,000+", label: "technical articles published" },
  { value: "2019", label: "the year we started" },
];
