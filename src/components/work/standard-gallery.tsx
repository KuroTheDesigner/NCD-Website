"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/content/projects";

type StandardGalleryProps = {
  images: ProjectImage[];
};

/**
 * Condensed gallery for standard (non-flagship) case studies.
 * Framer Motion staggered reveals, gated on prefers-reduced-motion.
 */
export function StandardGallery({ images }: StandardGalleryProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
      {images.map((img, i) => {
        // A simple alternating pattern that keeps the grid editorial.
        const pattern: { span: string; aspect: string }[] = [
          { span: "md:col-span-7", aspect: "aspect-[3/2]" },
          { span: "md:col-span-5", aspect: "aspect-[4/5]" },
          { span: "md:col-span-5", aspect: "aspect-[4/5]" },
          { span: "md:col-span-7", aspect: "aspect-[3/2]" },
          { span: "md:col-span-12", aspect: "aspect-[16/9]" },
          { span: "md:col-span-6", aspect: "aspect-[3/2]" },
        ];
        const p = pattern[i % pattern.length];

        return (
          <motion.figure
            key={`${img.src}-${i}`}
            className={cn(
              "relative col-span-1 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-ash-200)]",
              p.span,
              p.aspect,
            )}
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: Math.min(i * 0.06, 0.3),
                  }
            }
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {img.caption && (
              <figcaption
                className={cn(
                  "absolute inset-x-0 bottom-0 px-4 py-3",
                  "bg-[linear-gradient(to_top,rgba(27,23,20,0.55),transparent_100%)]",
                  "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                  "[letter-spacing:var(--tracking-label)] text-[var(--color-bone)]",
                )}
              >
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        );
      })}
    </div>
  );
}
