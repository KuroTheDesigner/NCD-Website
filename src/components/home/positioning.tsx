import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { cn } from "@/lib/cn";

/**
 * One-line editorial positioning statement followed by a short paragraph.
 * Fully static — this is a reading moment, not a presentation moment.
 */
export function PositioningStatement() {
  return (
    <Section aria-labelledby="positioning-heading">
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <MetadataLine>
              <span>01 — Practice</span>
            </MetadataLine>
          </div>

          <div className="col-span-12 md:col-span-10 lg:col-span-9 flex flex-col gap-12 md:gap-16">
            <h2
              id="positioning-heading"
              className={cn(
                "font-[var(--font-display)] text-[var(--color-ink)]",
                "text-[clamp(1.75rem,4vw,3.25rem)]",
                "leading-[1.08] tracking-[-0.02em]",
                "[text-wrap:balance]",
                "max-w-[28ch]",
              )}
            >
              We design with laterite, timber, light, and context —{" "}
              <span className="italic text-[var(--color-ink-700)]">
                the materials of this place, the rhythm of its life.
              </span>
            </h2>

            <p
              className={cn(
                "max-w-[60ch] text-[1.0625rem] md:text-[1.125rem]",
                "leading-[1.65] text-[var(--color-ink-500)]",
              )}
            >
              New Culture Designs is an indigenous Nigerian practice offering
              architectural design, interior design, design-build, facilities
              management, and property development. We work across cultural,
              institutional, residential, and corporate briefs — and we build
              the way we draw: with close attention to ground, climate, and
              craft.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
