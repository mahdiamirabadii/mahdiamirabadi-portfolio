import { en } from "./en";
import { fa } from "./fa";
import type { PortfolioContent } from "./types";
import type { Locale } from "@/i18n/routing";

const contentMap: Record<Locale, PortfolioContent> = {
  en,
  fa,
};

export function getContent(locale: Locale): PortfolioContent {
  return contentMap[locale] ?? en;
}

export function getBlogPost(locale: Locale, slug: string) {
  return getContent(locale).blog.posts.find((post) => post.slug === slug);
}

export type { PortfolioContent };
