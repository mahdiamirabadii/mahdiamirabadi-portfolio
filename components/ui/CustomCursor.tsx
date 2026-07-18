"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { SPRING } from "@/lib/motion";

function subscribeCursorEnabled(onStoreChange: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = () => onStoreChange();
  fine.addEventListener("change", handler);
  reduced.addEventListener("change", handler);
  return () => {
    fine.removeEventListener("change", handler);
    reduced.removeEventListener("change", handler);
  };
}

function getCursorEnabled() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeCursorEnabled,
    getCursorEnabled,
    () => false,
  );
  const hoveringRef = useRef(false);
  const pressingRef = useRef(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const size = useMotionValue(16);
  const springSize = useSpring(size, SPRING.cursor);
  const pressScale = useMotionValue(1);
  const springPress = useSpring(pressScale, SPRING.cursor);
  const opacity = useTransform(springSize, [16, 48], [0.7, 0.9]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const applySize = () => {
      if (pressingRef.current) {
        size.set(hoveringRef.current ? 40 : 12);
        pressScale.set(0.85);
        return;
      }
      size.set(hoveringRef.current ? 48 : 16);
      pressScale.set(1);
    };

    const setHovering = (next: boolean) => {
      if (hoveringRef.current === next) return;
      hoveringRef.current = next;
      applySize();
    };

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, [data-cursor='hover']",
      );
      setHovering(Boolean(interactive));
    };

    const onPointerDown = () => {
      pressingRef.current = true;
      applySize();
    };

    const onPointerUp = () => {
      pressingRef.current = false;
      applySize();
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [enabled, pressScale, size, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[70] mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        scale: springPress,
      }}
    >
      <motion.div
        className="rounded-full border border-white bg-white/10"
        style={{
          width: springSize,
          height: springSize,
          opacity,
        }}
      />
    </motion.div>
  );
}
