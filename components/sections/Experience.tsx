"use client";

import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  content: PortfolioContent["experience"];
};

export function Experience({ content }: Props) {
  return (
    <section id="experience" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="relative mt-14 space-y-8 before:absolute before:inset-y-0 before:start-4 before:w-px before:bg-gradient-to-b before:from-violet-500/60 before:via-white/10 before:to-cyan-400/40 md:before:start-1/2 md:before:-translate-x-1/2 rtl:md:before:translate-x-1/2">
          {content.items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal
                key={`${item.company}-${item.period}`}
                delay={index * 0.08}
                className="relative"
              >
                <div
                  className={`md:grid md:grid-cols-2 md:gap-10 ${
                    isEven ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`glass ms-10 rounded-3xl p-6 md:ms-0 ${
                      isEven ? "md:me-8" : "md:ms-8"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-accent-2">
                        {item.period}
                      </p>
                      <p className="text-sm text-muted">{item.company}</p>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-3 text-sm leading-8 text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-muted-dim"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="absolute start-[0.7rem] top-8 h-3 w-3 rounded-full border-2 border-violet-400 bg-background shadow-[0_0_16px_rgba(139,92,246,0.8)] md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
