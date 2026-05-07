/**
 * Content seed for the /legacy page — a tribute to Demas Nwoko, founder of
 * New Culture Designs and one of the central figures of African modernism.
 *
 * Quoted material attributed to public record (Wallpaper, The Architectural
 * Review, Al Jazeera, The Conversation). Placeholder imagery uses stable
 * picsum seeds until the client supplies final archival photography.
 */

export type MilestoneKind = "project" | "essay" | "award" | "milestone";

export type LegacyMilestone = {
  year: number;
  title: string;
  location?: string;
  kind: MilestoneKind;
  summary: string;
  imageSeed: string;
  imageAlt: string;
  /** Slug into /work/[slug] when the milestone corresponds to a case study. */
  linkSlug?: string;
};

export type PressLink = {
  publication: string;
  excerpt: string;
  href: string;
};

/**
 * Opening essay — two editorial paragraphs positioning Nwoko without hype.
 * Plain prose, unhurried, concrete about materials and ideas.
 */
export const opening: string[] = [
  "Demas Nwoko is one of the central figures of African modernism. Trained as a painter and a scenographer before he turned to building, he spent six decades arguing — in drawings, in timber, in the red laterite of the Yoruba plateau — that an architecture authentic to Nigeria could not be imported. It had to be studied, and then built, from the ground the building would sit on. The materials closest to hand. The climate the walls would have to breathe in. The cultural memory the space would have to hold.",
  "The body of work that followed is spare and exacting. Laterite walls poured from site-won earth. Timber roofs framed to shed rain, filter light, and draw air through the body of the building without mechanical help. Towers and thresholds shaped from the same vocabulary as the carvers and praise-singers whose work he had drawn throughout his youth. Nwoko's buildings are neither nostalgic nor imitative; they are arguments for a modern Nigeria that does not have to leave itself behind to be modern. The practice you are reading about was built on that argument, and continues to work from it.",
];

export const philosophyQuote = {
  text: "Whatever you build, it should suit your culture.",
  attribution: "Demas Nwoko",
};

