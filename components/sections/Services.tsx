"use client";

import {
  Building2,
  Code2,
  LayoutTemplate,
  Layers,
  LayoutDashboard,
  PenTool,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioContent, ServiceIcon } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  content: PortfolioContent["services"];
};

const iconMap: Record<ServiceIcon, LucideIcon> = {
  layout: LayoutTemplate,
  building: Building2,
  layers: Layers,
  panel: LayoutDashboard,
  smartphone: Smartphone,
  pen: PenTool,
  zap: Zap,
  code: Code2,
};

export function Services({ content }: Props) {
  return (
    <section id="services" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <article
                  className="glass group flex h-full flex-col rounded-2xl p-5 transition-[border-color] duration-300 hover:border-violet-400/25"
                  data-cursor="hover"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-2">
                    <Icon size={18} aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
