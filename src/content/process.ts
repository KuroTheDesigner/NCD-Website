/**
 * The five-stage working process the studio moves every commission through.
 */

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    id: "brief",
    title: "Brief",
    description:
      "We sit with the client, the site, and the programme. Budget band, timeline, and working constraints are written down before a single line is drawn.",
  },
  {
    id: "concept",
    title: "Concept",
    description:
      "Sketch studies, massing options, and a written design intent. The concept stage ends with one scheme the client has signed off on — and a short list of what it will cost to deliver.",
  },
  {
    id: "development",
    title: "Development",
    description:
      "The scheme is pulled into full architectural, structural, and services coordination. Materials are specified, finishes are sampled, and the drawing set moves from concept to tender-ready.",
  },
  {
    id: "documentation",
    title: "Documentation",
    description:
      "Construction drawings, schedules, and specifications. The document set is the contract — every trade on site should be able to build from it without guessing.",
  },
  {
    id: "delivery",
    title: "Delivery",
    description:
      "On-site administration through to handover. Regular site visits, instructions logged, snags closed out, as-built drawings issued. The building is handed over in working order.",
  },
];
