import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getContent } from "@/content";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).blog.posts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale as Locale, slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${getContent(locale as Locale).hero.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const content = getContent(locale as Locale);
  const post = getBlogPost(locale as Locale, slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 md:pt-40">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft size={16} className="rtl:rotate-180" />
        {content.blog.backToBlog}
      </Link>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-dim">
        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {post.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 space-y-6 border-t border-white/10 pt-10">
        {post.content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-base leading-8 text-muted sm:text-lg sm:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
