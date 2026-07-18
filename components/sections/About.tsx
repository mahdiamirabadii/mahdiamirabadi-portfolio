"use client";

import Image from "next/image";
import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Props = {
  content: PortfolioContent["about"];
};

export function About({ content }: Props) {
  return (
    <section id="about" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <Reveal>
              <div className="relative mb-8 aspect-square w-36 overflow-hidden rounded-3xl border border-white/10 sm:w-44 lg:hidden">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                  sizes="176px"
                  priority
                />
              </div>
            </Reveal>

            {content.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="text-base leading-8 text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="relative mx-auto hidden aspect-square w-full max-w-[220px] overflow-hidden rounded-3xl border border-white/10 lg:block">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.1 + index * 0.08}>
                  <div
                    className="glass group rounded-2xl p-6 transition-[border-color] duration-300 hover:border-violet-400/30"
                    data-cursor="hover"
                  >
                    <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
