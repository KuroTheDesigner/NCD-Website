/**
 * Project content catalogue populated from Anyibofu Ugbodaga's authentic portfolio.
 * All imagery is locally stored in /public/images/projects/.
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
   * `flagship` — long-form case study (cover, brief, approach, images,
   * plans, pull quote, credits).
   * `standard` — condensed (cover, paragraph summary, gallery images, credits).
   * `private` — confidential commission; redacted location + anonymized client.
   */
  status: ProjectStatus;
  summary: string;
  heroImage: ProjectImage;
  images: ProjectImage[];
  credits: ProjectCredit[];
};

export const projects: Project[] = [
  {
    id: "oba-akenzua-cultural-centre",
    slug: "oba-akenzua-cultural-centre",
    title: "Oba Akenzua Cultural Centre, Benin City",
    category: "Cultural",
    location: "Benin City, Edo State, Nigeria",
    yearStart: 1972,
    status: "flagship",
    summary:
      "A civic cultural landmark delivered for the Edo State Government, including the building's public forecourt and gathering plaza. Designed by master architect Demas Nwoko with Anyibofu Ugbodaga, the current phase involves preparation for completion and restoration. The design draws on the practice's long-standing engagement with Nigerian cultural and heritage architecture, translating it into a contemporary civic venue for public gathering and ceremony.",
    heroImage: {
      src: "/images/projects/oba-akenzua-cultural-centre/hero.jpg",
      alt: "Oba Akenzua Cultural Centre, Benin City — civic plaza and main elevation",
    },
    images: [
      {
        src: "/images/projects/oba-akenzua-cultural-centre/hero.jpg",
        alt: "Oba Akenzua Cultural Centre — civic plaza and main elevation",
        caption: "Main civic facade overlooking the public gathering forecourt",
      },
      {
        src: "/images/projects/oba-akenzua-cultural-centre/detail-screen.jpg",
        alt: "Oba Akenzua Cultural Centre — carved screen and entrance canopy detail",
        caption: "Architectural screen and entrance canopy detail rooted in Edo iconography",
      },
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko & Anyibofu Ugbodaga" },
      { role: "Client", name: "Edo State Government" },
      { role: "Construction & Restoration", name: "Ganttworks Limited" },
    ],
  },
  {
    id: "dominican-chapel-ibadan",
    slug: "dominican-chapel-ibadan",
    title: "Dominican Institute & Seminary, Ibadan",
    category: "Cultural",
    location: "Ibadan, Oyo State, Nigeria",
    yearStart: 1970,
    yearEnd: 1975,
    status: "flagship",
    summary:
      "A landmark sacred and educational complex for the Dominican order on Samonda Hill. Designed, built, and maintained across generations with Demas Nwoko and Anyibofu Ugbodaga, crowned by a bell tower that translates Christianity's crown of thorns through the vocabulary of Hausa vernacular pinnacles. Every material was sourced on site; every line was drawn to ventilate, admit, and shade the West African sun.",
    heroImage: {
      src: "/images/projects/dominican-chapel-ibadan/hero.jpg",
      alt: "Dominican Institute & Seminary, Ibadan — sanctuary and timber roof structure",
    },
    images: [
      {
        src: "/images/projects/dominican-chapel-ibadan/hero.jpg",
        alt: "Dominican Institute & Seminary — sanctuary interior with timber roof structure",
        caption: "Nave and sanctuary framed with site-crafted timber trusses",
      },
      {
        src: "/images/projects/dominican-chapel-ibadan/compound-overview.jpg",
        alt: "Dominican Chapel — compound overview and architectural volume",
        caption: "Laterite masonry sanctuary nestled within the Samonda Hill landscape",
      },
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko & Anyibofu Ugbodaga" },
      { role: "Client", name: "Dominican Order, Ibadan" },
      { role: "Maintenance & Construction", name: "Ganttworks Limited" },
    ],
  },
  {
    id: "idumuje-ugboko-royal-palace",
    slug: "idumuje-ugboko-royal-palace",
    title: "Forecourt of Idumuje-Ugboko Royal Palace",
    category: "Cultural",
    location: "Idumuje-Ugboko, Delta State, Nigeria",
    yearStart: 1907,
    status: "flagship",
    summary:
      "A cultural landmark that dates back to 1907, initially designed by Obi Nkeze 1st, undergoing a public forecourt enhancement and restoration of the 'Ogwa'. This serves as the first phase of a complete restoration and preservation project of a heritage cultural complex. The design draws on the practice's long-standing engagement with the culture and heritage of Idumuje-Ugboko, with ancestral connection to the ancient Benin Kingdom, reflecting the openness of the palace to its people.",
    heroImage: {
      src: "/images/projects/idumuje-ugboko-royal-palace/hero.jpg",
      alt: "Forecourt of Idumuje-Ugboko Royal Palace — historic Ogwa and ceremonial court",
    },
    images: [
      {
        src: "/images/projects/idumuje-ugboko-royal-palace/hero.jpg",
        alt: "Historic Ogwa and Royal Palace court at Idumuje-Ugboko",
        caption: "Historic palace fabric dating back to 1907",
      },
      {
        src: "/images/projects/idumuje-ugboko-royal-palace/ogwa-restoration.jpg",
        alt: "Proposed design, restoration, and preservation of the palace forecourt",
        caption: "Architectural forecourt enhancement and restoration scheme",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Consultant", name: "Demas Nwoko" },
      { role: "Client", name: "Royal Palace of Idumuje-Ugboko" },
    ],
  },
  {
    id: "benedictine-monastery-ewu",
    slug: "benedictine-monastery-ewu",
    title: "Benedictine Monastery, Ewu",
    category: "Cultural",
    location: "Ewu, Edo State, Nigeria",
    yearStart: 1992,
    status: "standard",
    summary:
      "A body of ecumenical and sacred community architecture carried out in partnership with Demas Nwoko. Scope spanned full production drawings, site coordination, and comprehensive supervision for the contemplative Benedictine monastery complex in Ewu.",
    heroImage: {
      src: "/images/projects/benedictine-monastery-ewu/hero.jpg",
      alt: "Benedictine Monastery, Ewu — cloister grounds and sanctuary exterior",
    },
    images: [
      {
        src: "/images/projects/benedictine-monastery-ewu/hero.jpg",
        alt: "Benedictine Monastery, Ewu — cloister grounds and sanctuary exterior",
      },
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko & Anyibofu Ugbodaga" },
      { role: "Client", name: "Benedictine Monks of Ewu" },
    ],
  },
  {
    id: "lady-pierce-chapel-issele-uku",
    slug: "lady-pierce-chapel-issele-uku",
    title: "Lady Pierce Chapel, Issele-Uku",
    category: "Cultural",
    location: "Issele-Uku, Delta State, Nigeria",
    yearStart: 2005,
    status: "standard",
    summary:
      "Sacred community architecture and ecumenical chapel design carried through to completion in collaboration with Demas Nwoko. The chapel integrates sculpted masonry walls, natural top lighting, and handcrafted timber interior fixtures.",
    heroImage: {
      src: "/images/projects/lady-pierce-chapel-issele-uku/hero.jpg",
      alt: "Lady Pierce Chapel, Issele-Uku — exterior sanctuary and bell tower",
    },
    images: [
      {
        src: "/images/projects/lady-pierce-chapel-issele-uku/hero.jpg",
        alt: "Lady Pierce Chapel exterior view",
      },
      {
        src: "/images/projects/lady-pierce-chapel-issele-uku/elevation-drawing.png",
        alt: "Lady Pierce Chapel architectural elevation and section drawing",
      },
      {
        src: "/images/projects/lady-pierce-chapel-issele-uku/interior-sanctuary.png",
        alt: "Lady Pierce Chapel interior sanctuary and altar view",
      },
    ],
    credits: [
      { role: "Architect", name: "Demas Nwoko & Anyibofu Ugbodaga" },
      { role: "Client", name: "Catholic Diocese of Issele-Uku" },
    ],
  },
  {
    id: "loveworld-community-centre-park",
    slug: "loveworld-community-centre-park",
    title: "Loveworld Community Centre & Park",
    category: "Cultural",
    location: "Abuja, Nigeria",
    yearStart: 2018,
    status: "standard",
    summary:
      "A comprehensive design proposal for a vibrant community recreation and relaxation park, event centre, and food bank in Abuja. Comprises a community food bank, event centre auditorium, swimming pool, lawn tennis and basketball courts, jogging and cycling trails, and green landscaped parkland.",
    heroImage: {
      src: "/images/projects/loveworld-community-centre-park/hero.jpg",
      alt: "Loveworld Community Centre & Park, Abuja — master plan and site layout",
    },
    images: [
      {
        src: "/images/projects/loveworld-community-centre-park/hero.jpg",
        alt: "Master plan and site layout rendering for Loveworld Park",
      },
      {
        src: "/images/projects/loveworld-community-centre-park/event-centre-render.png",
        alt: "Community Event Centre and Pavilion architecture",
      },
      {
        src: "/images/projects/loveworld-community-centre-park/sports-park-render.png",
        alt: "Sporting facilities, tennis courts, and recreational green park",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Practice", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Loveworld Inc." },
    ],
  },
  {
    id: "multi-site-corporate-facilities",
    slug: "multi-site-corporate-facilities",
    title: "Multi-Site Delivery for Regulated & Corporate Clients",
    category: "Corporate",
    location: "Lagos & Abuja, Nigeria",
    yearStart: 2008,
    status: "standard",
    summary:
      "Repeat branch and executive facility delivery for leading banking, telecom, and aviation clients, taken through design, working drawing production, site supervision, and construction. Work includes Access Bank, GTBank, and Diamond Bank branches; an institutional Chairman's executive office in Abuja; and United Airlines' Lagos ticketing office.",
    heroImage: {
      src: "/images/projects/multi-site-corporate-facilities/united-airlines-office.jpg",
      alt: "United Airlines Lagos ticketing office and executive interior",
    },
    images: [
      {
        src: "/images/projects/multi-site-corporate-facilities/hero.jpg",
        alt: "Commercial banking branch facility exterior",
      },
      {
        src: "/images/projects/multi-site-corporate-facilities/united-airlines-office.jpg",
        alt: "United Airlines Lagos ticketing office and conference suite",
      },
      {
        src: "/images/projects/multi-site-corporate-facilities/chairmans-office-abuja.jpg",
        alt: "Chairman's executive office suite, Abuja",
      },
      {
        src: "/images/projects/multi-site-corporate-facilities/commercial-facade.jpg",
        alt: "Commercial building facade and entrance detailing",
      },
      {
        src: "/images/projects/multi-site-corporate-facilities/office-tower.jpg",
        alt: "Multi-storey corporate office building",
      },
      {
        src: "/images/projects/multi-site-corporate-facilities/banking-hall.jpg",
        alt: "Banking hall interior and teller concourse",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Construction & Fit-Out", name: "Ganttworks Limited" },
      { role: "Clients", name: "Access Bank, GTBank, Diamond Bank, United Airlines" },
    ],
  },
  {
    id: "feese-international-primary-school",
    slug: "feese-international-primary-school",
    title: "Feese International Primary School",
    category: "Educational",
    location: "Benue State, Nigeria",
    yearStart: 2015,
    status: "standard",
    summary:
      "An institutional primary education facility designed and delivered with climate-conscious classroom modules, natural cross-ventilation, generous shaded verandas, and a central courtyard for community gathering.",
    heroImage: {
      src: "/images/projects/feese-international-primary-school/hero.jpg",
      alt: "Feese International Primary School, Benue — academic block and courtyard",
    },
    images: [
      {
        src: "/images/projects/feese-international-primary-school/hero.jpg",
        alt: "Academic classroom block with shaded veranda circulation",
      },
      {
        src: "/images/projects/feese-international-primary-school/courtyard-entry.jpg",
        alt: "School entrance approach and courtyard access",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Practice", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Feese International Foundation" },
    ],
  },
  {
    id: "rainoil-service-stations",
    slug: "rainoil-service-stations",
    title: "RainOil Roadside Retail & Service Stations",
    category: "Corporate",
    location: "Ogarra (Delta), Life Camp (Abuja), Coastal Rd (Lagos)",
    yearStart: 2017,
    status: "standard",
    summary:
      "Vehicular circulation planning, forecourt engineering, canopy structure, and street-frontage architecture across multiple Nigerian high-traffic retail sites for Rainoil Limited, including completed stations in Ogarra and Life Camp and proposed schemes along the Lagos coastal corridor.",
    heroImage: {
      src: "/images/projects/rainoil-service-stations/hero.jpg",
      alt: "RainOil filling and retail service station, Ogarra, Delta State",
    },
    images: [
      {
        src: "/images/projects/rainoil-service-stations/hero.jpg",
        alt: "Completed RainOil filling and retail station in Ogarra, Delta State",
      },
      {
        src: "/images/projects/rainoil-service-stations/forecourt-canopy.jpg",
        alt: "Forecourt pump canopy and customer circulation",
      },
      {
        src: "/images/projects/rainoil-service-stations/site-circulation-plan.png",
        alt: "Vehicular circulation planning and site forecourt layout",
      },
      {
        src: "/images/projects/rainoil-service-stations/canopy-elevation.png",
        alt: "Canopy structural elevation and brand signage",
      },
      {
        src: "/images/projects/rainoil-service-stations/coastal-road-elevation.png",
        alt: "Coastal Road Lagos proposed station architectural elevation",
      },
      {
        src: "/images/projects/rainoil-service-stations/life-camp-3d-model.png",
        alt: "Life Camp Abuja station 3D architectural visualization",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Civil & Construction Works", name: "Ganttworks Limited" },
      { role: "Client", name: "Rainoil Limited" },
    ],
  },
  {
    id: "solgreen-agro-processing-factory",
    slug: "solgreen-agro-processing-factory",
    title: "Solgreen Agro-Processing Factory",
    category: "Corporate",
    location: "Nigeria",
    yearStart: 2018,
    status: "standard",
    summary:
      "Industrial and agro-processing facility design demonstrating the practice's versatility beyond civic and residential typologies, extending into production, processing logistics, and light-industrial architecture.",
    heroImage: {
      src: "/images/projects/solgreen-agro-processing-factory/hero.png",
      alt: "Solgreen Agro-Processing Factory — industrial plant 3D visualization",
    },
    images: [
      {
        src: "/images/projects/solgreen-agro-processing-factory/hero.png",
        alt: "Agro-processing facility 3D architectural rendering",
      },
      {
        src: "/images/projects/solgreen-agro-processing-factory/factory-aerial-view.png",
        alt: "Industrial warehouse and site logistics aerial perspective",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Practice", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Solgreen Agro Limited" },
    ],
  },
  {
    id: "private-residence-delta-state",
    slug: "private-residence-delta-state",
    title: "Private Residence, Delta State",
    category: "Residential",
    location: "Delta State, Nigeria",
    yearStart: 2016,
    status: "standard",
    summary:
      "A private family estate in Delta State designed to harmonize with its tropical setting. Features generous shaded verandas, sculpted roof lines, and locally adapted masonry.",
    heroImage: {
      src: "/images/projects/private-residence-delta-state/hero.jpg",
      alt: "Private Residence, Delta State — entrance elevation and manicured grounds",
    },
    images: [
      {
        src: "/images/projects/private-residence-delta-state/hero.jpg",
        alt: "Private Residence, Delta State — main estate elevation",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Construction", name: "Ganttworks Limited" },
      { role: "Client", name: "Private Commission" },
    ],
  },
  {
    id: "new-culture-apartments-ibadan",
    slug: "new-culture-apartments-ibadan",
    title: "New Culture Apartments, Ijokodo",
    category: "Residential",
    location: "Ijokodo, Ibadan, Oyo State, Nigeria",
    yearStart: 2014,
    status: "standard",
    summary:
      "A multi-unit residential development in Ijokodo, Ibadan, translating New Culture's architectural ethos of community living, natural ventilation, and organic materials into high-density contemporary housing.",
    heroImage: {
      src: "/images/projects/new-culture-apartments-ibadan/hero.png",
      alt: "New Culture Apartments, Ijokodo, Ibadan — architectural rendering",
    },
    images: [
      {
        src: "/images/projects/new-culture-apartments-ibadan/hero.png",
        alt: "New Culture Apartments architectural rendering",
      },
    ],
    credits: [
      { role: "Architect", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Private Development Commission" },
    ],
  },
  {
    id: "private-residence-maitama-abuja",
    slug: "private-residence-maitama-abuja",
    title: "Private Residence, Maitama",
    category: "Residential",
    location: "Maitama, Abuja, Nigeria",
    yearStart: 2019,
    status: "standard",
    summary:
      "A bespoke high-end private residence in the Maitama district of Abuja, distinguished by bold contemporary geometry, cantilevered sunshades, expansive full-height glazed openings, and landscaped courtyards.",
    heroImage: {
      src: "/images/projects/private-residence-maitama-abuja/hero.png",
      alt: "Private Residence, Maitama, Abuja — entrance courtyard view",
    },
    images: [
      {
        src: "/images/projects/private-residence-maitama-abuja/hero.png",
        alt: "Private Residence, Maitama — front courtyard architectural rendering",
      },
      {
        src: "/images/projects/private-residence-maitama-abuja/street-elevation.png",
        alt: "Street-front facade elevation and geometric balcony articulation",
      },
    ],
    credits: [
      { role: "Lead Architect", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Practice", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Private Commission" },
    ],
  },
  {
    id: "abuja-affordable-housing-scheme",
    slug: "abuja-affordable-housing-scheme",
    title: "Affordable Housing Scheme, Abuja",
    category: "Residential",
    location: "Abuja, Nigeria",
    yearStart: 2020,
    status: "standard",
    summary:
      "A low-income affordable housing proposal for Abuja and concept development for a 10,000-unit affordable housing scheme. Focused on sustainable construction economics, modular building efficiency, and dignified community living.",
    heroImage: {
      src: "/images/projects/abuja-affordable-housing-scheme/hero.png",
      alt: "Affordable housing concept prototype for Abuja",
    },
    images: [
      {
        src: "/images/projects/abuja-affordable-housing-scheme/hero.png",
        alt: "Affordable housing modular prototype block — 3D rendering",
      },
      {
        src: "/images/projects/abuja-affordable-housing-scheme/master-plan-layout.jpg",
        alt: "10,000-unit affordable housing master plan and zoning layout",
      },
    ],
    credits: [
      { role: "Lead Architect & Urban Planner", name: "Anyibofu Ugbodaga, FNIA" },
      { role: "Design Practice", name: "New Culture Design & Development Centre" },
      { role: "Client", name: "Affordable Housing Initiative" },
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
