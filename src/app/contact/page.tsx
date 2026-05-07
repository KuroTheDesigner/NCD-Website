import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { BriefForm } from "@/components/contact/brief-form";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Commission a project or book a studio visit with New Culture Designs. We respond within two working days.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 flex flex-col gap-7 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>Get in touch</span>
                <span>Ibadan, Nigeria</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(3rem,10vw,8rem)]",
                  "leading-[0.92] tracking-[-0.035em]",
                  "[text-wrap:balance]",
                )}
              >
                Contact.
              </h1>
              <p className="max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
                Tell us about a site, a brief, or a condition that calls for
                careful building. We respond within two working days.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact layout: form + info columns */}
      <Section className="!pt-0 !pb-28 md:!pb-40">
        <Container>
          <div className="grid grid-cols-12 gap-12 md:gap-16">
            {/* Form */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <BriefForm />
            </div>

            {/* Studio info */}
            <div
              id="visit"
              className="col-span-12 flex flex-col gap-10 md:col-span-5 lg:col-span-4"
            >
              {/* Address */}
              <div className="flex flex-col gap-3">
                <MetadataLine>
                  <span>Studio address</span>
                </MetadataLine>
                <address className="not-italic text-[0.9375rem] leading-[1.7] text-[var(--color-ink-500)]">
                  New Culture Studios
                  <br />
                  Ibadan, Oyo State
                  <br />
                  Nigeria
                </address>
              </div>

              {/* Studio hours */}
              <div className="flex flex-col gap-3">
                <MetadataLine>
                  <span>Studio hours</span>
                </MetadataLine>
                <dl className="flex flex-col gap-1 text-[0.9375rem] leading-[1.7]">
                  <div className="flex justify-between gap-8">
                    <dt className="text-[var(--color-ink-500)]">
                      Monday — Friday
                    </dt>
                    <dd className="text-[var(--color-ink)]">9am — 5pm</dd>
                  </div>
                  <div className="flex justify-between gap-8">
                    <dt className="text-[var(--color-ink-500)]">Saturday</dt>
                    <dd className="text-[var(--color-ink)]">By appointment</dd>
                  </div>
                </dl>
              </div>

              {/* Coordinates */}
              <div className="flex flex-col gap-3">
                <MetadataLine>
                  <span>Location</span>
                </MetadataLine>
                <p className="font-[var(--font-mono)] text-[0.75rem] text-[var(--color-stone-500)]">
                  7.3775° N, 3.9470° E
                </p>
              </div>

              {/* Studio visit note */}
              <div className="rounded-[var(--radius-sm)] border border-[color:color-mix(in_srgb,var(--color-ink)_12%,transparent)] p-5">
                <p className="text-[0.875rem] leading-[1.6] text-[var(--color-ink-500)]">
                  Studio visits are welcome and encouraged. Select
                  &ldquo;Studio visit&rdquo; as the enquiry type and we will
                  arrange a time. Visits to New Culture Studios, one of the
                  practice&rsquo;s founding buildings, are also available by
                  arrangement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
