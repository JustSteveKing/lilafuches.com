// Site content configuration
// All static content in one place for easy management

export const siteContent = {
  // Site meta information
  site: {
    title: "Lila Fuches - Expert Engineering, Education, & Content",
    description:
      "Expert Fractional CTO services, API architecture, and technical content for Laravel and API-focused companies. Scale your product and team with senior-level guidance.",
    year: new Date().getFullYear(),
    companyName: "Lila Fuches",
    tagline: "High-level expertise, approachably delivered.",
    email: "hello@lilafuches.com",
    url: "https://lilafuches.com",
    keywords:
      "fractional cto, api design, laravel development, php consulting, developer education, technical content, laravel certification, developer relations, devrel",
    author: "Steve McDougall & Amy McDougall",
    themeColor: "#44403c", // stone-700
    twitterHandle: "@JustSteveKing",
  },

  // Structured data for SEO
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://lilafuches.com/#organization",
    name: "Lila Fuches",
    url: "https://lilafuches.com",
    logo: "https://lilafuches.com/images/logo.png",
    description:
      "Expert engineering, education, and content services for the Laravel and API ecosystem.",
    email: "hello@lilafuches.com",
    foundingDate: "2019",
    founder: [
      {
        "@type": "Person",
        name: "Steve McDougall",
        jobTitle: "Co-Founder & Technical Lead",
        sameAs: [
          "https://x.com/JustSteveKing",
          "https://github.com/JustSteveKing",
          "https://youtube.com/juststeveking",
        ],
      },
      {
        "@type": "Person",
        name: "Amy McDougall",
        jobTitle: "Co-Founder & Operations Lead",
      },
    ],
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lila Fuches Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Consulting & Engineering",
          description:
            "Fractional CTO services, contract development, and API architecture.",
          provider: { "@id": "https://lilafuches.com/#organization" },
        },
        {
          "@type": "Service",
          name: "Content Creation",
          description: "Results-driven technical content and DevRel strategy.",
          provider: { "@id": "https://lilafuches.com/#organization" },
        },
        {
          "@type": "Service",
          name: "Education & Training",
          description:
            "Laravel certification pathways and technical workshops.",
          provider: { "@id": "https://lilafuches.com/#organization" },
        },
      ],
    },
  },

  company: {
    name: "Lila Fuches Limited.",
    founded: 2019,
  },

  // Navigation
  navigation: {
    menuItems: [
      { label: "Engineering", href: "#engineering" },
      { label: "Content", href: "#content" },
      { label: "Education", href: "#education" },
      { label: "About", href: "#about" },
    ],
  },

  // Hero section
  hero: {
    badge: "15+ Years of Engineering Excellence",
    title: {
      main: "Expert Guidance for",
      highlight: "Scaling Teams & Tech",
    },
    subtitle:
      "From Fractional CTO services and API architecture to high-impact developer content and certification training. We provide the senior-level expertise you need to grow your product and your team, without the overhead of a full-time executive hire.",
    primaryCTA: {
      text: "Book a Consultation",
      href: "https://juststeveking.link/cal",
    },
    secondaryCTA: {
      text: "View Our Expertise",
      href: "#how-we-help",
    },
  },

  // Clients / Trusted By
  clients: {
    title: "Trusted by engineering teams at",
    logos: [
      {
        name: "Hookdeck",
        logo: "/images/clients/hookdeck.svg",
        website: "https://hookdeck.com",
      },
      {
        name: "Permit.io",
        logo: "/images/clients/permit.svg",
        website: "https://permit.io",
      },
      {
        name: "Sevalla",
        logo: "/images/clients/sevalla.svg",
        website: "https://sevalla.com",
      },
      {
        name: "Tighten",
        logo: "/images/clients/tighten.svg",
        website: "https://tighten.com",
      },
      {
        name: "Warp",
        logo: "/images/clients/warp.svg",
        website: "https://warp.dev",
      },
      {
        name: "Zuplo",
        logo: "/images/clients/zuplo.svg",
        website: "https://zuplo.com",
      },
    ],
  },

  // Testimonials
  testimonials: {
    title: "What our partners say",
    subtitle:
      "We build strong relationships with engineering teams, turning complex challenges into streamlined solutions.",
    items: [
      {
        quote:
          "We came for the APIs but we stayed for the clean code, robust systems architecture and deep knowledge of Laravel conventions. The team made our code faster, more stable and easier to maintain ourselves in the future.",
        author: "Peter Thomson",
        company: "Icehouse Ventures",
        role: "Chief Technology Officer",
        avatar: "https://github.com/peterjthomson.png",
      },
      {
        quote:
          "The team was fantastic to work with. Their deep understanding of Laravel, both technically and culturally, made them the perfect partners to collaborate with.",
        author: "Phil Leggetter",
        company: "Hookdeck",
        role: "Head of Developer Relations",
        avatar: "https://github.com/leggetter.png",
      },
      {
        quote:
          "Lila Fuches brings knowledge and passion to the community, with easy to follow content that adds real value to any company that works with them.",
        author: "Steven Tey",
        company: "Dub.co",
        role: "Founder",
        avatar: "https://github.com/steven-tey.png",
      },
      {
        quote:
          "The team are awesome writers and communicators who can take complex problems and communicate them in a way that anyone can understand.",
        author: "Eric Barnes",
        company: "Laravel News",
        role: "Founder/Editor",
        avatar: "https://github.com/ericlbarnes.png",
      },
    ],
  },

  // Three Pillars Section
  pillars: {
    title: "How We Help",
    subtitle:
      "Three core areas of expertise, delivered with the precision of a CTO and the approachability of a boutique agency.",
    items: [
      {
        id: "engineering",
        title: "Consulting & Engineering",
        description:
          "Fractional CTO services, contract development, and API architecture for companies that need senior leadership on a flexible basis. We help you build robust, scalable systems that last.",
        features: [
          "Fractional CTO Services",
          "API Design & Architecture",
          "Contract Laravel/PHP Development",
          "Acquisition Due Diligence",
        ],
        icon: "mdi:rocket-launch",
        color: "engineering",
      },
      {
        id: "content",
        title: "Content Creation",
        description:
          "Results-driven technical content that resonates with developers. From tutorials to DevRel strategy, we help you build authentic authority in the developer community.",
        features: [
          "Technical Blog Content",
          "DevRel Strategy & Audit",
          "Video Tutorials & Courses",
          "Documentation as a Service",
        ],
        icon: "mdi:fountain-pen-tip",
        color: "content",
      },
      {
        id: "education",
        title: "Education & Training",
        description:
          "High-level training for engineering teams. We maintain the learning pathways for the Laravel Certification and run workshops that deliver immediate value.",
        features: [
          "Laravel Certification Pathways",
          "Hands-on Technical Workshops",
          "Engineering Team Mentorship",
          "Custom Corporate Training",
        ],
        icon: "mdi:school",
        color: "education",
      },
    ],
  },

  // Principles / Values
  principles: {
    title: "How We Work",
    subtitle: "Built on principles that ensure your project succeeds beyond our engagement.",
    items: [
      {
        title: "Senior-First Involvement",
        description: "You work directly with founders. No 'junior-handover' after the contract is signed.",
        icon: "mdi:account-star",
      },
      {
        title: "Future-Proof Thinking",
        description: "We build for the team you'll have in two years, not just the code you need today.",
        icon: "mdi:clock-fast",
      },
      {
        title: "Clear Communication",
        description: "Zero jargon. Just honest, actionable engineering advice and status updates.",
        icon: "mdi:message-text-fast",
      },
      {
        title: "Community Deep-Roots",
        description: "Our solutions are informed by our leadership roles in the Laravel and API ecosystems.",
        icon: "mdi:account-group",
      },
    ],
  },

  // About section / Team
  about: {
    id: "about",
    title: "Meet The Founders",
    subtitle:
      "A balanced partnership of technical leadership and operational excellence.",
    team: [
      {
        name: "Steve McDougall",
        avatar: "/images/steve.png",
        role: "Co-Founder & Technical Lead",
        description:
          "With over 15 years in engineering, Steve has served as CTO, Engineering Manager, and Fractional CTO for multiple acquisitions. A minor influencer in the API space and a leader in the Laravel community, he ensures every technical project is delivered to the highest standard.",
        socialLinks: [
          { platform: "twitter", url: "https://twitter.com/JustSteveKing" },
          { platform: "github", url: "https://github.com/JustSteveKing" },
          {
            platform: "linkedin",
            url: "https://linkedin.com/in/steve-mcdougall",
          },
        ],
      },
      {
        name: "Amy McDougall",
        avatar: "/images/amy.png",
        role: "Co-Founder & Operations Lead",
        description:
          "The strategic force behind Lila Fuches, Amy ensures seamless project execution and client success. Her focus on operational excellence makes our high-level consulting approachable and affordable for businesses of all sizes.",
        socialLinks: [
          {
            platform: "linkedin",
            url: "https://www.linkedin.com/in/amy-mcdougall-3a78b713a/",
          },
        ],
      },
    ],
  },

  // Statistics section
  statistics: {
    title: "Expertise by the Numbers",
    stats: [
      {
        number: "15+",
        label: "Years Engineering Experience",
      },
      {
        number: "4+",
        label: "CTO & Leadership Roles",
      },
      {
        number: "1000+",
        label: "Technical Articles Published",
      },
      {
        number: "Global",
        label: "Team Leadership Experience",
      },
    ],
  },

  // Call to action section
  cta: {
    id: "contact",
    title: "Ready to Level Up Your Tech?",
    subtitle:
      "Whether you need a Fractional CTO, a custom workshop, or high-impact content, we're here to help you scale effectively.",
    primaryButton: {
      text: "Book Your Free 15-Minute Intro",
      href: "https://juststeveking.link/cal",
    },
  },

  // Footer
  footer: {
    logo: "LF",
    copyright: "© 2024 Lila Fuches. Professional engineering & consulting.",
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
        href: "https://www.linkedin.com/in/steve-mcdougall",
      },
      {
        label: "Contact",
        href: "mailto:hello@lilafuches.com",
      },
    ],
  },
};

export default siteContent;
