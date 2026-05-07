"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { MetadataLine } from "@/components/ui/metadata-line";
import {
  displayLocation,
  displayTitle,
  projectYearLabel,
  type Project,
} from "@/content/projects";

type TileAspect = "portrait" | "landscape" | "wide";
type TileSpan = "narrow" | "standard" | "wide" | "full";

type ProjectTileProps = {
  project: Project;
  /** Aspect ratio of the image. Defaults to landscape. */
  aspect?: TileAspect;
  /** Column span on desktop (12-col grid). */
  span?: TileSpan;
  /** Optional column start on desktop (for offsets / asymmetry). */
  colStart?: number;
  /** Priority for next/image — only true for the first few tiles. */
  priority?: boolean;
};

const aspectClass: Record<TileAspect, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/10]",
};

const spanClass: Record<TileSpan, string> = {
  narrow: "md:col-span-5",
  standard: "md:col-span-6",
  wide: "md:col-span-7",
  full: "md:col-span-12",
};

const colStartClass: Record<number, string> = {
  1: "md:col-start-1",
  2: "md:col-start-2",
  3: "md:col-start-3",
  4: "md:col-start-4",
  5: "md:col-start-5",
  6: "md:col-start-6",
  7: "md:col-start-7",
};

/**
 * A single editorial tile in the Work index grid.
 * Asymmetric by design — spans and aspects are varied across the list.
 * Private commissions render blurred with a "Private Commission" badge.
 */
export function ProjectTile({
  project,
  aspect = "landscape",
  span = "standard",
  colStart,
  priority = false,
}: ProjectTileProps) {
  const isPrivate = project.status === "private";
  const title = displayTitle(project);
  const location = displayLocation(project);
  const year = projectYearLabel(project);
  const href = isPrivate ? "#" : `/work/${project.slug}`;

  // Cast to ElementType so TypeScript doesn't try to intersect Link's required
  // href with div's (incompatible) props.
  const TileWrapper = (isPrivate ? "div" : Link) as React.ElementType;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.15, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn(
        "group col-span-1",
        spanClass[span],
        colStart ? colStartClass[colStart] : undefined,
      )}
    >
      <TileWrapper
        href={isPrivate ? undefined : href}
        aria-disabled={isPrivate || undefined}
        className={cn(
          "block outline-none",
          !isPrivate &&
            "focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bone)]",
          isPrivate && "cursor-not-allowed",
        )}
      >
        <figure className="flex flex-col gap-4">
          <div
            className={cn(
              "relative w-full overflow-hidden bg-[var(--color-ash-200)]",
              "rounded-[var(--radius-sm)]",
              aspectClass[aspect],
            )}
          >
            <motion.div
              variants={imageVariants}
              className="absolute inset-0"
            >
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, 100vw"
                className={cn(
                  "object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                  !isPrivate && "group-hover:scale-[1.02]",
                  isPrivate && "blur-md scale-[1.04] saturate-[0.85]",
                )}
              />
            </motion.div>

            {/* Subtle ink scrim on hover — deepens image without obscuring. */}
            {!isPrivate && (
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-0",
                  "bg-[linear-gradient(to_top,rgba(27,23,20,0.22),transparent_55%)]",
                  "opacity-0 transition-opacity duration-[500ms]",
                  "group-hover:opacity-100",
                )}
              />
            )}

            {isPrivate && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[rgba(27,23,20,0.28)]"
              />
            )}

            {isPrivate && (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <span
                  className={cn(
                    "inline-flex items-center gap-3 rounded-[var(--radius-sm)] px-4 py-2",
                    "bg-[var(--color-bone)]/95 text-[var(--color-ink)]",
                    "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                    "[letter-spacing:var(--tracking-label)]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-laterite)]"
                  />
                  Private Commission
                </span>
              </div>
            )}

            {/* Category pin, top-left */}
            <div className="absolute left-4 top-4">
              <span
                className={cn(
                  "inline-block rounded-[var(--radius-sm)] px-2.5 py-1",
                  "bg-[var(--color-bone)]/85 backdrop-blur-sm",
                  "font-[var(--font-mono)] text-[0.625rem] uppercase",
                  "[letter-spacing:var(--tracking-label)]",
                  "text-[var(--color-ink)]",
                )}
              >
                {project.category}
              </span>
            </div>
          </div>

          <motion.figcaption 
            variants={itemVariants}
            className="flex flex-col gap-1.5 pr-2"
          >
            <h3
              className={cn(
                "font-[var(--font-display)] text-[1.5rem] md:text-[1.75rem] leading-[1.02] tracking-[-0.02em]",
                "text-[var(--color-ink)]",
              )}
              style={{ textWrap: "balance" }}
            >
              {title}
            </h3>
            <MetadataLine className="mt-0.5">
              <span>{location}</span>
              <span>{year}</span>
            </MetadataLine>
            <p
              className={cn(
                "mt-1 max-h-0 overflow-hidden text-[0.9375rem] leading-[1.55]",
                "text-[var(--color-ink-500)]",
                "opacity-0 transition-[max-height,opacity] duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                !isPrivate &&
                  "group-hover:max-h-[10rem] group-hover:opacity-100 group-focus-visible:max-h-[10rem] group-focus-visible:opacity-100",
              )}
            >
              {project.summary}
            </p>
          </motion.figcaption>
        </figure>
      </TileWrapper>
    </motion.article>
  );
}
