"use client";

import { ArrowUpRight } from "lucide-react";
import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { useLocale } from "next-intl";

type Props = {
  content: PortfolioContent["blog"];
};

export function BlogPreview({ content }: Props) {
  const locale = useLocale();
  const posts = content.posts.slice(0, 3);

  return (
    <section id="blog" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={content.title} subtitle={content.subtitle} />
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-accent-2 transition-[color,transform] duration-[160ms] ease-out hover:text-foreground active:scale-[0.97]"
            >
              {content.readMore}
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col rounded-3xl p-6 transition-[border-color,transform] duration-[160ms] ease-out hover:border-violet-400/25 active:scale-[0.99]"
                data-cursor="hover"
              >
                <div className="flex items-center gap-3 text-xs text-muted-dim">
                  <time dateTime={post.date}>
                    {formatDate(post.date, locale)}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground transition group-hover:text-violet-200">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-8 text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
