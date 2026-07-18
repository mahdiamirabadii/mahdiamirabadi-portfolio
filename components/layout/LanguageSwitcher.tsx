"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("language");

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="glass flex items-center rounded-full p-1"
      role="group"
      aria-label={t("switch")}
    >
      {routing.locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchLocale(item)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-[color,background-color,box-shadow,transform] duration-[160ms] ease-out active:scale-[0.97]",
            locale === item
              ? "bg-white/10 text-foreground shadow-sm"
              : "text-muted hover:text-foreground",
          )}
          aria-pressed={locale === item}
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
}
