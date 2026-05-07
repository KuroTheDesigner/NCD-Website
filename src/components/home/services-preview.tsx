import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { cn } from "@/lib/cn";

const SERVICES = [
  {
    index: "01",
    title: "Architectural Design",
    slug: "architectural-design",
    hook: "From site analysis to construction administration — buildings drawn and delivered.",
  },
  {
    index: "02",
    title: "Interior Design",
    slug: "interior-design",
    hook: "Spatial planning, material studies, and bespoke joinery for interiors that outlast fashion.",
  },
  {
    index: "03",
    title: "Design-Build",
    slug: "design-build",
    hook: "Single-line responsibility from concept drawing to keys handed over.",
  },
  {
    index: "04",
    title: "Cultural & Institutional Projects",
    slug: "cultural-institutional",
    hook: "Civic halls, chapels, cultural centres, and educational buildings — the public fabric.",
  },
  {
    index: "05",
    title: "Facilities Management",
    slug: "facilities-management",
    hook: "Ongoing care for buildings we have built, and buildings we have not.",
  },
  {
    index: "06",
    title: "Property Development",
    slug: "property-development",
    hook: "Site acquisition support, feasibility, and development management.",
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
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={cn(
                "group block py-10 md:py-12",
                "transition-colors duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:bg-[color:color-mix(in_srgb,var(--color-ink)_3%,transparent)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-laterite)]",
                i % 2 !== 0 && "md:pl-[20%]",
              )}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-10">
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                    "[letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)]",
                    "md:w-10 md:shrink-0",
                  )}
                >
                  {s.index}
                </span>
                <div className="flex flex-col gap-2">
                  <span
                    className={cn(
                      "font-[var(--font-display)] text-[var(--color-ink)]",
                      "text-[clamp(1.5rem,3.2vw,2.25rem)]",
                      "leading-[1.05] tracking-[-0.02em]",
                      "group-hover:text-[var(--color-laterite)]",
                      "transition-colors duration-[200ms]",
                    )}
                  >
                    {s.title}
                  </span>
                  <span
                    className={cn(
                      "text-[0.9375rem] leading-[1.55] text-[var(--color-ink-500)]",
                      "max-w-[52ch]",
                    )}
                  >
                    {s.hook}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
