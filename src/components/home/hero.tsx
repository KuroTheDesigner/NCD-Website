"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { MetadataLine } from "@/components/ui/metadata-line";
import { LinkButton } from "@/components/home/link-button";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";

/**
 * Asymmetric editorial hero — static.
 * Display typography anchored left on a ~60% column. Signature image
 * anchored bottom-right, full-bleed to the right edge on desktop.
 * Uses `min-h-[100dvh]` to prevent iOS Safari viewport jumping.
 */
export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      {/* Signature image — absolute on desktop, inline on mobile */}
      <div
        className={cn(
          "relative z-0 w-full md:absolute md:inset-y-0 md:right-0",
          "md:w-[58%] lg:w-[52%]",
          "aspect-[4/5] md:aspect-auto",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.36, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://picsum.photos/seed/dominican-chapel-ibadan/1600/1200"
            alt="Dominican Chapel, Ibadan — laterite masonry and timber roof framing against the Samonda Hill skyline at dusk."
            fill
            priority
            sizes="(min-width: 1024px) 52vw, (min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
          {/* Warm fade into Bone — never pure black */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0",
              "bg-[linear-gradient(to_right,var(--color-bone)_0%,transparent_35%)]",
              "md:bg-[linear-gradient(to_right,var(--color-bone)_0%,transparent_28%)]",
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-1/3",
              "bg-[linear-gradient(to_top,rgba(27,23,20,0.32),transparent)]",
              "md:hidden",
            )}
          />
        </motion.div>
      </div>

      <div
        className={cn(
          "relative z-10 flex min-h-[100dvh] flex-col justify-between",
          "pt-28 pb-10 md:pt-32 md:pb-12",
        )}
      >
        <Container className="flex-1">
          <div className="grid grid-cols-12 gap-6">
            <FadeUp className="col-span-12 flex flex-col gap-8 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>Est. Ibadan</span>
                <span>Design</span>
                <span>Build</span>
                <span>Facilities</span>
              </MetadataLine>

              <h1
                id="home-hero-heading"
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(2.75rem,8.4vw,6.75rem)]",
                  "leading-[0.94] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                An architecture
                <br className="hidden sm:inline" />{" "}
                <span className="italic font-light">built for this ground.</span>
              </h1>

              <p
                className={cn(
                  "max-w-[46ch] text-[1.0625rem] md:text-[1.125rem]",
                  "leading-[1.6] text-[var(--color-ink-500)]",
                )}
              >
                An architecture practice rooted in Nigerian culture, building
                spaces that carry their climate, their craft, and their story.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <LinkButton href="/work" variant="primary" size="lg">
                  View selected works
                </LinkButton>
                <LinkButton href="/contact" variant="ghost" size="lg">
                  Start a project
                </LinkButton>
              </div>
            </FadeUp>
          </div>
        </Container>

        {/* Footer-of-hero strip: location coordinates left, scroll cue right */}
        <Container>
          <div
            className={cn(
              "mt-14 flex flex-col gap-4 border-t border-[color:color-mix(in_srgb,var(--color-ink)_12%,transparent)] pt-6",
              "md:flex-row md:items-center md:justify-between",
            )}
          >
            <MetadataLine>
              <span>7.3775° N</span>
              <span>3.9470° E</span>
              <span>Ibadan, Oyo State</span>
            </MetadataLine>
            <MetadataLine className="md:self-end">
              <span>Scroll</span>
              <span aria-hidden="true">—</span>
              <span>Selected works below</span>
            </MetadataLine>
          </div>
        </Container>
      </div>
    </section>
  );
}
