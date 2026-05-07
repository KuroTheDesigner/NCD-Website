import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How New Culture Designs collects and uses your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <FadeUp className="flex flex-col gap-6 md:max-w-[75%]">
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
              Privacy policy
            </h1>
          </FadeUp>
        </Container>
      </Section>

      <Section className="!pt-0 !pb-28">
        <Container>
          <FadeUp delay={0.1} className="prose-custom mx-auto max-w-[72ch] [&_h2]:font-[var(--font-display)] [&_h2]:text-[1.4rem] [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.015em] [&_h2]:text-[var(--color-ink)] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-[0.9375rem] [&_p]:leading-[1.7] [&_p]:text-[var(--color-ink-500)] [&_p]:mb-5 [&_ul]:pl-5 [&_ul]:mb-5 [&_li]:text-[0.9375rem] [&_li]:leading-[1.7] [&_li]:text-[var(--color-ink-500)] [&_li]:mb-2">
            <p>
              New Culture Designs (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              &ldquo;us&rdquo;) respects your privacy. This policy explains
              what information we collect, how we use it, and your rights with
              respect to it.
            </p>

            <h2>What information we collect</h2>
            <p>
              When you submit an enquiry through our contact form, we collect
              your name, email address, and the content of your message. We do
              not collect payment information or sensitive personal data.
            </p>
            <p>
              We may also collect standard web analytics data (page views,
              session duration, device type) through analytics software. This
              data is aggregated and does not identify you personally.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to your enquiry.</li>
              <li>
                To maintain a record of our correspondence for project
                management purposes.
              </li>
              <li>
                To improve the site based on aggregated usage patterns.
              </li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain enquiry data for the duration of any resulting project
              relationship and for up to five years after the last communication,
              in line with standard professional record-keeping practice. You
              may request deletion at any time.
            </p>

            <h2>Your rights</h2>
            <p>
              You have the right to access, correct, or request deletion of
              personal data we hold about you. To make a request, email us
              directly from the contact page.
            </p>

            <h2>Cookies</h2>
            <p>
              This site uses functional cookies necessary for the site to
              operate. We do not use tracking cookies or advertising cookies.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version
              is dated above. Continued use of the site after an update
              constitutes acceptance of the revised policy.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, contact us through the contact
              page.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
