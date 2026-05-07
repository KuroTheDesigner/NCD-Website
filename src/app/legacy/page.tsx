import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import { opening, philosophyQuote, timeline, press, closing } from "@/content/legacy";

export const metadata: Metadata = {
  title: "The Legacy — Demas Nwoko",
  description:
    "The story of Demas Nwoko — artist, architect, and founder of New Culture Designs. Six decades of building an architecture authentic to Nigeria.",
};

const kindLabel: Record<string, string> = {
  project: "Project",
  essay: "Publication",
  award: "Award",
  milestone: "Milestone",
};

export default function LegacyPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 flex flex-col gap-6 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>The legacy</span>
                <span>Demas Nwoko</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(3rem,10vw,8rem)]",
                  "leading-[0.92] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                A builder's argument.
              </h1>
            </div>
          </div>
        </Container>
      </Section>

      {/* Opening essay */}
      <Section aria-labelledby="legacy-opening">
        <Container>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-2">
              <MetadataLine id="legacy-opening">
                <span>1935 — present</span>
              </MetadataLine>
            </div>
            <div className="col-span-12 flex flex-col gap-7 md:col-span-10 lg:col-span-8">
              {opening.map((para, i) => (
                <p
                  key={i}
                  className="text-[1.0625rem] md:text-[1.15rem] leading-[1.7] text-[var(--color-ink-500)]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pull quote */}
      <Section>
        <Container>
          <div className="border-l-2 border-[var(--color-laterite)] pl-8 md:pl-12">
            <blockquote>
              <p
                className={cn(
                  "font-[var(--font-display)] italic text-[var(--color-ink)]",
                  "text-[clamp(1.75rem,4vw,3.25rem)]",
                  "leading-[1.1] tracking-[-0.02em]",
                  "max-w-[28ch] [text-wrap:balance]",
                )}
              >
                &ldquo;{philosophyQuote.text}&rdquo;
              </p>
              <footer className="mt-6">
                <MetadataLine>
                  <span>{philosophyQuote.attribution}</span>
                </MetadataLine>
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section aria-labelledby="timeline-heading">
        <Container>
          <div className="mb-12 md:mb-16">
            <MetadataLine id="timeline-heading" as="h2">
              <span>Chronology</span>
              <span>{timeline.length} milestones</span>
            </MetadataLine>
          </div>

          <div className="flex flex-col gap-0">
            {timeline.map((milestone, i) => (
              <div
                key={`${milestone.year}-${i}`}
                className="grid grid-cols-12 gap-6 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] py-10 md:py-14 md:gap-10"
              >
                {/* Year + kind */}
                <div className="col-span-3 md:col-span-2 flex flex-col gap-2">
                  <span
                    className={cn(
                      "font-[var(--font-display)] text-[1.5rem] md:text-[2rem]",
                      "leading-[1] tracking-[-0.03em] text-[var(--color-ink)]",
                    )}
                  >
                    {milestone.year}
                  </span>
                  <MetadataLine>
                    <span>{kindLabel[milestone.kind]}</span>
                  </MetadataLine>
                </div>

                {/* Text */}
                <div className="col-span-9 flex flex-col gap-3 md:col-span-6 lg:col-span-5">
                  <h3
                    className={cn(
                      "font-[var(--font-display)] text-[1.125rem] md:text-[1.35rem]",
                      "leading-[1.1] tracking-[-0.015em] text-[var(--color-ink)]",
                    )}
                  >
                    {milestone.title}
                    {milestone.location && (
                      <span className="ml-2 font-[var(--font-mono)] text-[0.6875rem] normal-case tracking-normal align-middle text-[var(--color-stone-500)]">
                        — {milestone.location}
                      </span>
                    )}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-ink-500)]">
                    {milestone.summary}
                  </p>
                  {milestone.linkSlug && (
                    <TextLink href={`/work/${milestone.linkSlug}`}>
                      View project
                    </TextLink>
                  )}
                </div>

                {/* Image */}
                <div className="col-span-12 md:col-span-4 lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-ash-200)]">
                    <Image
                      src={`https://picsum.photos/seed/${milestone.imageSeed}/800/600`}
                      alt={milestone.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 38vw, (min-width: 768px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Press */}
      <Section aria-labelledby="press-heading">
        <Container>
          <div className="mb-10 md:mb-14">
            <MetadataLine id="press-heading" as="h2">
              <span>Press</span>
              <span>Selected coverage</span>
            </MetadataLine>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {press.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col gap-2 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] py-8 pr-8",
                  "hover:bg-[color:color-mix(in_srgb,var(--color-ink)_2%,transparent)]",
                  "transition-colors duration-[200ms]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-laterite)]",
                )}
              >
                <span className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-laterite)]">
                  {item.publication}
                </span>
                <span
                  className={cn(
                    "text-[0.9375rem] leading-[1.6] text-[var(--color-ink-500)]",
                    "group-hover:text-[var(--color-ink)] transition-colors duration-[200ms]",
                  )}
                >
                  {item.excerpt}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section>
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-5">
              <p className="text-[1.0625rem] leading-[1.7] text-[var(--color-ink-500)]">
                {closing}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <TextLink href="/work">View the work</TextLink>
                <TextLink href="/contact">Commission a project</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
