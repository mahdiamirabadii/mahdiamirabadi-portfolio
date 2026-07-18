import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale as Locale);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6 md:pt-40">
      <SectionHeading
        title={content.blog.title}
        subtitle={content.blog.subtitle}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.blog.posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="glass group flex h-full flex-col rounded-3xl p-7 transition-[border-color,transform] duration-[160ms] ease-out hover:border-violet-400/25 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 text-xs text-muted-dim">
                <time dateTime={post.date}>
                  {formatDate(post.date, locale)}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-foreground transition group-hover:text-violet-200">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {post.excerpt}
              </p>
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
              <span className="mt-6 text-sm text-accent-2">
                {content.blog.readMore} →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
