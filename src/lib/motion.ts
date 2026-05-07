import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion tokens for New Culture Designs.
 *
 * The plan reserves motion for project presentations. Elsewhere, motion is a
 * quiet layer of microanimation: 200–300ms, spring-eased, single-purpose.
 * Every exported transition is safe to use inside interactive components.
 */

export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.9,
};

export const tweenSoft: Transition = {
  type: "tween",
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};

export const tweenFast: Transition = {
  type: "tween",
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1],
};

/** Panel slide used by the mobile nav drawer. */
export const panelVariants: Variants = {
  closed: {
    x: "100%",
    transition: tweenSoft,
  },
  open: {
    x: 0,
    transition: tweenSoft,
  },
};

/** 
 * Premium reveal variant using clip-path.
 * Inspired by Manu Arora's view-transition expansion.
 */
export const revealVariants: Variants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Soft fade for overlay scrims. */
export const scrimVariants: Variants = {
  closed: { opacity: 0, transition: tweenFast },
  open: { opacity: 1, transition: tweenFast },
};

/**
 * Runtime check for reduced-motion preference — safe to call in effects.
 * Returns false during SSR.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Collapse a variants object to an immediate no-animation version
 * when the user prefers reduced motion.
 */
export function respectReducedMotion<T extends Variants>(variants: T): T {
  if (!prefersReducedMotion()) return variants;
  const stripped = {} as T;
  for (const key in variants) {
    const v = variants[key];
    if (typeof v === "object" && v !== null) {
      (stripped as Record<string, unknown>)[key] = {
        ...v,
        transition: { duration: 0 },
      };
    } else {
      (stripped as Record<string, unknown>)[key] = v;
    }
  }
  return stripped;
}
