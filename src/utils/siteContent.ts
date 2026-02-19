// Site content configuration
// All static content in one place for easy management

export const siteContent = {
  // Site meta information
  site: {
    title: "Lila Fuches - Developer Content That Actually Works",
    description: "We're Steve 'The API Guy' McDougall and Amy, and we help companies build authentic developer relations through content that resonates, workshops that deliver value, and strategies that actually work.",
    year: new Date().getFullYear(),
    companyName: "Lila Fuches",
    tagline: "Creating more engaging content",
    email: "hello@lilafuches.com",
    url: "https://lilafuches.com",
    keywords: "developer relations, devrel, technical content, API tutorials, developer workshops, technical writing, developer advocacy, Laravel, PHP, API design",
    author: "Steve McDougall & Amy McDougall",
    themeColor: "#0f172a", // slate-900
    twitterHandle: "@JustSteveKing",
  },

  // Structured data for SEO
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lila Fuches",
    "url": "https://lilafuches.com",
    "logo": "https://lilafuches.com/images/logo.png",
    "description": "We help companies build authentic developer relations through content that resonates, workshops that deliver value, and strategies that actually work.",
    "email": "hello@lilafuches.com",
    "foundingDate": "2019",
    "founder": [
      {
        "@type": "Person",
        "name": "Steve McDougall",
        "jobTitle": "Technical Content Creator & API Expert",
        "sameAs": [
          "https://x.com/JustSteveKing",
          "https://github.com/JustSteveKing",
          "https://youtube.com/juststeveking"
        ]
      },
      {
        "@type": "Person",
        "name": "Amy McDougall",
        "jobTitle": "Operations Lead"
      }
    ],
    "areaServed": "Global",
    "serviceType": [
      "Developer Relations",
      "Technical Content Creation",
      "Developer Workshops",
      "API Documentation",
      "Technical Writing"
    ],
    "knowsAbout": [
      "API Design",
      "Laravel",
      "PHP",
      "Developer Experience",
      "Technical Writing",
      "Developer Advocacy"
    ]
  },

  company: {
    name: "Lila Fuches Limited.",
    founded: 2019
  },

  // Navigation
  navigation: {
    menuItems: [
      { label: "Services", href: "#services" },
      { label: "Approach", href: "#approach" },
      { label: "About", href: "#about" },
    ],
  },

  // Hero section
  hero: {
    badge: "Creating better developer content",
    title: {
      main: "Developer Content That",
      highlight: "Drives Results",
    },
    subtitle: "From bite-sized tutorials to in-depth workshops, we create technical content that gets developers excited - and helps your product grow. Build real developer engagement with content, workshops, and strategies that actually work.",
    primaryCTA: {
      text: "Let's Talk",
      href: "#contact",
    },
    secondaryCTA: {
      text: "See Our Clients",
      href: "#clients",
    },
    codeSnippet: {
      code: `GET /content           → 200 OK: "engaging"
POST /workshops        → 201 Created: "hands-on"
PATCH /strategy        → 204 No Content: "authentic"
GET /results           → 200 OK: "measurable"
`,
      lang: 'shell',
      theme: 'github-dark'
    },
  },

  // What We Do section
  services: {
    id: "services",
    title: "What We Do",
    subtitle: "Developer Relations is more than just writing docs. It's about building genuine connections through valuable content.",
    items: [
      {
        title: "Written Content",
        description: "Technical blogs, tutorials, and documentation that developers actually want to read.",
        icon: "book",
      },
      {
        title: "Video Content",
        description: "Engaging video tutorials, course content, and technical walkthroughs.",
        icon: "video",
      },
      {
        title: "Live Streams",
        description: "Interactive coding sessions and Q&As that build community engagement.",
        icon: "broadcast",
      },
      {
        title: "Workshops",
        description: "Hands-on training sessions that leave developers with practical skills.",
        icon: "workshop",
      },
    ],
  },

  // Company approach section
  approach: {
    badge: "OUR APPROACH",
    title: "We Speak Your Language",
    subtitle: "As developers ourselves, we understand what the community needs. Our team combines deep technical expertise with proven content strategies.",
    description: "We don't just create content – we craft experiences that developers actually want to engage with. From RESTful API tutorials to advanced architectural patterns, we help companies build authentic relationships with the developer community.",
    highlights: [
      {
        title: "Developer-First Mindset",
        description: "Every piece of content is created by developers, for developers",
      },
      {
        title: "Technical Accuracy",
        description: "We ensure all content is technically sound and up-to-date",
      },
      {
        title: "Community Understanding",
        description: "Deep knowledge of developer pain points and preferences",
      },
    ],
    apiEndpoints: [
      {
        method: "GET",
        endpoint: "/api/developers/engagement",
        status: "200 OK",
        color: "green",
      },
      {
        method: "POST",
        endpoint: "/api/content/technical-blogs",
        status: "201 Created",
        color: "yellow",
      },
      {
        method: "PUT",
        endpoint: "/api/workshops/hands-on-training",
        status: "200 OK",
        color: "blue",
      },
      {
        method: "PATCH",
        endpoint: "/api/devrel/strategy",
        status: "204 No Content",
        color: "purple",
      },
    ],
  },

  // About section / Team
  about: {
    id: "about",
    title: "Meet The Team",
    subtitle: "A dedicated team of developers and content strategists passionate about building better developer experiences",
    team: [
      {
        name: "Steve McDougall",
        avatar: "/images/steve.png",
        role: "Co-Founder & Technical Lead",
        description: "Technical content strategist and developer advocate with years of experience building and teaching. Steve leads our technical content strategy and ensures everything we create resonates with developers.",
        socialLinks: [
          { platform: "twitter", url: "https://twitter.com/JustSteveKing" },
          { platform: "github", url: "https://github.com/JustSteveKing" },
          { platform: "linkedin", url: "https://linkedin.com/in/steve-mcdougall" },
        ],
      },
      {
        name: "Amy McDougall",
        avatar: "/images/amy.png",
        role: "Co-Founder & Operations Lead",
        description: "The strategic backbone of Lila Fuches, Amy ensures seamless project delivery and client success. From content planning to client relations, she makes sure our strategies exceed expectations.",
        socialLinks: [
          { platform: "linkedin", url: "https://www.linkedin.com/in/amy-mcdougall-3a78b713a/" },
        ],
      },
    ],
  },

  // Client showcase section
  clients: {
    id: "clients",
    title: "Trusted by Industry Leaders",
    subtitle: "We've helped companies of all sizes build better developer relationships and create content that drives results",
    logos: [
      {
        name: "Permit.io",
        logo: "/images/clients/permit.svg",
        alt: "Permit.io authorization platform logo",
        website: "https://permit.io?ref=lilafuches"
      },
      {
        name: "Warp",
        logo: "/images/clients/warp.svg",
        alt: "Warp terminal logo",
        website: "https://warp.dev?ref=lilafuches"
      },
      {
        name: "Hookdeck",
        logo: "/images/clients/hookdeck.svg",
        alt: "Hookdeck webhook infrastructure logo",
        website: "https://hookdeck.com?ref=lilafuches"
      },
      {
        name: "Sevalla",
        logo: "/images/clients/sevalla.svg",
        alt: "Sevalla hosting platform logo",
        website: "https://sevalla.com?ref=lilafuches"
      },
      {
        name: "Tighten",
        logo: "/images/clients/tighten.svg",
        alt: "Tighten Co. logo",
        website: "https://tighten.com?ref=lilafuches"
      },
      {
        name: "Zuplo",
        logo: "/images/clients/zuplo.svg",
        alt: "Zuplo API management platform logo",
        website: "https://zuplo.com?ref=lilafuches"
      }
    ],
    testimonial: {
      quote: "We came for the APIs but we stayed for the clean code, robust systems architecture and deep knowledge of Laravel conventions. The team made our code faster, more stable and easier to maintain ourselves in the future.",
      author: "Peter Thomson",
      company: "Icehouse Ventures",
      role: "Chief Technology Officer",
      avatar: "https://github.com/peterjthomson.png"
    },

    // Additional testimonials for future use
    alternateTestimonials: [
      {
        quote: "The team was fantastic to work with. Their deep understanding of Laravel, both technically and culturally, made them the perfect partners to collaborate with.",
        author: "Phil Leggetter",
        company: "Hookdeck",
        role: "Head of Developer Relations",
        avatar: "https://github.com/leggetter.png"
      },
      {
        quote: "Lila Fuches brings knowledge and passion to the community, with easy to follow content that adds real value to any company that works with them.",
        author: "Steven Tey",
        company: "Dub.co",
        role: "Founder",
        avatar: "https://github.com/steven-tey.png"
      },
      {
        quote: "The team are awesome writers and communicators who can take complex problems and communicate them in a way that anyone can understand.",
        author: "Eric Barnes",
        company: "Laravel News",
        role: "Founder/Editor",
        avatar: "https://github.com/ericlbarnes.png"
      }
    ]
  },

  // Statistics section
  statistics: {
    title: "Why Developers Trust Us",
    stats: [
      {
        number: "100%",
        label: "Developer-First Content Strategy",
      },
      {
        number: "1000+",
        label: "Technical Articles & Tutorials Published",
      },
      {
        number: "100k+",
        label: "Developers Reached Globally",
      },
      {
        number: "15+",
        label: "Years Combined Developer Experience",
      },
    ],
  },

  // Call to action section
  cta: {
    id: "contact",
    title: "Ready to Create Better Content?",
    subtitle: "Let's create content that developers actually want to engage with.",
    primaryButton: {
      text: "Get In Touch",
      href: "https://juststeveking.link/cal",
    }
  },

  // Footer
  footer: {
    logo: "LF",
    copyright: "© 2024 Lila Fuches. Building better DevRel.",
    links: [
      {
        label: "Twitter",
        href: "https://twitter.com/JustSteveKing",
      },
      {
        label: "GitHub",
        href: "https://github.com/JustSteveKing",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
      },
      {
        label: "Contact",
        href: "mailto:hello@lilafuches.com",
      },
    ],
  },
};

export default siteContent;
