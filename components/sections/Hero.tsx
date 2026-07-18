"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { PortfolioContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE_OUT } from "@/lib/motion";

type Props = {
  content: PortfolioContent["hero"];
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE_OUT },
  },
};

export function Hero({ content }: Props) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="mesh-blob -start-20 top-20 h-72 w-72 bg-violet-600/40" />
      <div className="mesh-blob end-0 top-40 h-80 w-80 bg-cyan-500/30" />
      <div className="mesh-blob start-1/3 bottom-10 h-64 w-64 bg-fuchsia-500/20" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-4 text-sm font-medium tracking-[0.25em] text-accent-2 uppercase"
          >
            {content.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{content.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl"
          >
            {content.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {content.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-sm leading-7 text-muted-dim sm:text-base"
          >
            {content.audience}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href={content.ctaPrimaryHref} magnetic>
              {content.ctaPrimary}
              <ArrowDownRight size={16} />
            </Button>
            <Button href={content.ctaSecondaryHref} variant="secondary">
              {content.ctaSecondary}
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
