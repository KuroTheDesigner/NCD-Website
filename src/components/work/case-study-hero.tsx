"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/content/projects";

type CaseStudyHeroProps = {
  image: ProjectImage;
  /** True for flagship case studies — slightly taller, more cinematic. */
  cinematic?: boolean;
};

/**
 * Full-bleed hero image with an on-mount mask reveal.
 * Framer is used in isolation here — no GSAP in this tree.
 */
export function CaseStudyHero({ image, cinematic = false }: CaseStudyHeroProps) {
  const prefersReduced = useReducedMotion();

  // A clip-path mask that opens from the middle on mount.
  // Reduced motion → render at final state with no transition.
  const initial = prefersReduced
    ? { clipPath: "inset(0% 0% 0% 0%)" }
    : { clipPath: "inset(8% 12% 8% 12%)" };

  const animate = { clipPath: "inset(0% 0% 0% 0%)" };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[var(--color-ash-200)]",
        cinematic ? "aspect-[16/9] md:aspect-[2.2/1]" : "aspect-[16/10]",
        "min-h-[60dvh] md:min-h-[72dvh]",
      )}
    >
      <motion.div
        className="absolute inset-0"
        initial={initial}
        animate={animate}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 1.15, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Ink vignette that softens the top and bottom edges. */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[linear-gradient(to_bottom,rgba(27,23,20,0.25)_0%,transparent_14%,transparent_72%,rgba(27,23,20,0.30)_100%)]",
        )}
      />
    </div>
  );
}
