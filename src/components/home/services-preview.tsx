import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";

const SERVICES = [
  {
    index: "01",
    title: "Architectural Design",
    slug: "architectural-design",
    hook: "From site analysis to construction administration — buildings drawn and delivered.",
    fadeStartMd: "65%",
  },
  {
    index: "02",
    title: "Interior Design",
    slug: "interior-design",
    hook: "Spatial planning, material studies, and bespoke joinery for interiors that outlast fashion.",
    fadeStartMd: "65%",
  },
  {
    index: "03",
    title: "Design-Build",
    slug: "design-build",
    hook: "Single-line responsibility from concept drawing to keys handed over.",
    fadeStartMd: "65%",
  },
  {
    index: "04",
    title: "Cultural & Institutional Projects",
    slug: "cultural-institutional",
    hook: "Civic halls, chapels, cultural centres, and educational buildings — the public fabric.",
    fadeStartMd: "65%",
  },
  {
    index: "05",
    title: "Facilities Management",
    slug: "facilities-management",
    hook: "Ongoing care for buildings we have built, and buildings we have not.",
    fadeStartMd: "65%",
  },
  {
    index: "06",
    title: "Property Development",
    slug: "property-development",
    hook: "Site acquisition support, feasibility, and development management.",
    fadeStartMd: "60%",
  },
] as const;

export function ServicesPreview() {
  return (
    <Section aria-labelledby="services-preview-heading">
      <Container>
        <div className="flex flex-col gap-6 border-b border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] pb-14 md:flex-row md:items-end md:justify-between md:gap-12">
          <MetadataLine id="services-preview-heading" as="h2">
            <span>Core Services</span>
            <span>Six disciplines</span>
          </MetadataLine>
        </div>

        <div className="divide-y divide-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]">
          {SERVICES.map((s, i) => {
            const isInverted = i % 2 !== 0;
            return (
              <FadeUp key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "group relative block py-10 md:py-12",
                    "transition-all duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-laterite)]",
                    isInverted
                      ? "text-[var(--color-bone)] pl-6 pr-4 md:pr-10 md:pl-[20%]"
                      : "px-0",
                  )}
                >
                  {isInverted && (
                    <div
                      aria-hidden="true"
                      style={{ "--fade-start": s.fadeStartMd } as React.CSSProperties}
                      className="pointer-events-none absolute inset-0 -z-10 service-inverted-bg"
                    />
                  )}
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-10">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                        "[letter-spacing:var(--tracking-label)]",
                        "md:w-10 md:shrink-0",
                        isInverted
                          ? "text-[color:color-mix(in_srgb,var(--color-bone)_65%,transparent)]"
                          : "text-[var(--color-stone-500)]",
                      )}
                    >
                      {s.index}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span
                        className={cn(
                          "font-[var(--font-display)]",
                          "text-[clamp(1.5rem,3.2vw,2.25rem)]",
                          "leading-[1.05] tracking-[-0.02em]",
                          "transition-colors duration-[200ms]",
                          isInverted
                            ? "text-[var(--color-bone)] group-hover:text-[var(--color-laterite-300)]"
                            : "text-[var(--color-ink)] group-hover:text-[var(--color-laterite)]",
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "text-[0.9375rem] leading-[1.55]",
                          "max-w-[52ch]",
                          isInverted
                            ? "text-[color:color-mix(in_srgb,var(--color-bone)_75%,transparent)]"
                            : "text-[var(--color-ink-500)]",
                        )}
                      >
                        {s.hook}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