export const timeline: LegacyMilestone[] = [
  {
    year: 1963,
    title: "Exhibits at the Mbari Club, Ibadan",
    location: "Ibadan, Nigeria",
    kind: "milestone",
    summary:
      "A founding moment of post-independence Nigerian cultural life. Nwoko shows work alongside Wole Soyinka, Christopher Okigbo, and Chinua Achebe at the Mbari Club — the artistic milieu that would shape his thinking on the relationship between art, architecture, and place.",
    imageSeed: "nwoko-mbari-1963",
    imageAlt:
      "Archival photograph of the Mbari Club exhibition hall, Ibadan, 1963",
  },
  {
    year: 1967,
    title: "Begins New Culture Studios, Ibadan",
    location: "Ibadan, Oyo State, Nigeria",
    kind: "project",
    summary:
      "A private residence extended, over decades, into a public art hub. Galleries, performance spaces, guest quarters, and a retractable amphitheatre roof held open to the sky. New Culture Studios is the working laboratory behind everything that followed — the built argument for an architecture authentic to its place.",
    imageSeed: "new-culture-studios-ibadan-hero",
    imageAlt: "New Culture Studios compound, Ibadan",
    linkSlug: "new-culture-studios-ibadan",
  },
  {
    year: 1970,
    title: "Commissioned for the Dominican Chapel",
    location: "Samonda Hill, Ibadan",
    kind: "project",
    summary:
      "The Dominican Order invites Nwoko to design their chapel on Samonda Hill. Laterite walls are poured from earth won on site; the timber roof is framed by local carpenters; the bell tower translates the Christian crown of thorns through the vocabulary of Hausa vernacular pinnacles.",
    imageSeed: "dominican-chapel-1970-commission",
    imageAlt: "Construction photograph of the Dominican Chapel bell tower",
  },
  {
    year: 1972,
    title: "Begins the Oba Akenzua Cultural Centre",
    location: "Benin City, Edo State, Nigeria",
    kind: "project",
    summary:
      "A public cultural building scaled up from the early language of New Culture Studios. Rooted in Edo iconography and built with local labour, the centre anchors the city's cultural life and extends Nwoko's investigation of Nigerian vernacular at public, civic scale.",
    imageSeed: "oba-akenzua-cultural-centre-hero",
    imageAlt: "Oba Akenzua Cultural Centre façade, Benin City",
    linkSlug: "oba-akenzua-cultural-centre",
  },
  {
    year: 1975,
    title: "Dominican Chapel, Ibadan — completed",
    location: "Ibadan, Oyo State, Nigeria",
    kind: "project",
    summary:
      "Five years of construction close. The chapel is dedicated and enters daily use. It will come to be regarded as one of the most accomplished pieces of modern Nigerian sacred architecture — a building that is both devotional and distinctly of its place.",
    imageSeed: "dominican-chapel-ibadan-hero",
    imageAlt:
      "Dominican Chapel, Ibadan — laterite walls and timber roof, 1975",
    linkSlug: "dominican-chapel-ibadan",
  },
  {
    year: 2020,
    title: "Featured in 1000 Buildings You Must See Before You Die",
    kind: "essay",
    summary:
      "The Dominican Chapel enters the canon of essential world architecture. International press — Wallpaper, The Architectural Review, Al Jazeera — revisit the building and the philosophy of the architect who made it.",
    imageSeed: "legacy-1000-buildings-publication",
    imageAlt: "Publication spread featuring the Dominican Chapel",
  },
  {
    year: 2023,
    title:
      "Golden Lion for Lifetime Achievement, Venice Architecture Biennale",
    location: "Venice, Italy",
    kind: "award",
    summary:
      "La Biennale di Venezia recognises Nwoko's six-decade contribution to a distinctly African modernism. The award is presented during the 18th International Architecture Exhibition; the citation names a body of work that insisted, long before it was fashionable, that building for Africa meant building from Africa.",
    imageSeed: "legacy-venice-biennale-2023",
    imageAlt:
      "Venice Architecture Biennale Golden Lion ceremony, 2023",
  },
  {
    year: 2024,
    title: "Announces the New Culture School of Design, Lagos",
    location: "Lagos, Nigeria",
    kind: "milestone",
    summary:
      "Nwoko announces the establishment of a new school of design in Lagos, intended to formalise the pedagogy the studio has been practising for decades — an architecture rooted in place, trained through making, and accountable to the culture it is built for.",
    imageSeed: "legacy-school-of-design-lagos",
    imageAlt: "Site of the New Culture School of Design, Lagos",
  },
];

export const press: PressLink[] = [
  {
    publication: "Al Jazeera",
    excerpt:
      "A new master's house — on the architect decolonising Nigerian design.",
    href: "https://www.aljazeera.com/features/2020/8/10/a-new-masters-house-the-architect-decolonising-nigerian-design",
  },
  {
    publication: "The Architectural Review",
    excerpt:
      "Revisit: New Culture Studios, Ibadan — a house that argued for an architecture of its place.",
    href: "https://www.architectural-review.com/essays/revisit/revisit-new-culture-studios-in-ibadan-nigeria-by-demas-nwoko",
  },
  {
    publication: "Wallpaper*",
    excerpt:
      "The pioneering architecture of Demas Nwoko — artist, designer, builder.",
    href: "https://www.wallpaper.com/architecture/architecture-artist-designer-demas-nwoko-nigeria",
  },
  {
    publication: "The Conversation",
    excerpt:
      "Whatever you build, it should suit your culture — the architect in his own words.",
    href: "https://theconversation.com/nigerian-architect-demas-nwoko-on-his-award-winning-work-whatever-you-build-it-should-suit-your-culture-206224",
  },
];

export const closing =
  "The practice he founded continues from the same ground: a Nigerian studio working across residential, cultural, corporate, and institutional commissions — design, design-build, facilities management, property development — under the discipline that began, sixty years ago, at New Culture Studios. The buildings we make today are expected to meet the standard the work you have just read about set, and to keep setting it forward.";
