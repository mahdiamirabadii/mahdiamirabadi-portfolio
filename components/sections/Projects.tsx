"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getProjectPreviewImage } from "@/lib/project-previews";

type Props = {
  content: PortfolioContent["projects"];
};

export function Projects({ content }: Props) {
  const featured = content.items.find((item) => item.featured);
  const others = content.items.filter((item) => !item.featured);

  return (
    <section id="projects" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        {featured ? (
          <Reveal>
            <article
              className="glass mt-12 overflow-hidden rounded-3xl border border-white/10"
              data-cursor="hover"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br lg:aspect-auto lg:min-h-[420px] ${featured.gradient}`}
                >
                  {getProjectPreviewImage(featured) ? (
                    <Image
                      src={getProjectPreviewImage(featured)!}
                      alt={`${featured.title} preview`}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute start-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
                    {content.featuredLabel}
                  </span>
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-8 text-muted sm:text-base">
                    {featured.description}
                  </p>

                  <dl className="mt-8 space-y-5">
                    {[
                      { key: "problem", label: content.labels.problem, value: featured.problem },
                      { key: "solution", label: content.labels.solution, value: featured.solution },
                      { key: "role", label: content.labels.role, value: featured.role },
                      {
                        key: "challenges",
                        label: content.labels.challenges,
                        value: featured.challenges,
                      },
                      { key: "outcome", label: content.labels.outcome, value: featured.outcome },
                    ]
                      .filter((row) => row.value)
                      .map((row) => (
                        <div key={row.key}>
                          <dt className="text-xs font-semibold tracking-[0.14em] text-accent-2 uppercase">
                            {row.label}
                          </dt>
                          <dd className="mt-1.5 text-sm leading-7 text-muted">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                  </dl>

                  <div className="mt-8">
                    <p className="text-xs font-semibold tracking-[0.14em] text-muted-dim uppercase">
                      {content.labels.stack}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {featured.liveUrl && featured.liveUrl !== "#" ? (
                    <div className="mt-8">
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-2 transition-[color,transform] duration-[160ms] ease-out hover:text-foreground active:scale-[0.97]"
                      >
                        <ExternalLink size={15} />
                        {content.liveLabel}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <h3 className="mt-16 text-sm font-semibold tracking-[0.18em] text-muted uppercase">
          {content.otherLabel}
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((project, index) => {
            const previewSrc = getProjectPreviewImage(project);

            return (
              <Reveal key={project.id} delay={index * 0.06}>
                <article
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-[border-color] duration-300 hover:border-white/15"
                  data-cursor="hover"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                  >
                    {previewSrc ? (
                      <Image
                        src={previewSrc}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-8 text-muted">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-sm">
                      {project.liveUrl && project.liveUrl !== "#" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent-2 transition-[color,transform] duration-[160ms] ease-out hover:text-foreground active:scale-[0.97]"
                        >
                          <ExternalLink size={15} />
                          {content.liveLabel}
                        </a>
                      ) : null}
                      {project.githubUrl && project.githubUrl !== "#" ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-muted transition-[color,transform] duration-[160ms] ease-out hover:text-foreground active:scale-[0.97]"
                        >
                          <Code2 size={15} />
                          {content.codeLabel}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
