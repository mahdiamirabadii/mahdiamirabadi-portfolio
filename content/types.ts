export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type ServiceIcon =
  | "layout"
  | "building"
  | "layers"
  | "panel"
  | "smartphone"
  | "pen"
  | "zap"
  | "code";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  previewImage?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  role?: string;
  challenges?: string;
  outcome?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "twitter" | "email";
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
  nav: NavItem[];
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    audience: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    stats: Stat[];
    image: string;
    imageAlt: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    subtitle: string;
    featuredLabel: string;
    otherLabel: string;
    labels: {
      problem: string;
      solution: string;
      role: string;
      challenges: string;
      outcome: string;
      stack: string;
    };
    liveLabel: string;
    codeLabel: string;
    items: Project[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: Experience[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    socials: SocialLink[];
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    posts: BlogPost[];
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};
