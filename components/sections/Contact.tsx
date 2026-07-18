"use client";

import { AtSign, Camera, Code2, Link2, Mail } from "lucide-react";
import type { PortfolioContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  content: PortfolioContent["contact"];
};

const icons = {
  github: Code2,
  linkedin: Link2,
  instagram: Camera,
  twitter: AtSign,
  email: Mail,
};

export function Contact({ content }: Props) {
  return (
    <section id="contact" className="relative scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <Reveal>
          <div className="glass mt-12 max-w-3xl rounded-3xl p-8 sm:p-10 md:p-12">
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {content.socials.map((social) => {
                const Icon = icons[social.icon];
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition-[color,border-color,transform,background-color] duration-[160ms] ease-out hover:border-violet-400/30 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 active:scale-[0.97]"
                    data-cursor="hover"
                  >
                    <Icon size={16} aria-hidden />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
