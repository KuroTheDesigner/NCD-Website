import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms governing the use of the New Culture Designs website.",
};

export default function TermsPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="flex flex-col gap-6 md:max-w-[75%]">
            <MetadataLine>
              <span>Legal</span>
              <span>Last updated: April 2025</span>
            </MetadataLine>
            <h1
              className={cn(
                "font-[var(--font-display)] text-[var(--color-ink)]",
                "text-[clamp(2.5rem,6vw,5rem)]",
                "leading-[0.94] tracking-[-0.03em]",
              )}
            >
              Terms of use
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0 !pb-28">
        <Container>
          <div className="mx-auto max-w-[72ch] [&_h2]:font-[var(--font-display)] [&_h2]:text-[1.4rem] [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.015em] [&_h2]:text-[var(--color-ink)] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-[0.9375rem] [&_p]:leading-[1.7] [&_p]:text-[var(--color-ink-500)] [&_p]:mb-5 [&_ul]:pl-5 [&_ul]:mb-5 [&_li]:text-[0.9375rem] [&_li]:leading-[1.7] [&_li]:text-[var(--color-ink-500)] [&_li]:mb-2">
            <p>
              By accessing this website you agree to the following terms. If
              you do not agree, please do not use the site.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on this site — including text, photographs,
              architectural drawings, and project imagery — is the property of
              New Culture Designs or used with permission. You may not
              reproduce, republish, or distribute any content without prior
              written consent.
            </p>

            <h2>Project imagery</h2>
            <p>
              Photographs of buildings and interiors attributed to the practice
              are protected by copyright. Press and academic enquiries
              regarding image use may be directed to us through the contact
              page.
            </p>

            <h2>Accuracy of information</h2>
            <p>
              We make reasonable efforts to keep the information on this site
              accurate and up to date. Project details, team information, and
              service descriptions are subject to change. Nothing on this site
              constitutes a binding offer of services.
            </p>

            <h2>Third-party links</h2>
            <p>
              This site may contain links to external resources. We are not
              responsible for the content or privacy practices of third-party
              sites.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, New Culture Designs
              accepts no liability for any direct, indirect, or consequential
              loss arising from use of this site or reliance on its contents.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. The current version
              is dated above. Continued use of the site constitutes acceptance
              of any updates.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
