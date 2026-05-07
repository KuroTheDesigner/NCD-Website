import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { WorkIndex } from "@/components/work/work-index";
import { FadeUp } from "@/components/ui/fade-up";
import { getIndexProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by New Culture Designs — cultural, corporate, residential, educational, and interior work across Nigeria, from 1967 to present.",
};

export default function WorkPage() {
  const projects = getIndexProjects();
  const earliest = Math.min(...projects.map((p) => p.yearStart));

  return (
    <>
      <Section className="pt-16 md:pt-24 lg:pt-28">
        <Container>
          <FadeUp className="flex flex-col gap-7 md:gap-9">
            <MetadataLine>
              <span>Selected projects</span>
              <span>{earliest} — Present</span>
            </MetadataLine>

            <h1
              className="font-[var(--font-display)] text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)]"
              style={{ textWrap: "balance" }}
            >
              Work.
            </h1>

            <p className="max-w-[65ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
              A catalogue of cultural buildings, institutions, corporate
              headquarters, private residences, and interiors — assembled over
              six decades of practice. Filter by category or decade to see the
              work in context.
            </p>
          </FadeUp>
        </Container>
      </Section>

      <Section className="!pt-0 !pb-28 md:!pb-36">
        <Container>
          <WorkIndex projects={projects} />
        </Container>
      </Section>
    </>
  );
}
