/**
 * The six disciplines of the practice.
 * Each has a long-form service page at /services/[slug].
 * `relatedProjectSlugs` reference entries in src/content/projects.ts.
 */

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Short line shown on the /services index under the service number. */
  hook: string;
  /** 2-paragraph description on the detail page. */
  summary: [string, string];
  scope: string[];
  deliverables: string[];
  whoItsFor: string[];
  faqs: ServiceFAQ[];
  relatedProjectSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural Design",
    hook: "Concept to construction drawings for buildings we put our name on.",
    summary: [
      "Architectural design is the through-line of the practice. We take a site, a programme, and a client's long-term ambition and draw a building that answers all three — then carry the drawing through every consultant, every revision, and every trade.",
      "Work spans cultural and institutional buildings, private residences, mixed-use developments, and campus planning. We draw in our own voice, but every line is accountable to the climate, the materials available on the ground, and the people who will use the building once we are gone.",
    ],
    scope: [
      "Site analysis and feasibility studies",
      "Massing, spatial planning, and design concept",
      "Material and envelope studies",
      "Coordination with structural, MEP, and landscape consultants",
      "Planning submissions and statutory liaison",
      "Tender documentation and contractor selection support",
      "Site-stage architectural administration",
    ],
    deliverables: [
      "Concept report with written design intent",
      "General-arrangement drawings at all scales",
      "Coordinated full working drawing set",
      "Material and finishes schedule",
      "Planning and regulatory submission packs",
      "Tender and construction-issue drawing register",
      "As-built drawing set on project completion",
    ],
    whoItsFor: [
      "Private clients commissioning a residence or second home",
      "Institutions planning a new building or a long-term estate",
      "Developers needing a designed scheme, not a standard floor plate",
      "Public bodies working on cultural or civic programmes",
    ],
    faqs: [
      {
        question: "How do you price an architectural commission?",
        answer:
          "Fees are agreed against the construction budget, the scope of consultant coordination required, and the number of stages the studio is carrying. We issue a fixed-stage fee proposal at the end of the brief conversation so clients never meet an open-ended bill.",
      },
      {
        question: "Do you work outside Nigeria?",
        answer:
          "Yes. The studio is Nigeria-first and Africa-fluent, and we have taken commissions with clients working abroad. We travel to site as often as the programme requires and coordinate with local consultants where the jurisdiction demands it.",
      },
      {
        question: "Can you take a project that is already half-drawn?",
        answer:
          "We can. We will review the existing set honestly, tell you what we can carry forward and what we cannot, and give you a clear scope proposal before you commit. We do not pretend a drawing is ours when it is not.",
      },
    ],
    relatedProjectSlugs: ["dominican-chapel-ibadan", "university-of-ibadan-chapel"],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    hook: "Rooms that outlast trend — material-first, commissioned joinery, no froth.",
    summary: [
      "Interior work at the studio is architectural in temperament. We treat a room as a volume first, a material palette second, and a set of objects last. The result is quieter than a stylist-led interior and tuned to age well.",
      "Commissions range from a single suite inside a private residence to full office, retail, and cultural fit-outs. We specify joinery, ironmongery, lighting, and finishes from a working relationship with trusted local makers.",
    ],
    scope: [
      "Spatial re-planning and circulation studies",
      "Material, colour, and finishes palette",
      "Bespoke joinery and built-in furniture design",
      "Lighting strategy and fixture specification",
      "Art integration and custom commissions",
      "Procurement support and sample management",
      "On-site supervision of finishing trades",
    ],
    deliverables: [
      "Interior concept report",
      "Dimensioned plans, elevations, and reflected ceiling plans",
      "Joinery drawings and shop-drawing review set",
      "Finishes and lighting schedules",
      "Sample boards and physical finish sets",
      "Furniture, fitting, and equipment schedule",
    ],
    whoItsFor: [
      "Families refurbishing a principal residence",
      "Corporate clients fitting out a new headquarters",
      "Cultural institutions staging galleries or public interiors",
      "Hospitality operators building a signature property",
    ],
    faqs: [
      {
        question: "Can you work with an architect we have already engaged?",
        answer:
          "Often, yes. We are comfortable joining a project at the interior stage and coordinating with the lead architect on envelope, services, and structural constraints. The working relationship is agreed in writing before we start.",
      },
      {
        question: "Do you source furniture for the project?",
        answer:
          "We curate and specify. On most projects we mix bespoke pieces drawn in-house with a short list of trade-only items, and we manage procurement through the client's preferred route. We do not mark up furniture sales.",
      },
    ],
    relatedProjectSlugs: ["port-harcourt-interior-suite", "ikoyi-family-residence"],
  },
  {
    slug: "design-build",
    title: "Design-Build",
    hook: "One team, one contract, one accountable line from first sketch to handover.",
    summary: [
      "Design-build folds design and construction into a single engagement. The client meets one team, signs one contract, and carries one line of accountability from brief to handover. It is the delivery model we use when speed, budget certainty, and single-point responsibility matter most.",
      "We pair our in-house design team with a trusted network of contractors and site supervisors. Every trade is pre-qualified, every cost is tracked to the drawing set, and the same studio seniors who drew the building are on site while it is being built.",
    ],
    scope: [
      "Integrated design and construction planning",
      "Pre-construction costing and value engineering",
      "Consultant and sub-contractor assembly",
      "Procurement and site logistics",
      "Construction supervision and quality control",
      "Programme management against a fixed completion date",
      "Commissioning and handover",
    ],
    deliverables: [
      "Single design-build contract with a fixed construction sum",
      "Pre-construction budget and programme",
      "Coordinated construction drawings and specifications",
      "Monthly cost, programme, and quality reports",
      "Site snagging and completion register",
      "Operations and maintenance handover pack",
    ],
    whoItsFor: [
      "Clients who need a single point of responsibility",
      "Developers working to a funding or delivery deadline",
      "Institutions with in-house project teams but no design capacity",
      "Private clients with a defined budget and a firm completion date",
    ],
    faqs: [
      {
        question: "What is the real advantage over a traditional architect-plus-contractor route?",
        answer:
          "Fewer seams. Design and construction stay inside one conversation, so a cost or site issue is resolved without the back-and-forth that a split contract generates. The client is told the answer once.",
      },
      {
        question: "Do you work on a fixed price?",
        answer:
          "Yes, once the design is developed enough to be costed reliably. We will not fix a sum against a sketch — it does neither party any favours. The fixed construction sum is agreed at the end of the development stage.",
      },
    ],
    relatedProjectSlugs: ["lagos-corporate-headquarters", "abuja-diplomatic-residence"],
  },
  {
    slug: "cultural-institutional",
    title: "Cultural & Institutional Projects",
    hook: "Buildings that have to outlive the commission — chapels, museums, civic halls.",
    summary: [
      "Cultural and institutional work is the part of the practice that traces directly to the founder. From the Dominican Chapel in Ibadan to the Oba Akenzua Cultural Centre in Benin City, the studio has a long record of buildings meant to last beyond any one generation.",
      "The brief here is almost never only about square metres. We spend the early stages with stakeholders, community groups, and founding documents, so the building argues for itself decades after handover — structurally, culturally, and in daily use.",
    ],
    scope: [
      "Stakeholder consultation and community briefing",
      "Cultural and symbolic programme studies",
      "Heritage and site-context analysis",
      "Architectural concept and full design development",
      "Acoustic, liturgical, and performance consultant coordination",
      "Phased construction and fundraising-aligned documentation",
      "Long-term estate and extension planning",
    ],
    deliverables: [
      "Design intent report with cultural programme statement",
      "Concept presentation for board and founder approval",
      "Full architectural and coordinated consultant drawing set",
      "Phased construction and cost plan",
      "Operations and conservation strategy",
    ],
    whoItsFor: [
      "Religious orders and congregations commissioning a place of worship",
      "Museums, libraries, and cultural trusts",
      "Universities and educational institutions",
      "Government bodies delivering civic buildings",
    ],
    faqs: [
      {
        question: "Can you work within a conservation or heritage-listed site?",
        answer:
          "Yes. The studio has worked inside existing heritage fabric — restorations, additions, and sympathetic new-build on protected sites. We coordinate with the relevant heritage authority from the first site visit.",
      },
      {
        question: "Do you take on projects that will be phased over many years?",
        answer:
          "We do. New Culture Studios has been under continuous development since 1967. We draw master plans that can be built in honest, financially realistic phases without compromising the end state.",
      },
    ],
    relatedProjectSlugs: ["oba-akenzua-cultural-centre", "new-culture-studios-ibadan"],
  },
  {
    slug: "facilities-management",
    title: "Facilities Management",
    hook: "Keeping the building you commissioned operating the way it was drawn.",
    summary: [
      "A building is only as good as the way it is run. Our facilities management practice takes on long-term care of the buildings we have designed and built — and, where the fit is right, buildings by other hands.",
      "Planned maintenance schedules, reactive response, vendor coordination, and periodic condition surveys are held inside one contract. The goal is stewardship, not maximisation.",
    ],
    scope: [
      "Condition survey and asset register",
      "Planned preventative maintenance schedule",
      "Reactive maintenance and vendor dispatch",
      "Building services monitoring and reporting",
      "Vendor procurement and contract management",
      "Annual budget and capital-replacement planning",
    ],
    deliverables: [
      "Baseline condition report and asset register",
      "Annual maintenance calendar",
      "Monthly operations report",
      "Incident log and reactive response record",
      "Year-end budget reconciliation and forecast",
    ],
    whoItsFor: [
      "Private clients with a principal residence and secondary properties",
      "Cultural and educational estates",
      "Corporate owners of headquarters buildings",
      "Diplomatic and institutional premises",
    ],
    faqs: [
      {
        question: "Do you only manage buildings you designed?",
        answer:
          "No. We will take on buildings by other architects where the brief is a good match and where we can carry out a full condition survey at the start of the engagement. The survey is non-negotiable.",
      },
      {
        question: "How do you handle emergencies?",
        answer:
          "A single studio number reaches a duty manager at all hours, with a pre-agreed list of trusted trades for rapid dispatch. Response times are specified in the contract and reported monthly.",
      },
    ],
    relatedProjectSlugs: ["lagos-corporate-headquarters", "abuja-diplomatic-residence"],
  },
  {
    slug: "property-development",
    title: "Property Development",
    hook: "End-to-end development of sites the studio acquires, designs, and delivers.",
    summary: [
      "The development arm of the practice takes sites from acquisition through design, delivery, and either sale or long-term hold. Every scheme is designed and built by the same studio that underwrote it — which keeps quality and business sense on the same side of the table.",
      "We develop cautiously. Our yardstick for a good site is not the pro forma alone but whether the finished building will stand up, visually and structurally, twenty years later.",
    ],
    scope: [
      "Site sourcing and due diligence",
      "Feasibility and financial modelling",
      "Design and planning delivery",
      "Procurement and construction management",
      "Sales, lease, or long-term asset management",
      "Exit and portfolio review",
    ],
    deliverables: [
      "Site appraisal and feasibility report",
      "Investment memorandum for equity partners",
      "Full design and construction delivery",
      "Handover, marketing, or operational set-up pack",
      "Annual asset performance report",
    ],
    whoItsFor: [
      "Equity partners seeking co-investment on designed schemes",
      "Landowners looking to develop rather than sell",
      "Institutions releasing under-used estate",
      "Long-term investors willing to hold for quality",
    ],
    faqs: [
      {
        question: "Do you co-invest or act purely as developer?",
        answer:
          "Both models are on the table. On selected sites we take an equity position alongside partners; on others we act as development manager for a third-party owner. The structure is agreed up front.",
      },
      {
        question: "What scale of site do you work on?",
        answer:
          "From single plots of around half an acre to multi-phase schemes of several hectares. Larger sites are taken in phases rather than in a single push.",
      },
    ],
    relatedProjectSlugs: ["ibadan-artists-retreat", "lagos-corporate-headquarters"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceIndex(slug: string): number {
  return services.findIndex((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}
