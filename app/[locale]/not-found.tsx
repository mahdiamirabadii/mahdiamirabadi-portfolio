"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/routing";

export default function NotFound() {
  const locale = useLocale() as Locale;
  const content = getContent(locale);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm tracking-[0.3em] text-accent-2 uppercase">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
        {content.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-base leading-8 text-muted">
        {content.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white transition-transform duration-[160ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 active:scale-[0.97]"
      >
        {content.notFound.cta}
      </Link>
    </section>
  );
}
