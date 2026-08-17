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
 * Display typography anchored left on a ~60% column and pulled out past the
 * container gutter by `--edge-pull` (shared with the nav wordmark, capped so
 * it never runs off-screen). Signature image anchored right, full-bleed to
 * the right edge on desktop.
 * Uses `min-h-[100dvh]` to prevent iOS Safari viewport jumping.
 */
export function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-heading"
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      {/* Signature image — absolute on desktop, inline on mobile */}
      <div
        className={cn(
          "relative z-0 w-full md:absolute md:right-0",
          "md:w-[58%] lg:w-[50%]",
          "aspect-[4/5] md:aspect-auto",
          // Top hangs 32px above the section; the bottom is pinned to the
          // coordinate strip's rule so the image can never run past it. The
          // rule sits lower at lg, where the strip stops wrapping to two
          // lines. object-cover reframes the crop.
          "md:top-[-32px] md:bottom-[101px] lg:bottom-[81px]",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.36, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/projects/lady-pierce-chapel-issele-uku/hero.jpg"
            alt="Lady Pierce Chapel, Issele-Uku — monumental elevation with Demas Nwoko in foreground."
            fill
            priority
            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 58vw, 100vw"
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

      {/* Mobile: coordinates sit directly beneath the image, no rule */}
      <Container className="relative z-10 pt-5 md:hidden">
        <MetadataLine>
          <span>7.3775° N</span>
          <span>3.9470° E</span>
          <span>Ibadan, Oyo State</span>
        </MetadataLine>
      </Container>

      <div
        className={cn(
          "relative z-10 flex flex-col justify-between md:min-h-[100dvh]",
          "pt-10 pb-14 md:pt-32 md:pb-12",
        )}
      >
        <Container className="flex-1 md:flex md:items-center">
          <div className="grid w-full grid-cols-12 gap-6">
            <FadeUp className="col-span-12 flex flex-col md:col-span-8 lg:col-span-7">
              <h1
                id="home-hero-heading"
                className={cn(
                  "font-[var(--font-display)] font-semibold text-[var(--color-ink)]",
                  "text-[clamp(2.875rem,8.6vw,8.5rem)]",
                  "leading-[0.84] tracking-[-0.04em]",
                  "[text-wrap:balance]",
                  "translate-x-[var(--edge-pull)] md:-translate-y-[92px]",
                )}
              >
                An architecture
                <br className="hidden sm:inline" />{" "}
                <span className="italic font-normal">built for this ground.</span>
              </h1>

              <p
                className={cn(
                  "mt-6 max-w-[39ch] text-[clamp(1.0625rem,1.45vw,1.25rem)]",
                  "leading-[1.55] text-[var(--color-ink-500)]",
                  "translate-x-[var(--edge-pull)] md:-translate-y-[66px]",
                )}
              >
                An architecture practice rooted in Nigerian culture, building
                spaces that carry their climate, their craft, and their story.
              </p>

              <div
                className={cn(
                  "mt-10 flex flex-wrap items-center gap-4",
                  "origin-left translate-x-[var(--edge-pull)]",
                  "md:-translate-y-[40px] md:scale-[1.34]",
                )}
              >
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

        {/* Footer-of-hero strip — desktop only. The rule is held to the left
            column so it never crosses the signature image. */}
        <Container className="hidden md:block">
          <div className="grid grid-cols-12 gap-6">
            <div
              className={cn(
                "mt-14 border-t border-[color:color-mix(in_srgb,var(--color-ink)_12%,transparent)] pt-6",
                "col-span-4 lg:col-span-5",
                "translate-x-[var(--edge-pull)] translate-y-[18px]",
              )}
            >
              <MetadataLine>
                <span>7.3775° N</span>
                <span>3.9470° E</span>
                <span>Ibadan, Oyo State</span>
              </MetadataLine>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
