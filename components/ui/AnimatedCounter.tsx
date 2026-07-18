"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: Props) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  if (reducedMotion) {
    return (
      <span ref={ref}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}
