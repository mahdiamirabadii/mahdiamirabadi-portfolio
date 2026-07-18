import type { PortfolioContent } from "./types";

export const fa: PortfolioContent = {
  meta: {
    title: "مهدی امیرآبادی — Front-end Developer برای SaaS و وب‌اپ",
    description:
      "توسعه‌دهنده Front-end با تمرکز روی رابط‌های سریع، مدرن و مقیاس‌پذیر برای محصولات SaaS و کسب‌وکارهای آنلاین. سازنده میزدان. باز برای فریلنس و ریموت.",
    ogImage: "/profile.jpg",
  },
  nav: [
    { id: "about", label: "درباره من", href: "#about" },
    { id: "services", label: "خدمات", href: "#services" },
    { id: "skills", label: "مهارت‌ها", href: "#skills" },
    { id: "projects", label: "پروژه‌ها", href: "#projects" },
    { id: "experience", label: "سوابق", href: "#experience" },
    { id: "contact", label: "تماس", href: "#contact" },
  ],
  hero: {
    greeting: "سلام، من",
    name: "مهدی امیرآبادی",
    role: "Front-end Developer",
    tagline:
      "رابط‌های کاربری سریع، مدرن و مقیاس‌پذیر برای محصولات SaaS و کسب‌وکارهای آنلاین می‌سازم — با تمرکز روی تجربه کاربری، کیفیت کد و جزئیات.",
    audience:
      "همکاری با بنیان‌گذاران، تیم‌های محصول و کارفرمایان ریموت که به تحویل منظم و UI قابل‌اعتماد نیاز دارند.",
    ctaPrimary: "مشاهده پروژه‌ها",
    ctaPrimaryHref: "#projects",
    ctaSecondary: "شروع همکاری",
    ctaSecondaryHref: "#contact",
  },
  about: {
    title: "درباره من",
    subtitle: "چطور فکر می‌کنم و چطور می‌سازم",
    paragraphs: [
      "من مهدی امیرآبادی هستم؛ Front-end Developer با تمرکز روی React و Next.js. اول مسئله کاربر و کسب‌وکار را می‌فهمم، بعد UI را طوری پیاده می‌کنم که سریع، واضح و قابل اتکا باشد.",
      "در کار به جزئیات، معماری تمیز و تحویل سر وقت اهمیت می‌دهم. ارتباط شفاف دارم، بازخورد را سریع اعمال می‌کنم و تا محصول برای استفاده واقعی آماده نشود، کار را تمام‌شده نمی‌دانم.",
      "کنار Front-end، با مفاهیم Backend و ابزارهای AI هم کار می‌کنم تا سرعت توسعه بالاتر برود و مسائل پیچیده‌تر قابل‌حل بمانند — بدون قربانی کردن کیفیت.",
    ],
    stats: [
      { value: 1, suffix: ".5+", label: "سال ساخت محصول" },
      { value: 1, suffix: "", label: "محصول SaaS آنلاین" },
      { value: 7, suffix: "+", label: "پروژه واقعی و شخصی" },
    ],
    image: "/profile.jpg",
    imageAlt: "عکس مهدی امیرآبادی",
  },
  services: {
    title: "خدمات",
    subtitle:
      "از لندینگ تا فرانت‌اند SaaS — آنچه برای آوردن محصول به بازار لازم دارید.",
    items: [
      {
        id: "landing",
        title: "لندینگ پیج",
        description:
          "صفحات تبدیل‌محور با سلسله‌مراتب واضح، سرعت بالا و CTA مشخص.",
        icon: "layout",
      },
      {
        id: "corporate",
        title: "وب‌سایت شرکتی",
        description:
          "سایت‌های حرفه‌ای برای برند و کسب‌وکار با ساختار تمیز و تجربه قابل اعتماد.",
        icon: "building",
      },
      {
        id: "saas",
        title: "فرانت‌اند SaaS",
        description:
          "رابط محصول SaaS با جریان‌های پیچیده، وضعیت‌ها و UI مقیاس‌پذیر.",
        icon: "layers",
      },
      {
        id: "dashboard",
        title: "توسعه داشبورد",
        description:
          "پنل‌های مدیریتی خوانا، داده محور و آماده استفاده روزانه تیم.",
        icon: "panel",
      },
      {
        id: "responsive",
        title: "UI ریسپانسیو",
        description:
          "پیاده‌سازی دقیق روی موبایل تا دسکتاپ بدون افت کیفیت تجربه.",
        icon: "smartphone",
      },
      {
        id: "ui-impl",
        title: "پیاده‌سازی UI",
        description:
          "تبدیل طراحی به کد Pixel Perfect با کامپوننت‌های قابل نگهداری.",
        icon: "pen",
      },
      {
        id: "performance",
        title: "بهینه‌سازی عملکرد",
        description:
          "بهبود سرعت لود، تعامل و حس روان بودن محصول برای کاربر واقعی.",
        icon: "zap",
      },
      {
        id: "react-apps",
        title: "اپلیکیشن‌های React مدرن",
        description:
          "وب‌اپ‌های React/Next.js با معماری تمیز، TypeScript و استقرار روی Vercel.",
        icon: "code",
      },
    ],
  },
  skills: {
    title: "مهارت‌ها",
    subtitle: "ابزارهایی که با آن‌ها محصول مدرن می‌سازم — دسته‌بندی‌شده، بدون درصد ساختگی.",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        description: "هسته ساخت رابط و تجربه کاربر.",
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
        title: "آشنایی Backend",
        description: "برای همکاری نزدیک‌تر با تیم و ساخت جریان داده واقعی.",
        items: ["Prisma", "Firebase", "REST APIs"],
      },
      {
        id: "deployment",
        title: "Deployment",
        description: "انتشار و نگه‌داری محصول در محیط production.",
        items: ["Vercel", "Git"],
      },
      {
        id: "tools",
        title: "ابزارها",
        description: "کیفیت، هماهنگی و سرعت در روزمره توسعه.",
        items: ["Git", "Figma", "VS Code"],
      },
      {
        id: "ai",
        title: "AI Workflow",
        description: "استفاده هدفمند از AI برای سرعت، کیفیت و حل مسائل پیچیده.",
        items: ["AI-assisted development", "Product thinking"],
      },
    ],
  },
  projects: {
    title: "پروژه‌ها",
    subtitle:
      "تمرکز روی حل مسئله واقعی — از محصول SaaS تا نمونه‌کارهای هدفمند.",
    featuredLabel: "پروژه شاخص",
    otherLabel: "نمونه‌کارهای منتخب",
    labels: {
      problem: "مسئله",
      solution: "راه‌حل",
      role: "نقش من",
      challenges: "چالش‌ها",
      outcome: "نتیجه",
      stack: "تکنولوژی",
    },
    liveLabel: "مشاهده زنده",
    codeLabel: "سورس",
    items: [
      {
        id: "mizdan",
        title: "میزدان",
        featured: true,
        description:
          "پلتفرم SaaS برای مدیریت کافه و رستوران — منوی دیجیتال، سفارش، CRM و عملیات روزانه.",
        problem:
          "کافه و رستوران‌ها برای منو، سفارش و ارتباط با مشتری ابزار پراکنده دارند؛ تجربه مهمان و کنترل مجموعه ضعیف می‌ماند.",
        solution:
          "یک پلتفرم یکپارچه با منوی QR، مدیریت سفارش، CRM و داشبورد مدیریتی برای ساده کردن عملیات روزانه.",
        role:
          "توسعه Front-end، پیاده‌سازی UI و همکاری در تصمیم‌های محصول و تجربه کاربری.",
        challenges:
          "طراحی جریان‌های چندنقشه (مهمان، پرسنل، مدیر)، UI سریع روی اینترنت ضعیف، و هماهنگی منوی زنده با پنل عملیات.",
        outcome:
          "محصول آنلاین در mizdan.ir — آماده استفاده واقعی برای کسب‌وکارهای حوزه غذا.",
        tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
        liveUrl: "https://mizdan.ir",
        githubUrl: "#",
        gradient: "from-violet-600/40 via-fuchsia-500/20 to-cyan-500/30",
      },
      {
        id: "planner-app",
        title: "اپ برنامه‌ریز",
        description:
          "اپلیکیشن بهره‌وری فارسی و RTL — کار روزانه، کانبان، عادت، هدف، یادداشت و پالت دستورات. Local-first با پشتیبانی PWA.",
        tags: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
        liveUrl: "https://mahdiamirabadii.github.io/planner-app/",
        githubUrl: "https://github.com/mahdiamirabadii/planner-app",
        gradient: "from-sky-500/40 via-indigo-500/20 to-violet-600/30",
      },
      {
        id: "contact-app",
        title: "اپ مدیریت مخاطبین",
        description:
          "مدیریت مخاطب با ساختار کامپوننت‌محور و state منظم — تمرین معماری تمیز UI.",
        tags: ["React", "JavaScript", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/react-contact-app",
        gradient: "from-cyan-500/40 via-blue-500/20 to-violet-600/30",
      },
      {
        id: "quiz-app",
        title: "اپلیکیشن کوییز",
        description:
          "کوییز تعاملی با جریان UI ساده و منطق امتیازدهی شفاف.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/Quiz-App-JS",
        gradient: "from-emerald-500/40 via-teal-500/20 to-cyan-500/30",
      },
      {
        id: "todo-app",
        title: "اپ Todo",
        description:
          "مدیریت کار روزانه با ساختار تمیز و به‌روزرسانی روان رابط.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/todo-app-js",
        gradient: "from-orange-500/40 via-rose-500/20 to-violet-600/30",
      },
      {
        id: "product-filter",
        title: "فیلتر محصولات",
        description:
          "فهرست محصول با جستجو و فیلتر — تمرکز روی وضوح و استفاده آسان.",
        tags: ["JavaScript", "HTML", "CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/mahdiamirabadii/js-product-filter",
        gradient: "from-blue-500/40 via-indigo-500/20 to-violet-600/30",
      },
    ],
  },
  experience: {
    title: "سوابق",
    subtitle: "ساخت محصول واقعی، نه فقط تمرین",
    items: [
      {
        role: "Front-end Developer",
        company: "فریلنس و محصول شخصی",
        period: "اواخر ۱۴۰۳ — اکنون",
        description:
          "ساخت و تحویل رابط وب و محصول SaaS با تمرکز روی جزئیات UI، کیفیت کد و نیاز کسب‌وکار.",
        highlights: [
          "انتشار میزدان به‌عنوان محصول SaaS واقعی",
          "همکاری فریلنس، پاره‌وقت و ریموت",
          "تحویل منظم با معماری قابل نگهداری",
        ],
      },
      {
        role: "ساخت محصول و نمونه‌کار",
        company: "پروژه‌های شخصی",
        period: "بیش از ۱.۵ سال",
        description:
          "پروژه‌های هدفمند برای تقویت معماری Front-end، UX و کیفیت پیاده‌سازی.",
        highlights: [
          "انتشار نمونه‌کارهای عمومی روی GitHub",
          "تمرکز روی React، Next.js و TypeScript",
          "پروژه‌های بیشتر در حال آماده‌سازی",
        ],
      },
    ],
  },
  contact: {
    title: "پروژه‌ای در ذهن دارید؟",
    subtitle: "فریلنس · پاره‌وقت · ریموت",
    description:
      "اگر برای لندینگ، وب‌سایت شرکتی یا فرانت‌اند یک محصول SaaS به همکاری قابل‌اعتماد نیاز دارید، مستقیم پیام بدهید — معمولاً سریع پاسخ می‌دهم.",
    socials: [
      {
        name: "ایمیل",
        href: "mailto:amiri3818@gmail.com",
        icon: "email",
      },
      {
        name: "گیت‌هاب",
        href: "https://github.com/mahdiamirabadii",
        icon: "github",
      },
      {
        name: "لینکدین",
        href: "https://www.linkedin.com/in/mahdi-amirabadi",
        icon: "linkedin",
      },
      {
        name: "اینستاگرام",
        href: "https://instagram.com/mahdiamirabadi_",
        icon: "instagram",
      },
    ],
  },
  blog: {
    title: "بلاگ",
    subtitle: "",
    readMore: "خواندن مقاله",
    backToBlog: "بازگشت به بلاگ",
    posts: [],
  },
  footer: {
    rights: "تمامی حقوق محفوظ است.",
    builtWith: "طراحی و توسعه توسط مهدی امیرآبادی",
  },
  notFound: {
    title: "صفحه پیدا نشد",
    description: "این مسیر وجود ندارد یا جابه‌جا شده است.",
    cta: "بازگشت به خانه",
  },
};
