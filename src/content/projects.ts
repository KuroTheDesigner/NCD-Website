/**
 * Project content seed.
 * Placeholder imagery uses picsum.photos with stable seeds derived from slug.
 * Replace with final client-supplied assets — tracked in src/assets/README.md.
 */

export type ProjectStatus = "flagship" | "standard" | "private";

export type ProjectCategory =
  | "Cultural"
  | "Corporate"
  | "Residential"
  | "Educational"
  | "Interior";

export type ProjectImage = {
  src: string;
  alt: string;
  /** Optional caption for annotated architectural spreads. */
  caption?: string;
};

export type ProjectCredit = {
  role: string;
  /** May be an individual, a firm, or a team. */
  name: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  yearStart: number;
  yearEnd?: number;
  /**
   * `flagship` — long-form case study (cover, brief, approach, 8–12 images,
   * plans, pull quote, credits).
   * `standard` — condensed (cover, paragraph summary, 4–6 images, credits).
   * `private` — confidential commission; redacted location + anonymized client.
   */
  status: ProjectStatus;
  summary: string;
  heroImage: ProjectImage;
  images: ProjectImage[];
  credits: ProjectCredit[];
};

function placeholder(slug: string, seed: string, alt: string): ProjectImage {
  return {
    src: `https://picsum.photos/seed/${slug}-${seed}/1920/1280`,
    alt,
  };
}

