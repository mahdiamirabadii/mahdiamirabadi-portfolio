"use client";

import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  content: PortfolioContent["skills"];
};

export function Skills({ content }: Props) {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <article
                className="glass flex h-full flex-col rounded-2xl p-6 transition-[border-color] duration-300 hover:border-cyan-400/20"
                data-cursor="hover"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
