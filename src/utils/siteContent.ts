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
  },

  // Navigation
  navigation: {
    logo: "LF",
    menuItems: [
      { label: "Services", href: "#services" },
      { label: "Content", href: "#content" },
      { label: "About", href: "#about" },
      { label: "Workshops", href: "#workshops" },
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
      text: "See Our Work",
      href: "#content",
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

  // API Guy section
  apiGuy: {
    badge: "THE API GUY",
    title: "We Speak Your Language",
    subtitle: "Led by Steve McDougall, known in the community as \"JustSteveKing\" and \"The API Guy\", we understand what developers need because we are developers.",
    description: "We don't just create content – we craft experiences that developers actually want to engage with, from RESTful API tutorials to advanced architectural patterns.",
    socialLinks: [
      {
        platform: "Twitter",
        username: "@JustSteveKing",
        url: "https://twitter.com/JustSteveKing",
      },
      {
        platform: "GitHub",
        username: "GitHub",
        url: "https://github.com/JustSteveKing",
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
    subtitle: "A husband and wife team passionate about building better developer experiences",
    team: [
      {
        name: "Steve McDougall",
        avatar: "/images/steve.png",
        role: "The API Guy • JustSteveKing",
        description: "Technical content creator, API enthusiast, and developer advocate with years of experience building and teaching. Steve leads our technical content strategy and delivers workshops that developers rave about.",
        socialLinks: [
          { platform: "twitter", url: "#" },
          { platform: "github", url: "#" },
          { platform: "linkedin", url: "#" },
        ],
      },
      {
        name: "Amy McDougall",
        avatar: "/images/amy.png",
        role: "Operations Lead",
        description: "The operational backbone of Lila Fuches, Amy ensures everything runs smoothly behind the scenes. From project management to client relations, she makes sure our content delivers on time and exceeds expectations.",
        socialLinks: [
          { platform: "linkedin", url: "#" },
        ],
      },
    ],
  },

  // Content showcase section
  contentShowcase: {
    id: "content",
    title: "Content That Converts",
    subtitle: "From quick tutorials to deep-dive workshops, we create content that drives developer adoption",
    examples: [
      {
        type: "BLOG POST",
        duration: "5 min read",
        title: "Building RESTful APIs with Laravel",
        description: "A comprehensive guide to building scalable, maintainable APIs that developers love to work with.",
        tags: ["PHP", "Laravel"],
        color: "green",
        codeExample: {
          code: `<?php
class APIController extends Controller {
    public function index() {
        return User::with('posts')
            ->paginate(15);
    }
    
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users'
        ]);
        
        return User::create($validated);
    }
}`,
          lang: "php"
        }
      },
      {
        type: "VIDEO",
        duration: "45 min",
        title: "Event-Driven Architecture Explained",
        description: "Live coding session breaking down complex architectural patterns into digestible pieces.",
        status: "LIVE",
        color: "red",
        codeExample: {
          code: `// Event-driven architecture example
class EventDispatcher {
    private listeners = new Map();
    
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }
    
    emit(event, data) {
        const callbacks = this.listeners.get(event) || [];
        callbacks.forEach(callback => callback(data));
    }
}

// Usage
const dispatcher = new EventDispatcher();
dispatcher.on('user.created', (user) => {
    console.log(\`Welcome \${user.name}!\`);
});`,
          lang: "javascript"
        }
      },
      {
        type: "WORKSHOP",
        duration: "2 days",
        title: "API Design Masterclass",
        description: "Hands-on workshop teaching teams how to design and implement production-ready APIs.",
        availability: "20 spots left",
        color: "cyan",
      },
    ],
  },

  // Statistics section
  statistics: {
    title: "Why Developers Trust Us",
    stats: [
      {
        number: "100%",
        label: "Developer-First Approach",
      },
      {
        number: "500+",
        label: "Pieces of Content Created",
      },
      {
        number: "50k+",
        label: "Developers Reached",
      },
      {
        number: "10+",
        label: "Years of Experience",
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
      href: "mailto:hello@lilafuches.com",
    },
    secondaryButton: {
      text: "Book a Workshop",
      href: "#workshops",
    },
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
