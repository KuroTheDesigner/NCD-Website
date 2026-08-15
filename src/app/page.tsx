import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { PositioningStatement } from "@/components/home/positioning";
import { FeaturedProject } from "@/components/home/featured-project";
import { ServicesPreview } from "@/components/home/services-preview";
import { FounderMoment } from "@/components/home/founder-moment";
import { CtaStrip } from "@/components/home/cta-strip";
import { getFlagshipProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "New Culture Designs — Architecture & Design Practice, Ibadan",
  description:
    "An indigenous Nigerian architectural practice working across cultural, institutional, residential, and corporate briefs. Rooted in the legacy of Demas Nwoko.",
};

export default function Home() {
  const flagship = getFlagshipProjects()[0];

  return (
    <>
      <HomeHero />
      <PositioningStatement />
      <ServicesPreview />
      <FounderMoment />
      {flagship && <FeaturedProject project={flagship} />}
      <CtaStrip />
    </>
  );
}
