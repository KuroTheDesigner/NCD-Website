/**
 * The six value pillars of the practice.
 * Copy is polished from PLAN.md for tone — editorial, plainspoken, unhurried.
 */

export type Value = {
  id: string;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    id: "innovative-design",
    title: "Innovative Design Solutions",
    description:
      "Each project starts from its place, its climate, and its people — not a catalogue. We treat originality as discipline: solve the real problem, then draw.",
  },
  {
    id: "sustainable-practices",
    title: "Sustainable Practices",
    description:
      "Laterite, timber, stone, air, light. We build with materials the site can carry and systems the building can hold open over decades of use.",
  },
  {
    id: "tailored-solutions",
    title: "Tailored Solutions",
    description:
      "No two briefs are equal. We design the process to the commission, whether that is a family residence, a civic hall, or a forty-year institutional campus.",
  },
  {
    id: "expert-team",
    title: "Expert Team",
    description:
      "Architects, interior designers, structural consultants, and site craftspeople, assembled around the specific demands of the work. Seniority stays close to the drawing.",
  },
  {
    id: "comprehensive-services",
    title: "Comprehensive Services",
    description:
      "Design, design-build, facilities management, and property development, held inside one practice. Clients move through a single line of responsibility from brief to handover.",
  },
  {
    id: "commitment-to-excellence",
    title: "Commitment to Excellence",
    description:
      "Every drawing is checked. Every spec is justified. Every site visit is logged. The quality of the finished work is the only measure that survives.",
  },
];
