import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import { faqs, faqCategories } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Common questions about working with New Culture Designs — process, fees, timelines, and how to begin.",
};

export default function FAQPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 flex flex-col gap-7 md:col-span-8">
              <MetadataLine>
                <span>FAQ</span>
                <span>{faqs.length} questions</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(3rem,10vw,8rem)]",
                  "leading-[0.92] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                Questions.
              </h1>
              <p className="max-w-[55ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
                If you do not find what you need here, email us directly or use
                the contact form.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ groups by category */}
      {faqCategories.map((cat) => {
        const group = faqs.filter((f) => f.category === cat.id);
        if (group.length === 0) return null;

        return (
          <Section key={cat.id} aria-labelledby={`faq-cat-${cat.id}`}>
            <Container>
              <div className="grid grid-cols-12 gap-8 md:gap-12">
                <div className="col-span-12 md:col-span-2">
                  <MetadataLine id={`faq-cat-${cat.id}`}>
                    <span>{cat.label}</span>
                  </MetadataLine>
                </div>
                <div className="col-span-12 md:col-span-10 lg:col-span-8">
                  {group.map((faq, i) => (
                    <div
                      key={i}
                      className="border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] py-8 md:grid md:grid-cols-2 md:gap-12"
                    >
                      <h2
                        className={cn(
                          "mb-4 font-[var(--font-display)] text-[1.125rem] leading-[1.15] tracking-[-0.015em]",
                          "text-[var(--color-ink)] md:mb-0",
                        )}
                      >
                        {faq.question}
                      </h2>
                      <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-ink-500)]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Still have questions CTA */}
      <Section>
        <Container>
          <div className="flex flex-col gap-4 border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[52ch] text-[1rem] leading-[1.65] text-[var(--color-ink-500)]">
              Still have a question? Reach out directly — we respond within two
              working days.
            </p>
            <TextLink href="/contact">Get in touch</TextLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
