import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { LinkButton } from "@/components/home/link-button";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";
import { team } from "@/content/team";
import { values } from "@/content/values";
import { process } from "@/content/process";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "New Culture Designs — an indigenous Nigerian architecture practice rooted in the legacy of Demas Nwoko, working across cultural, institutional, residential, and corporate commissions.",
};

export default function StudioPage() {
  return (
    <>
      {/* Page header */}
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <FadeUp className="col-span-12 flex flex-col gap-7 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>The practice</span>
                <span>Est. Ibadan, 1967</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(3.25rem,10vw,8rem)]",
                  "leading-[0.92] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                Studio.
              </h1>
              <p className="max-w-[60ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
                An indigenous practice working from Ibadan. We design buildings
                with cultural fluency, local material, and a long working
                relationship with the site — a discipline inherited from our
                founder and applied to every commission.
              </p>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section aria-labelledby="mission-heading">
        <Container>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <FadeUp className="col-span-12 md:col-span-2">
              <MetadataLine>
                <span>Mission</span>
              </MetadataLine>
            </FadeUp>
            <FadeUp delay={0.1} className="col-span-12 flex flex-col gap-10 md:col-span-10 lg:col-span-9">
              <h2
                id="mission-heading"
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(1.75rem,3.8vw,3rem)]",
                  "leading-[1.06] tracking-[-0.02em]",
                  "max-w-[32ch] [text-wrap:balance]",
                )}
              >
                To make buildings that are modern and Nigerian — and to show
                that those two things are not in conflict.
              </h2>
              <p className="max-w-[62ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
                The practice spans architectural design, interior design,
                design-build, facilities management, and property development.
                All work is carried from first brief through handover by the
                same senior team — not handed off to a back-office at the
                critical moment. Every building we put our name on is expected
                to outlast its brief.
              </p>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section aria-labelledby="values-heading">
        <Container>
          <FadeUp className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <MetadataLine id="values-heading" as="h2">
              <span>What we stand for</span>
            </MetadataLine>
          </FadeUp>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-10 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.id} delay={i * 0.1} className="flex flex-col gap-3">
                <span className="font-[var(--font-mono)] text-[0.625rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)]">
                  0{i + 1}
                </span>
                <h3
                  className={cn(
                    "font-[var(--font-display)] text-[1.25rem] leading-[1.1] tracking-[-0.015em]",
                    "text-[var(--color-ink)]",
                  )}
                >
                  {v.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.6] text-[var(--color-ink-500)]">
                  {v.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section aria-labelledby="process-heading">
        <Container>
          <FadeUp className="mb-10 md:mb-14">
            <MetadataLine id="process-heading" as="h2">
              <span>How we work</span>
              <span>Five stages</span>
            </MetadataLine>
          </FadeUp>
          <div className="divide-y divide-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]">
            {process.map((step, i) => (
              <FadeUp
                key={step.id}
                delay={i * 0.1}
                className="grid grid-cols-12 gap-8 py-10 md:py-12"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)]">
                    0{i + 1}
                  </span>
                </div>
                <div className="col-span-12 flex flex-col gap-3 md:col-span-10">
                  <h3
                    className={cn(
                      "font-[var(--font-display)] text-[1.5rem] md:text-[1.75rem]",
                      "leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="max-w-[65ch] text-[0.9375rem] leading-[1.65] text-[var(--color-ink-500)]">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section aria-labelledby="team-heading">
        <Container>
          <FadeUp className="mb-10 md:mb-14">
            <MetadataLine id="team-heading" as="h2">
              <span>The team</span>
              <span>Leadership</span>
            </MetadataLine>
          </FadeUp>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeUp key={member.id} delay={i * 0.1} className="flex flex-col gap-5">
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-ash-200)]",
                    member.portrait.aspect,
                  )}
                >
                  <Image
                    src={member.portrait.src}
                    alt={member.portrait.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        "font-[var(--font-display)] text-[1.2rem] leading-[1.1] tracking-[-0.015em]",
                        "text-[var(--color-ink)]",
                      )}
                    >
                      {member.name}
                      {member.honorifics && (
                        <span className="ml-2 font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)] align-middle">
                          {member.honorifics}
                        </span>
                      )}
                    </span>
                    <span className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)]">
                      {member.title}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.9375rem] leading-[1.6] text-[var(--color-ink-500)]">
                    {member.bio}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Legacy CTA */}
      <Section>
        <Container>
          <FadeUp className="flex flex-col gap-6 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[52ch] text-[1rem] leading-[1.65] text-[var(--color-ink-500)]">
              The full story of Demas Nwoko and the founding of the practice —
              including the Dominican Chapel, the Venice Golden Lion, and what
              came before.
            </p>
            <TextLink href="/legacy">Read the legacy</TextLink>
          </FadeUp>
        </Container>
      </Section>

      {/* CTA */}
      <section
        aria-label="Commission inquiry"
        className="bg-[var(--color-ink)] text-[var(--color-bone)]"
      >
        <Container className="py-24 md:py-36">
          <FadeUp className="flex flex-col gap-8 md:gap-10 lg:max-w-[72%]">
            <MetadataLine className="!text-[var(--color-stone-400)]">
              <span>New Culture Designs</span>
              <span>Ibadan · Nigeria</span>
            </MetadataLine>
            <h2
              className={cn(
                "font-[var(--font-display)] text-[var(--color-bone)]",
                "text-[clamp(2rem,5.5vw,4.5rem)]",
                "leading-[0.96] tracking-[-0.03em]",
                "[text-wrap:balance]",
              )}
            >
              Ready to commission?
            </h2>
            <div className="flex flex-wrap gap-4">
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="!bg-[var(--color-bone)] !text-[var(--color-ink)] hover:!bg-[var(--color-ash-200)]"
              >
                Start a project
              </LinkButton>
              <LinkButton
                href="/services"
                variant="ghost"
                size="lg"
                className="!border-[color:color-mix(in_srgb,var(--color-bone)_50%,transparent)] !text-[var(--color-bone)] hover:!bg-[color:color-mix(in_srgb,var(--color-bone)_12%,transparent)] hover:!text-[var(--color-bone)]"
              >
                View services
              </LinkButton>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
