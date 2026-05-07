import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MetadataLine } from "@/components/ui/metadata-line";
import { TextLink } from "@/components/ui/text-link";
import { CaseStudyHero } from "@/components/work/case-study-hero";
import { StickyGallery } from "@/components/work/sticky-gallery";
import { StandardGallery } from "@/components/work/standard-gallery";
import { cn } from "@/lib/cn";
import {
  getProjectBySlug,
  getPublicProjects,
  getNextProject,
  displayLocation,
  projectYearLabel,
} from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublicProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.status === "private") notFound();

  const nextProject = getNextProject(slug);
  const isFlagship = project.status === "flagship";
  const location = displayLocation(project);
  const year = projectYearLabel(project);

  return (
    <>
      {/* Hero */}
      <div className="pt-16 md:pt-20">
        <CaseStudyHero image={project.heroImage} cinematic={isFlagship} />
      </div>

      {/* Title + metadata */}
      <Section>
        <Container>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 flex flex-col gap-5 md:col-span-8 lg:col-span-7">
              <MetadataLine>
                <span>{location}</span>
                <span>{year}</span>
                <span>{project.category}</span>
              </MetadataLine>
              <h1
                className={cn(
                  "font-[var(--font-display)] text-[var(--color-ink)]",
                  "text-[clamp(2.5rem,7vw,5.5rem)]",
                  "leading-[0.96] tracking-[-0.03em]",
                  "[text-wrap:balance]",
                )}
              >
                {project.title}
              </h1>
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-5">
              <p className="text-[1.0625rem] md:text-[1.2rem] leading-[1.65] text-[var(--color-ink-500)]">
                {project.summary}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section className="!pt-0">
        <Container>
          {isFlagship ? (
            <StickyGallery
              eyebrow="Project documentation"
              title="Built drawings and site record"
              description="Photographs and drawings from the studio archive. All imagery is provisional — final archival photography will be supplied by the client."
              images={project.images}
            />
          ) : (
            <StandardGallery images={project.images} />
          )}
        </Container>
      </Section>

      {/* Credits */}
      {project.credits.length > 0 && (
        <Section>
          <Container>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-2">
                <MetadataLine>
                  <span>Credits</span>
                </MetadataLine>
              </div>
              <dl className="col-span-12 grid grid-cols-1 gap-x-12 gap-y-4 md:col-span-10 md:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                {project.credits.map((c) => (
                  <div key={c.role} className="flex flex-col gap-1">
                    <dt className="font-[var(--font-mono)] text-[0.6875rem] uppercase [letter-spacing:var(--tracking-label)] text-[var(--color-stone-500)]">
                      {c.role}
                    </dt>
                    <dd className="text-[0.9375rem] text-[var(--color-ink)]">
                      {c.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>
      )}

      {/* Next project */}
      {nextProject && (
        <section
          aria-label="Next project"
          className="border-t border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]"
        >
          <Container className="py-14 md:py-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <MetadataLine>
                <span>Next project</span>
              </MetadataLine>
              <TextLink href={`/work/${nextProject.slug}`}>
                <span
                  className={cn(
                    "font-[var(--font-display)] text-[1.5rem] md:text-[2rem]",
                    "leading-[1.02] tracking-[-0.02em]",
                  )}
                >
                  {nextProject.title}
                </span>
              </TextLink>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
