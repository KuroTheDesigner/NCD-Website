"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import { tweenSoft } from "@/lib/motion";
import {
  displayTitle,
  displayLocation,
  projectYearLabel,
  type Project,
} from "@/content/projects";

const GRID_LAYOUT = [
  { colSpan: "md:col-span-7", aspect: "aspect-[3/2]" },
  { colSpan: "md:col-span-5", aspect: "aspect-[4/5]" },
  { colSpan: "md:col-span-5 md:col-start-2", aspect: "aspect-[4/5]" },
  { colSpan: "md:col-span-7", aspect: "aspect-[16/10]" },
] as const;

type SelectedWorksProps = {
  projects: Project[];
};

export function SelectedWorks({ projects }: SelectedWorksProps) {
  const prefersReduced = useReducedMotion();

  return (
    <Section aria-labelledby="selected-works-heading">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <MetadataLine id="selected-works-heading" as="h2">
            <span>Selected works</span>
          </MetadataLine>
          <TextLink href="/work">All projects</TextLink>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 md:gap-y-24">
          {projects.slice(0, 4).map((project, i) => {
            const layout = GRID_LAYOUT[i % GRID_LAYOUT.length];
            const title = displayTitle(project);
            const location = displayLocation(project);
            const year = projectYearLabel(project);
            const isPrivate = project.status === "private";

            return (
              <motion.article
                key={project.id}
                className={cn("col-span-1 group", layout.colSpan)}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ ...tweenSoft, delay: i * 0.08 }}
              >
                {isPrivate ? (
                  <figure className="flex flex-col gap-4">
                    <div
                      className={cn(
                        "relative w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-ash-200)]",
                        layout.aspect,
                      )}
                    >
                      <Image
                        src={project.heroImage.src}
                        alt={project.heroImage.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover blur-md scale-105 saturate-75"
                      />
                    </div>
                    <figcaption className="flex flex-col gap-1">
                      <span className="font-[var(--font-display)] text-[1.4rem] leading-[1.05] tracking-[-0.02em]">
                        {title}
                      </span>
                      <MetadataLine>
                        <span>{location}</span>
                        <span>{year}</span>
                      </MetadataLine>
                    </figcaption>
                  </figure>
                ) : (
                  <Link
                    href={`/work/${project.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-4"
                  >
                    <figure className="flex flex-col gap-4">
                      <div
                        className={cn(
                          "relative w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-ash-200)]",
                          layout.aspect,
                        )}
                      >
                        <Image
                          src={project.heroImage.src}
                          alt={project.heroImage.alt}
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1024px) 55vw, 100vw"
                          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                        />
                      </div>
                      <figcaption className="flex flex-col gap-1.5">
                        <span className="font-[var(--font-display)] text-[1.5rem] md:text-[1.75rem] leading-[1.03] tracking-[-0.02em] text-[var(--color-ink)]">
                          {title}
                        </span>
                        <MetadataLine>
                          <span>{location}</span>
                          <span>{year}</span>
                          <span>{project.category}</span>
                        </MetadataLine>
                      </figcaption>
                    </figure>
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
