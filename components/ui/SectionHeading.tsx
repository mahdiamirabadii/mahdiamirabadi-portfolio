"use client";

import { motion } from "framer-motion";
import { DURATION, EASE_OUT } from "@/lib/motion";

type Props = {
  title: string;
  subtitle: string;
  align?: "start" | "center";
};

export function SectionHeading({ title, subtitle, align = "start" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="mb-3 text-sm font-medium tracking-[0.2em] text-accent-2 uppercase">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