export const projects: Project[] = [
  {
    id: "dominican-chapel-ibadan",
    slug: "dominican-chapel-ibadan",
    title: "Dominican Chapel, Ibadan",
    category: "Cultural",
    location: "Ibadan, Oyo State, Nigeria",
    yearStart: 1970,
    yearEnd: 1975,
    status: "flagship",
    summary:
      "A laterite-and-timber sanctuary for the Dominican order on Samonda Hill, crowned by a bell tower that translates Christianity's crown of thorns through the vocabulary of Hausa vernacular pinnacles. Every material was sourced on site; every line was drawn to ventilate, admit, and shade the West African sun.",
    heroImage: placeholder(
      "dominican-chapel-ibadan",
      "hero",
      "Dominican Chapel, Ibadan — laterite walls and timber roof structure",
    ),
    images: [
      placeholder("dominican-chapel-ibadan", "01", "Chapel exterior at dusk"),
      placeholder(
        "dominican-chapel-ibadan",
        "02",
        "Bell tower detail, Hausa-inflected pinnacles",
      ),
      placeholder(
        "dominican-chapel-ibadan",
        "03",
        "Interior nave with timber roof structure",
      ),
      placeholder(
        "dominican-chapel-ibadan",
        "04",
        "Laterite stonework at entrance",
      ),
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko" },
      { role: "Client", name: "Dominican Order, Ibadan" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "new-culture-studios-ibadan",
    slug: "new-culture-studios-ibadan",
    title: "New Culture Studios, Ibadan",
    category: "Cultural",
    location: "Ibadan, Oyo State, Nigeria",
    yearStart: 1967,
    status: "flagship",
    summary:
      "A private residence that grew, over decades, into a public art hub: galleries, performance spaces, guest quarters, and a retractable amphitheatre roof held open to the sky. New Culture Studios is the built argument for an architecture authentic to its place — the working laboratory behind everything that followed.",
    heroImage: placeholder(
      "new-culture-studios-ibadan",
      "hero",
      "New Culture Studios compound, Ibadan",
    ),
    images: [
      placeholder(
        "new-culture-studios-ibadan",
        "01",
        "Courtyard with timber colonnade",
      ),
      placeholder(
        "new-culture-studios-ibadan",
        "02",
        "Amphitheatre seating carved into the site",
      ),
      placeholder(
        "new-culture-studios-ibadan",
        "03",
        "Gallery interior with filtered daylight",
      ),
      placeholder(
        "new-culture-studios-ibadan",
        "04",
        "Exterior stairway of poured laterite",
      ),
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko" },
      { role: "Client", name: "New Culture Studios" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "oba-akenzua-cultural-centre",
    slug: "oba-akenzua-cultural-centre",
    title: "Oba Akenzua Cultural Centre, Benin City",
    category: "Cultural",
    location: "Benin City, Edo State, Nigeria",
    yearStart: 1972,
    status: "flagship",
    summary:
      "A public cultural building modelled after the early language of New Culture Studios and scaled up for civic use. Rooted in Edo iconography and built with local labour, the centre anchors the city's cultural life while extending the firm's investigation of Nigerian vernacular at public scale.",
    heroImage: placeholder(
      "oba-akenzua-cultural-centre",
      "hero",
      "Oba Akenzua Cultural Centre, Benin City",
    ),
    images: [
      placeholder(
        "oba-akenzua-cultural-centre",
        "01",
        "Façade elevation with civic plaza",
      ),
      placeholder(
        "oba-akenzua-cultural-centre",
        "02",
        "Performance hall interior",
      ),
      placeholder(
        "oba-akenzua-cultural-centre",
        "03",
        "Entrance canopy and carved screens",
      ),
      placeholder(
        "oba-akenzua-cultural-centre",
        "04",
        "Rear elevation and landscaping",
      ),
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko" },
      { role: "Client", name: "Edo State Government" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "mbari-cultural-pavilion",
    slug: "mbari-cultural-pavilion",
    title: "Mbari Cultural Pavilion",
    category: "Cultural",
    location: "Owerri, Imo State, Nigeria",
    yearStart: 2014,
    status: "standard",
    summary:
      "A low-slung pavilion for communal gatherings and exhibitions, sited within an active compound. The roof floats on slender timber columns while laterite plinths ground the structure to the red earth beneath.",
    heroImage: placeholder(
      "mbari-cultural-pavilion",
      "hero",
      "Mbari Cultural Pavilion — elevated roof structure over laterite plinths",
    ),
    images: [
      placeholder(
        "mbari-cultural-pavilion",
        "1",
        "Pavilion exterior from the approach",
      ),
      placeholder(
        "mbari-cultural-pavilion",
        "2",
        "Timber columns supporting the roof plane",
      ),
      placeholder(
        "mbari-cultural-pavilion",
        "3",
        "Open-air gathering space at golden hour",
      ),
      placeholder(
        "mbari-cultural-pavilion",
        "4",
        "Laterite plinth detail at the entry",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Okafor & Associates" },
      { role: "Client", name: "Mbari Cultural Trust" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "ikoyi-family-residence",
    slug: "ikoyi-family-residence",
    title: "Ikoyi Family Residence",
    category: "Residential",
    location: "Lagos, Nigeria",
    yearStart: 2019,
    status: "private",
    summary:
      "A private family residence on a walled Ikoyi lot, organised around a central courtyard and a stand of mature trees retained from the original site. Materials were kept few and quiet — plastered masonry, timber screens, bronze ironmongery.",
    heroImage: placeholder(
      "ikoyi-family-residence",
      "hero",
      "Private residence exterior with courtyard planting",
    ),
    images: [
      placeholder(
        "ikoyi-family-residence",
        "1",
        "Courtyard view through a timber screen",
      ),
      placeholder(
        "ikoyi-family-residence",
        "2",
        "Living pavilion with tall glazed openings",
      ),
      placeholder(
        "ikoyi-family-residence",
        "3",
        "Covered walkway between wings",
      ),
      placeholder(
        "ikoyi-family-residence",
        "4",
        "Upper-floor terrace under a timber pergola",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Adewale Engineering" },
      { role: "Client", name: "Private Commission" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "university-of-ibadan-chapel",
    slug: "university-of-ibadan-chapel",
    title: "University of Ibadan Chapel Expansion",
    category: "Cultural",
    location: "Ibadan, Oyo State, Nigeria",
    yearStart: 2011,
    status: "standard",
    summary:
      "An expansion to an existing campus chapel that doubles seating capacity without disturbing the original nave. A new timber clerestory draws filtered daylight down onto the altar across the course of the day.",
    heroImage: placeholder(
      "university-of-ibadan-chapel",
      "hero",
      "University of Ibadan Chapel — expanded nave with clerestory light",
    ),
    images: [
      placeholder(
        "university-of-ibadan-chapel",
        "1",
        "Chapel exterior from the campus approach",
      ),
      placeholder(
        "university-of-ibadan-chapel",
        "2",
        "Clerestory admitting morning light",
      ),
      placeholder(
        "university-of-ibadan-chapel",
        "3",
        "Interior nave with timber seating",
      ),
      placeholder(
        "university-of-ibadan-chapel",
        "4",
        "Side aisle connecting old and new volumes",
      ),
      placeholder(
        "university-of-ibadan-chapel",
        "5",
        "Entry narthex and carved doors",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Balogun Structural" },
      { role: "Client", name: "University of Ibadan Chaplaincy" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "lagos-corporate-headquarters",
    slug: "lagos-corporate-headquarters",
    title: "Corporate Headquarters, Victoria Island",
    category: "Corporate",
    location: "Lagos, Nigeria",
    yearStart: 2021,
    status: "standard",
    summary:
      "A ten-storey headquarters tuned to the Lagos climate — deep concrete brises-soleil on the western face, a planted atrium that pulls air through the building's core, and ground-floor arcade tying the tower into its street.",
    heroImage: placeholder(
      "lagos-corporate-headquarters",
      "hero",
      "Victoria Island corporate headquarters at dusk",
    ),
    images: [
      placeholder(
        "lagos-corporate-headquarters",
        "1",
        "Western elevation with brise-soleil shading",
      ),
      placeholder(
        "lagos-corporate-headquarters",
        "2",
        "Planted atrium from the ground floor",
      ),
      placeholder(
        "lagos-corporate-headquarters",
        "3",
        "Arcade and street-level entry",
      ),
      placeholder(
        "lagos-corporate-headquarters",
        "4",
        "Executive floor looking toward the lagoon",
      ),
      placeholder(
        "lagos-corporate-headquarters",
        "5",
        "Lobby and reception desk",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Adeniyi Partners" },
      { role: "Client", name: "Private Commission" },
      { role: "Photography", name: "Tolu Adebayo" },
    ],
  },
  {
    id: "abuja-diplomatic-residence",
    slug: "abuja-diplomatic-residence",
    title: "Diplomatic Residence",
    category: "Residential",
    location: "Abuja, Nigeria",
    yearStart: 2018,
    status: "standard",
    summary:
      "An ambassadorial residence arranged around two courtyards — one public for receiving, one private for family life. The roofline quotes the rhythm of surrounding granite outcrops in slow repetition.",
    heroImage: placeholder(
      "abuja-diplomatic-residence",
      "hero",
      "Diplomatic Residence, Abuja — courtyard elevation",
    ),
    images: [
      placeholder(
        "abuja-diplomatic-residence",
        "1",
        "Reception courtyard at arrival",
      ),
      placeholder(
        "abuja-diplomatic-residence",
        "2",
        "Family courtyard with water feature",
      ),
      placeholder(
        "abuja-diplomatic-residence",
        "3",
        "Dining pavilion under a long eave",
      ),
      placeholder(
        "abuja-diplomatic-residence",
        "4",
        "Roofline against the Abuja outcrops",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Kano Structural" },
      { role: "Client", name: "Foreign Mission (name withheld)" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "enugu-school-of-architecture",
    slug: "enugu-school-of-architecture",
    title: "School of Architecture Studio Block",
    category: "Educational",
    location: "Enugu, Nigeria",
    yearStart: 2016,
    status: "standard",
    summary:
      "A purpose-built studio block for an architecture faculty — long north-facing bays for steady studio light, an open review hall at the heart, and a rooftop terrace that doubles as an outdoor crit space.",
    heroImage: placeholder(
      "enugu-school-of-architecture",
      "hero",
      "Studio block façade with north-facing bays",
    ),
    images: [
      placeholder(
        "enugu-school-of-architecture",
        "1",
        "North elevation and studio windows",
      ),
      placeholder(
        "enugu-school-of-architecture",
        "2",
        "Central review hall during a crit",
      ),
      placeholder(
        "enugu-school-of-architecture",
        "3",
        "Studio interior with pinned drawings",
      ),
      placeholder(
        "enugu-school-of-architecture",
        "4",
        "Rooftop terrace set up for outdoor crits",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Nnamdi Associates" },
      { role: "Client", name: "Enugu State University" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "benin-civic-hall",
    slug: "benin-civic-hall",
    title: "Benin Civic Hall Restoration",
    category: "Cultural",
    location: "Benin City, Edo State, Nigeria",
    yearStart: 2013,
    status: "standard",
    summary:
      "A restoration of a mid-century civic hall damaged by years of deferred maintenance. The scope recovered original brickwork, rebuilt the timber roof with improved ventilation, and added a small back-of-house wing.",
    heroImage: placeholder(
      "benin-civic-hall",
      "hero",
      "Civic Hall restored façade with new paving",
    ),
    images: [
      placeholder(
        "benin-civic-hall",
        "1",
        "Main façade after restoration",
      ),
      placeholder(
        "benin-civic-hall",
        "2",
        "Rebuilt timber roof from inside the hall",
      ),
      placeholder(
        "benin-civic-hall",
        "3",
        "Recovered brickwork at the entrance bay",
      ),
      placeholder(
        "benin-civic-hall",
        "4",
        "New back-of-house wing set behind the hall",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Osagie Consult" },
      { role: "Client", name: "Edo State Government" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
  {
    id: "ibadan-artists-retreat",
    slug: "ibadan-artists-retreat",
    title: "Artists' Retreat & Studios",
    category: "Cultural",
    location: "Ibadan, Oyo State, Nigeria",
    yearStart: 2022,
    status: "standard",
    summary:
      "A residency compound of nine studio-dwellings arranged along a shaded spine, each opening to a private garden. The plan concentrates shared facilities — kitchen, library, gallery — at the hinge between public and private ground.",
    heroImage: placeholder(
      "ibadan-artists-retreat",
      "hero",
      "Artists' Retreat compound — shaded spine between studios",
    ),
    images: [
      placeholder(
        "ibadan-artists-retreat",
        "1",
        "Shaded circulation spine with studio entries",
      ),
      placeholder(
        "ibadan-artists-retreat",
        "2",
        "Single studio unit with private garden",
      ),
      placeholder(
        "ibadan-artists-retreat",
        "3",
        "Shared library at the compound hinge",
      ),
      placeholder(
        "ibadan-artists-retreat",
        "4",
        "Gallery space set up for an open studio",
      ),
      placeholder(
        "ibadan-artists-retreat",
        "5",
        "Evening view across the compound",
      ),
    ],
    credits: [
      { role: "Architect", name: "New Culture Designs" },
      { role: "Structural Engineer", name: "Falade Structural" },
      { role: "Client", name: "Private Commission" },
      { role: "Photography", name: "Tolu Adebayo" },
    ],
  },
  {
    id: "port-harcourt-interior-suite",
    slug: "port-harcourt-interior-suite",
    title: "Private Suite Interiors",
    category: "Interior",
    location: "Port Harcourt, Nigeria",
    yearStart: 2020,
    status: "standard",
    summary:
      "A refurbishment of a private suite inside an existing shell — walnut joinery, plastered walls in warm neutrals, brass fittings specified to patinate with use. The intervention is quiet and intended to outlast trend.",
    heroImage: placeholder(
      "port-harcourt-interior-suite",
      "hero",
      "Private suite interior with walnut joinery",
    ),
    images: [
      placeholder(
        "port-harcourt-interior-suite",
        "1",
        "Living area with walnut built-ins",
      ),
      placeholder(
        "port-harcourt-interior-suite",
        "2",
        "Dressing corridor with full-height joinery",
      ),
      placeholder(
        "port-harcourt-interior-suite",
        "3",
        "Bathroom detail with brass fittings",
      ),
      placeholder(
        "port-harcourt-interior-suite",
        "4",
        "Reading nook at a corner window",
      ),
    ],
    credits: [
      { role: "Interior Architect", name: "New Culture Designs" },
      { role: "Joinery", name: "Okon Woodwork" },
      { role: "Client", name: "Private Commission" },
      { role: "Photography", name: "Placeholder — client to supply" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFlagshipProjects(): Project[] {
  return projects.filter((p) => p.status === "flagship");
}

/** Public-facing projects (flagship + standard). Private commissions only
 *  appear in the Work index as a redacted tile. */
export function getPublicProjects(): Project[] {
  return projects.filter((p) => p.status !== "private");
}

/** All projects visible in the Work index, including redacted private tiles. */
export function getIndexProjects(): Project[] {
  return projects;
}

/** Decade bucket (e.g. 2020 for 2024, 1970 for 1975). */
export function projectDecade(p: Project): number {
  return Math.floor(p.yearStart / 10) * 10;
}

/** Public-facing location string — private commissions get a redacted form. */
export function displayLocation(p: Project): string {
  if (p.status === "private") {
    // Represent as city-only fallback based on stored location.
    const [, rest] = p.location.split(",");
    const city = p.location.split(",")[0].trim();
    const country = rest?.trim() ?? "";
    if (country && country.toLowerCase().includes("nigeria")) {
      return `A ${p.category.toLowerCase()} commission, ${city}`;
    }
    return `A ${p.category.toLowerCase()} commission`;
  }
  return p.location;
}

/** Public-facing title — private commissions read as a redacted descriptor. */
export function displayTitle(p: Project): string {
  if (p.status === "private") {
    const city = p.location.split(",")[0].trim();
    return `A ${p.category.toLowerCase()} commission, ${city}`;
  }
  return p.title;
}

/** Year string — e.g. "1970 — 1975" or "1967 — present" for open-ended. */
export function projectYearLabel(p: Project): string {
  if (p.yearEnd && p.yearEnd !== p.yearStart) {
    return `${p.yearStart} — ${p.yearEnd}`;
  }
  return `${p.yearStart}`;
}

/** The next project after the given slug (wraps around). Used for
 *  the "next project" link at the bottom of a case study. */
export function getNextProject(slug: string): Project | undefined {
  const pub = getPublicProjects();
  const idx = pub.findIndex((p) => p.slug === slug);
  if (idx < 0) return undefined;
  return pub[(idx + 1) % pub.length];
}
