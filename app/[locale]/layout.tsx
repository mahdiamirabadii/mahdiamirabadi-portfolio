import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getContent } from "@/content";
import { Providers } from "@/components/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { getSiteUrl } from "@/lib/site-url";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale as Locale);
  const siteUrl = getSiteUrl();
  const ogImage = content.meta.ogImage ?? "/profile.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title: content.meta.title,
    description: content.meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "48x48" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
      shortcut: "/favicon.ico",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fa: "/fa",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      url: `/${locale}`,
      title: content.meta.title,
      description: content.meta.description,
      siteName: content.hero.name,
      images: [
        {
          url: ogImage,
          width: 460,
          height: 460,
          alt: content.about.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: content.meta.title,
      description: content.meta.description,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const content = getContent(locale as Locale);
  const dir = locale === "fa" ? "rtl" : "ltr";
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: content.hero.name,
        url: `${siteUrl}/${locale}`,
        description: content.meta.description,
        inLanguage: locale,
      },
      {
        "@type": "Person",
        name: content.hero.name,
        jobTitle: content.hero.role,
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}${content.about.image}`,
        email: "amiri3818@gmail.com",
        sameAs: [
          "https://github.com/mahdiamirabadii",
          "https://www.linkedin.com/in/mahdi-amirabadi",
          "https://instagram.com/mahdiamirabadi_",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Frontend Development",
          "SaaS",
        ],
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="relative min-h-full font-sans text-foreground"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ScrollProgress />
            <CustomCursor />
            <Navbar content={content} locale={locale as Locale} />
            <main id="main" className="relative z-10">
              {children}
            </main>
            <Footer content={content} />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
