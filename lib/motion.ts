export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  press: 0.16,
  ui: 0.2,
  reveal: 0.5,
  hero: 0.6,
} as const;

export const SPRING = {
  cursor: { stiffness: 400, damping: 35 },
  /** Critically damped — no bounce on hover (Apple: bounce only after momentum) */
  magnetic: { type: "spring" as const, stiffness: 280, damping: 32, mass: 0.35 },
} as const;
