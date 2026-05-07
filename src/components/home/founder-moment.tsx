import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { FadeUp } from "@/components/ui/fade-up";
import { cn } from "@/lib/cn";

export function FounderMoment() {
  return (
    <Section aria-labelledby="founder-heading">
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <MetadataLine>
              <span>Founded 1967</span>
              <span>Ibadan</span>
            </MetadataLine>
          </div>

          <div className="col-span-12 flex flex-col gap-8 md:col-span-8 lg:col-span-7">
            <FadeUp>
              <p
                id="founder-heading"
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(1.2rem,2.8vw,1.85rem)]",
                  "leading-[1.4] tracking-[-0.015em]",
                  "[text-wrap:balance]",
                )}
              >
                The practice descends from the work of Demas Nwoko — master
                builder, artist, and one of the foremost figures of African
                modernism, whose Dominican Chapel in Ibadan and New Culture
                Studios have defined a Nigerian architectural language of earth,
                craft, and ceremony for more than five decades.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <TextLink href="/legacy">Read the legacy</TextLink>
            </FadeUp>
          </div>
        </div>
      </Container>
    </Section>
  );
}
