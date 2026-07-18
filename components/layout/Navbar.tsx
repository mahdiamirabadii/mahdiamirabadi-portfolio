"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DURATION, EASE_OUT } from "@/lib/motion";

type Props = {
  content: PortfolioContent;
  locale: Locale;
};

export function Navbar({ content, locale }: Props) {
  const pathname = usePathname();
  const t = useTranslations("a11y");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = content.nav
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content.nav, isHome]);

  const getHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHome ? href : `/${locale}${href}`;
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        {t("skipToContent")}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 transition-[margin,max-width,padding,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out sm:px-6",
            scrolled &&
              "navbar-surface mx-4 max-w-5xl rounded-2xl border border-white/10 bg-black/50 px-4 py-3 shadow-2xl sm:mx-auto",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-bold tracking-[0.2em] uppercase transition-transform duration-[160ms] ease-out active:scale-[0.97]"
            data-cursor="hover"
          >
            <Image
              src="/profile.jpg"
              alt={content.about.imageAlt}
              width={36}
              height={36}
              className="size-9 rounded-full object-cover ring-1 ring-white/15"
              priority
            />
            <span className="gradient-text">{content.hero.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {content.nav.map((item) => {
              const isHash = item.href.startsWith("#");
              const isActive =
                (isHash && isHome && active === item.id) ||
                (item.href === "/blog" && pathname.startsWith("/blog"));
              const className = cn(
                "rounded-full px-3 py-2 text-sm transition-[color,transform] duration-[160ms] ease-out active:scale-[0.97]",
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground",
              );

              if (isHash) {
                return (
                  <a key={item.id} href={getHref(item.href)} className={className}>
                    {item.label}
                  </a>
                );
              }

              return (
                <Link key={item.id} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              className="glass rounded-full p-2 transition-transform duration-[160ms] ease-out active:scale-[0.97] md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t("closeMenu") : t("openMenu")}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            style={{ transformOrigin: "top center" }}
            transition={{ duration: DURATION.ui, ease: EASE_OUT }}
            className="navbar-drawer fixed inset-x-4 top-20 z-40 origin-top rounded-2xl border border-white/10 bg-black/90 p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {content.nav.map((item) => {
                const isHash = item.href.startsWith("#");
                const className =
                  "rounded-xl px-4 py-3 text-sm text-muted transition-[color,background-color,transform] duration-[160ms] ease-out hover:bg-white/5 hover:text-foreground active:scale-[0.97]";

                if (isHash) {
                  return (
                    <a
                      key={item.id}
                      href={getHref(item.href)}
                      onClick={() => setOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
