import Image from "next/image";
import { Container } from "@/components/ui/container";
import { MetadataLine } from "@/components/ui/metadata-line";
import { LinkButton } from "@/components/home/link-button";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";

export function CtaStrip() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] text-[var(--color-bone)]"
    >
      {/* Laterite wall texture — anchored right, dissolving into Ink */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-0",
          "w-[78%] md:w-[58%] lg:w-[52%]",
          "cta-texture-mask",
        )}
      >
        <Image
          src="/images/motif/cta-laterite-wall.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 52vw, (min-width: 768px) 58vw, 78vw"
          className="object-cover opacity-55 md:opacity-70"
        />
        {/* Ink wash — heaviest where the type sits, lifting toward the right edge */}
        <div className="cta-texture-wash absolute inset-0" />
      </div>

      <Container className="relative z-10 py-28 md:py-40">
        <div className="grid grid-cols-12 gap-8">
          <FadeUp className="col-span-12 flex flex-col gap-10 md:col-span-9 lg:col-span-8">
            <MetadataLine className="!text-[var(--color-stone-400)]">
              <span>New Culture Designs</span>
              <span>Ibadan · Nigeria</span>
            </MetadataLine>

            <h2
              id="cta-heading"
              className={cn(
                "font-[var(--font-display)] text-[var(--color-bone)]",
                "text-[clamp(2rem,5.5vw,4.5rem)]",
                "leading-[0.96] tracking-[-0.03em]",
                "[text-wrap:balance]",
              )}
            >
              Commissioning new work.
            </h2>

            <p className="max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ash-300)]">
              Tell us about a site, a brief, or a condition that calls for
              careful building.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="!bg-[var(--color-bone)] !text-[var(--color-ink)] hover:!bg-[var(--color-ash-200)]"
              >
                Start a project
              </LinkButton>
              <LinkButton
                href="/contact#visit"
                variant="ghost"
                size="lg"
                className="!border-[color:color-mix(in_srgb,var(--color-bone)_50%,transparent)] !text-[var(--color-bone)] hover:!bg-[color:color-mix(in_srgb,var(--color-bone)_12%,transparent)] hover:!text-[var(--color-bone)]"
              >
                Book a studio visit
              </LinkButton>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
