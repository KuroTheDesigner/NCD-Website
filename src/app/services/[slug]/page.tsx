import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { LinkButton } from "@/components/home/link-button";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";
import {
  services,
  getServiceBySlug,
  getOtherServices,
} from "@/content/services";
import { getProjectBySlug, displayTitle } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary[0],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = getOtherServices(slug).slice(0, 3);
  const relatedProjects = service.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter(Boolean);

  return (
    <>
      {/* Header */}
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <FadeUp className="col-span-12 flex flex-col gap-6 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>Services</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(2.75rem,8vw,6.5rem)]",
                  "leading-[0.94] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                {service.title}
              </h1>
              <p className="max-w-[52ch] text-[1.0625rem] md:text-[1.2rem] leading-[1.65] text-[var(--color-ink-500)]">
                {service.hook}
              </p>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* Summary */}
      <Section aria-labelledby="service-summary-heading">
        <Container>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <FadeUp className="col-span-12 md:col-span-2">
              <MetadataLine id="service-summary-heading">
                <span>Overview</span>
              </MetadataLine>
            </FadeUp>
            <FadeUp delay={0.1} className="col-span-12 flex flex-col gap-6 md:col-span-10 lg:col-span-8">
              {service.summary.map((para, i) => (
                <p
                  key={i}
                  className="text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]"
                >
                  {para}
                </p>
              ))}
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* Scope + Deliverables */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-[1fr_1fr_1fr]">
            {/* Scope */}
            <FadeUp delay={0} className="flex flex-col gap-6">
              <MetadataLine>
                <span>Scope of work</span>
              </MetadataLine>
              <ul className="flex flex-col gap-3">
                {service.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-[var(--color-ink)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-laterite)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Deliverables */}
            <FadeUp delay={0.1} className="flex flex-col gap-6">
              <MetadataLine>
                <span>Deliverables</span>
              </MetadataLine>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-[var(--color-ink)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-laterite)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Who it's for */}
            <FadeUp delay={0.2} className="flex flex-col gap-6">
              <MetadataLine>
                <span>Who it's for</span>
              </MetadataLine>
              <ul className="flex flex-col gap-3">
                {service.whoItsFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-[var(--color-ink)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-laterite)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <Section aria-labelledby="faq-heading">
          <Container>
            <div className="grid grid-cols-12 gap-8 md:gap-12">
              <FadeUp className="col-span-12 md:col-span-2">
                <MetadataLine id="faq-heading">
                  <span>Questions</span>
                </MetadataLine>
              </FadeUp>
              <div className="col-span-12 flex flex-col gap-0 md:col-span-10 lg:col-span-8">
                {service.faqs.map((faq, i) => (
                  <FadeUp
                    key={i}
                    delay={i * 0.1}
                    className="border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] py-8"
                  >
                    <h3
                      className={cn(
                        "mb-4 font-[var(--font-display)] text-[1.25rem] leading-[1.1] tracking-[-0.015em]",
                        "text-[var(--color-ink)]",
                      )}
                    >
                      {faq.question}
                    </h3>
                    <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-ink-500)]">
                      {faq.answer}
                    </p>
                  </FadeUp>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section>
          <Container>
            <FadeUp className="mb-10 md:mb-12">
              <MetadataLine>
                <span>Related work</span>
              </MetadataLine>
            </FadeUp>
            <div className="flex flex-col gap-3">
              {relatedProjects.map((p, i) =>
                p ? (
                  <FadeUp key={p.slug} delay={i * 0.1}>
                    <TextLink
                      href={`/work/${p.slug}`}
                      className="group block"
                    >
                      <span
                        className={cn(
                          "font-[var(--font-display)] text-[1.5rem] md:text-[2rem]",
                          "leading-[1.02] tracking-[-0.02em]",
                        )}
                      >
                        {displayTitle(p)}
                      </span>
                    </TextLink>
                  </FadeUp>
                ) : null,
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Other services */}
      <Section>
        <Container>
          <FadeUp className="mb-8 flex items-end justify-between">
            <MetadataLine>
              <span>Other services</span>
            </MetadataLine>
            <TextLink href="/services">All services</TextLink>
          </FadeUp>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-8 md:grid-cols-3">
            {otherServices.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "group flex flex-col gap-2 p-5 rounded-[var(--radius-sm)]",
                    "hover:bg-[color:color-mix(in_srgb,var(--color-ink)_3%,transparent)]",
                    "transition-colors duration-[200ms]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)]",
                  )}
                >
                  <span
                    className={cn(
                      "font-[var(--font-display)] text-[1.125rem] leading-[1.1] tracking-[-0.015em]",
                      "text-[var(--color-ink)] group-hover:text-[var(--color-laterite)]",
                      "transition-colors duration-[200ms]",
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="text-[0.875rem] leading-[1.55] text-[var(--color-ink-500)]">
                    {s.hook}
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section
        aria-label="Discuss a brief"
        className="border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]"
      >
        <Container className="py-20 md:py-28">
          <FadeUp className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 max-w-[52ch]">
              <h2
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(1.75rem,3.5vw,2.75rem)]",
                  "leading-[1.06] tracking-[-0.02em]",
                  "[text-wrap:balance]",
                )}
              >
                Ready to discuss a brief?
              </h2>
              <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-ink-500)]">
                Tell us about your site, your programme, and your ambitions. We
                will respond within two working days.
              </p>
            </div>
            <LinkButton href="/contact" variant="primary" size="lg">
              Start a project
            </LinkButton>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
