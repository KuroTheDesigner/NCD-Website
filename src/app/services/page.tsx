import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six disciplines: architectural design, interior design, design-build, cultural & institutional projects, facilities management, and property development.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <FadeUp className="col-span-12 flex flex-col gap-7 md:col-span-8">
              <MetadataLine>
                <span>What we do</span>
                <span>Six disciplines</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(3.25rem,10vw,8rem)]",
                  "leading-[0.92] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                Services.
              </h1>
              <p className="max-w-[60ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
                From site analysis to keys in hand — a range of disciplines
                held inside one practice so the quality of the design stays with
                the project all the way through.
              </p>
            </FadeUp>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0 !pb-28 md:!pb-40">
        <Container>
          <div className="divide-y divide-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]">
            {services.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "group block py-12 md:py-14",
                    "transition-colors duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:bg-[color:color-mix(in_srgb,var(--color-ink)_3%,transparent)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-laterite)]",
                    i % 2 !== 0 && "md:pl-[20%]",
                  )}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-12">
                    <span
                      aria-hidden="true"
                      className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)] md:w-10 md:shrink-0"
                    >
                      0{i + 1}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span
                        className={cn(
                          "font-[var(--font-display)] text-[var(--color-ink)]",
                          "text-[clamp(1.75rem,3.5vw,2.75rem)]",
                          "leading-[1.04] tracking-[-0.02em]",
                          "group-hover:text-[var(--color-laterite)]",
                          "transition-colors duration-[200ms]",
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="text-[0.9375rem] leading-[1.55] text-[var(--color-ink-500)] max-w-[55ch]">
                        {s.hook}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
