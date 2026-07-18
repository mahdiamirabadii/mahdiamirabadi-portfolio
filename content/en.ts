import type { PortfolioContent } from "./types";

export const en: PortfolioContent = {
  meta: {
    title: "Mahdi Amirabadi — Frontend Developer for SaaS & Web Apps",
    description:
      "Frontend developer building fast, modern, scalable interfaces for SaaS products and online businesses. Creator of Mizdan. Open to freelance and remote work.",
    ogImage: "/profile.jpg",
  },
  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm",
    name: "Mahdi Amirabadi",
    role: "Frontend Developer",
    tagline:
      "I build fast, modern, scalable user interfaces for SaaS products and online businesses — focused on UX, code quality, and detail.",
    audience:
      "Working with founders, product teams, and remote employers who need reliable UI delivered on time.",
    ctaPrimary: "View projects",
    ctaPrimaryHref: "#projects",
    ctaSecondary: "Start a project",
    ctaSecondaryHref: "#contact",
  },
  about: {
    title: "About me",
    subtitle: "How I think and how I build",
    paragraphs: [
      "I'm Mahdi Amirabadi, a frontend developer focused on React and Next.js. I start from the user and business problem, then implement UI that feels fast, clear, and dependable.",
      "I care about detail, clean architecture, and on-time delivery. I communicate clearly, apply feedback quickly, and don't call the work done until it's ready for real use.",
      "Alongside frontend, I use backend concepts and AI tools to move faster and tackle harder problems — without trading away quality.",
    ],
    stats: [
      { value: 1, suffix: ".5+", label: "Years building products" },
      { value: 1, suffix: "", label: "Live SaaS product" },
      { value: 7, suffix: "+", label: "Real & personal projects" },
    ],
    image: "/profile.jpg",
    imageAlt: "Photo of Mahdi Amirabadi",
  },
  services: {
    title: "Services",
    subtitle:
      "From landing pages to SaaS frontends — what you need to ship a polished product.",
    items: [
      {
        id: "landing",
        title: "Landing Pages",
        description:
          "Conversion-focused pages with clear hierarchy, strong CTAs, and fast load.",
        icon: "layout",
      },
      {
        id: "corporate",
        title: "Corporate Websites",
        description:
          "Professional brand sites with clean structure and a trustworthy experience.",
        icon: "building",
      },
      {
        id: "saas",
        title: "SaaS Frontends",
        description:
          "Product interfaces with complex flows, states, and scalable UI systems.",
        icon: "layers",
      },
      {
        id: "dashboard",
        title: "Dashboard Development",
        description:
          "Readable, data-aware admin panels built for daily team use.",
        icon: "panel",
      },
      {
        id: "responsive",
        title: "Responsive UI",
        description:
          "Precise implementation from mobile to desktop without losing quality.",
        icon: "smartphone",
      },
      {
        id: "ui-impl",
        title: "UI Implementation",
        description:
          "Pixel-perfect design-to-code with maintainable components.",
        icon: "pen",
      },
      {
        id: "performance",
        title: "Performance Optimization",
        description:
          "Faster loads and smoother interactions for real-world users.",
        icon: "zap",
      },
      {
        id: "react-apps",
        title: "Modern React Applications",
        description:
          "React/Next.js apps with clean architecture, TypeScript, and Vercel deploy.",
        icon: "code",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle:
      "What I use to ship modern products — categorized, without fake percentages.",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        description: "Core of interface and user experience work.",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "shadcn/ui",
        ],
      },
      {
        id: "backend",
        title: "Backend familiarity",
        description: "Enough to collaborate closely and ship real data flows.",
        items: ["Prisma", "Firebase", "REST APIs"],
      },
      {
        id: "deployment",
        title: "Deployment",
        description: "Getting products live and keeping them maintainable.",
        items: ["Vercel", "Git"],
      },
      {
        id: "tools",
        title: "Tools",
        description: "Daily quality, coordination, and shipping speed.",
        items: ["Git", "Figma", "VS Code"],
      },
      {
        id: "ai",
        title: "AI workflow",
        description:
          "Targeted AI use for speed, quality, and harder problem-solving.",
        items: ["AI-assisted development", "Product thinking"],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle:
      "Focused on real problems — from a live SaaS product to selected practice work.",
    featuredLabel: "Featured",
    otherLabel: "Selected work",
    labels: {
      problem: "Problem",
      solution: "Solution",
      role: "My role",
      challenges: "Challenges",
      outcome: "Outcome",
      stack: "Stack",
    },
    liveLabel: "Live demo",
    codeLabel: "Source",
    items: [
      {
        id: "mizdan",
        title: "Mizdan",
        featured: true,
        description:
          "A SaaS platform for cafés and restaurants — digital menus, orders, CRM, and daily operations.",
        problem:
          "Food businesses juggle fragmented tools for menus, orders, and customers — weak guest experience and weak operational control.",
        solution:
          "One integrated platform with QR menus, order management, CRM, and an admin dashboard for daily operations.",
        role:
          "Frontend development, UI implementation, and collaboration on product and UX decisions.",
        challenges:
          "Multi-role flows (guest, staff, manager), fast UI on weak networks, and keeping the live menu in sync with operations.",
        outcome:
          "A live product at mizdan.ir — ready for real food businesses.",
        tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
        liveUrl: "https://mizdan.ir",
        githubUrl: "#",
        gradient: "from-violet-600/40 via-fuchsia-500/20 to-cyan-500/30",
      },
      {
        id: "planner-app",
        title: "Planner App",
        description:
          "A Persian RTL productivity app — daily tasks, kanban, habits, goals, notes, and a command palette. Local-first with PWA support.",
        tags: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
        liveUrl: "https://mahdiamirabadii.github.io/planner-app/",
        githubUrl: "https://github.com/mahdiamirabadii/planner-app",
        gradient: "from-sky-500/40 via-indigo-500/20 to-violet-600/30",
      },
      {
        id: "contact-app",
        title: "Contact App",
        description:
          "Contact management with component architecture and organized state.",
        tags: ["React", "JavaScript", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/react-contact-app",
        gradient: "from-cyan-500/40 via-blue-500/20 to-violet-600/30",
      },
      {
        id: "quiz-app",
        title: "Quiz App",
        description:
          "Interactive quiz with a clear UI flow and transparent scoring.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/Quiz-App-JS",
        gradient: "from-emerald-500/40 via-teal-500/20 to-cyan-500/30",
      },
      {
        id: "todo-app",
        title: "Todo App",
        description:
          "Daily tasks with a clean structure and smooth UI updates.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/todo-app-js",
        gradient: "from-orange-500/40 via-rose-500/20 to-violet-600/30",
      },
      {
        id: "product-filter",
        title: "Product Filter",
        description:
          "Product listing with search and filters — clarity first.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/js-product-filter",
        gradient: "from-blue-500/40 via-indigo-500/20 to-violet-600/30",
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Building real products, not just tutorials",
    items: [
      {
        role: "Frontend Developer",
        company: "Freelance & personal product",
        period: "2025 — Present",
        description:
          "Shipping web interfaces and SaaS UI with attention to detail, code quality, and business needs.",
        highlights: [
          "Shipped Mizdan as a live SaaS product",
          "Available for freelance, part-time, and remote work",
          "Consistent delivery with maintainable architecture",
        ],
      },
      {
        role: "Product & portfolio work",
        company: "Personal projects",
        period: "1.5+ years",
        description:
          "Targeted projects to strengthen frontend architecture, UX, and implementation quality.",
        highlights: [
          "Published selected work on GitHub",
          "Deep work with React, Next.js, and TypeScript",
          "More projects in progress",
        ],
      },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    subtitle: "Freelance · Part-time · Remote",
    description:
      "If you need a reliable partner for a landing page, corporate site, or SaaS frontend — message me directly. I usually reply quickly.",
    socials: [
      {
        name: "Email",
        href: "mailto:amiri3818@gmail.com",
        icon: "email",
      },
      {
        name: "GitHub",
        href: "https://github.com/mahdiamirabadii",
        icon: "github",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mahdi-amirabadi",
        icon: "linkedin",
      },
      {
        name: "Instagram",
        href: "https://instagram.com/mahdiamirabadi_",
        icon: "instagram",
      },
    ],
  },
  blog: {
    title: "Blog",
    subtitle: "",
    readMore: "Read article",
    backToBlog: "Back to blog",
    posts: [],
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Designed & developed by Mahdi Amirabadi",
  },
  notFound: {
    title: "Page not found",
    description: "This path doesn’t exist or has moved.",
    cta: "Back to home",
  },
};
