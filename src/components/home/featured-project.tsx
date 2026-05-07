"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/projects";
import { projectYearLabel } from "@/content/projects";

type FeaturedProjectProps = {
  project: Project;
};

/**
 * Flagship project spread with a subtle scroll-entry mask reveal on the
 * imagery. Motion is reserved for project presentations per the client's
 * rule, and is gated behind `prefers-reduced-motion`.
 */
export function FeaturedProject({ project }: FeaturedProjectProps) {
  const reduce = useReducedMotion();

  const initial = reduce
    ? { clipPath: "inset(0% 0 0 0)", opacity: 1 }
    : { clipPath: "inset(100% 0 0 0)", opacity: 0.4 };

  const whileInView = {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
  };

  return (
    <Section aria-labelledby="featured-project-heading">
      <Container>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: metadata column */}
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5 md:sticky md:top-28 md:self-start lg:col-span-4">
            <MetadataLine>
              <span>02 — Featured project</span>
            </MetadataLine>

            <h2
              id="featured-project-heading"
              className={cn(
                "font-[var(--font-display)] text-[var(--color-ink)]",
                "text-[clamp(2rem,4.6vw,3.75rem)]",
                "leading-[1.02] tracking-[-0.025em]",
                "[text-wrap:balance]",
              )}
            >
              {project.title}
            </h2>

            <MetadataLine>
              <span>{project.location}</span>
              <span>{projectYearLabel(project)}</span>
              <span>{project.category}</span>
            </MetadataLine>
          </div>

          {/* Right: oversized imagery */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <motion.div
              initial={initial}
              whileInView={whileInView}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: reduce ? 0 : 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "relative aspect-[4/5] w-full overflow-hidden",
                "rounded-[var(--radius-md)] bg-[var(--color-ash-200)]",
              )}
            >
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 62vw, (min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Editorial blurb beneath the image */}
          <div className="col-span-12 md:col-start-6 md:col-span-7 lg:col-start-5 lg:col-span-8">
            <div className="flex flex-col gap-6 pt-4 md:pt-8">
              <p
                className={cn(
                  "max-w-[62ch] text-[1.0625rem] md:text-[1.125rem]",
                  "leading-[1.65] text-[var(--color-ink-500)]",
                )}
              >
                {project.summary}
              </p>

              <TextLink href={`/work/${project.slug}`}>
                Read the full case study
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
