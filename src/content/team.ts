/**
 * Studio leadership.
 * Short bios are plausible, grounded in each member's stated title,
 * written in the firm's editorial voice. Client will replace with final copy.
 * Portraits use picsum placeholders keyed to the firstname-lastname seed.
 */

export type TeamMember = {
  id: string;
  name: string;
  honorifics?: string;
  title: string;
  bio: string;
  portrait: {
    src: string;
    alt: string;
    /** Tailwind aspect-ratio class for the asymmetric portrait grid. */
    aspect: "aspect-[3/4]" | "aspect-[4/5]" | "aspect-[5/7]" | "aspect-[2/3]";
  };
};

function portrait(name: string): { src: string; alt: string } {
  const seed = name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
  return {
    src: `https://picsum.photos/seed/${seed}/800/1000`,
    alt: `Studio portrait of ${name}`,
  };
}

export const team: TeamMember[] = [
  {
    id: "demas-nwoko",
    name: "Demas Nwoko",
    title: "Founder · Principal",
    bio: "Artist, architect, and founder of the practice. His buildings — the Dominican Chapel in Ibadan, New Culture Studios, the Oba Akenzua Cultural Centre — set the terms the studio still works by: cultural fluency, local material, and a long working relationship with the site.",
    portrait: { ...portrait("demas-nwoko"), aspect: "aspect-[3/4]" },
  },
  {
    id: "anyibofu-ugbodaga",
    name: "Anyibofu Ugbodaga",
    honorifics: "Arc. (Mrs), FNIA",
    title: "Managing Director · Co-Founder",
    bio: "A Fellow of the Nigerian Institute of Architects, Arc. Ugbodaga leads the firm day to day, from brief to handover. Her practice sits between the drawing board and the boardroom — every commission carries her signature on both the design and the delivery.",
    portrait: { ...portrait("anyibofu-ugbodaga"), aspect: "aspect-[4/5]" },
  },
  {
    id: "ashim-nwoko",
    name: "Ashim Nwoko",
    title: "Project Executive Director",
    bio: "Ashim directs projects across the studio, holding design intent through the detail set, the procurement file, and the site. Clients work with him from the first concept meeting until the building is in use.",
    portrait: { ...portrait("ashim-nwoko"), aspect: "aspect-[2/3]" },
  },
  {
    id: "francis-ugbodaga",
    name: "Francis Ugbodaga",
    title: "IT Executive Director",
    bio: "Francis runs the studio's digital infrastructure: BIM, project archives, document control, and the systems that keep drawings coordinated across offices and consultants. His work is invisible when it is working well.",
    portrait: { ...portrait("francis-ugbodaga"), aspect: "aspect-[4/5]" },
  },
  {
    id: "usiobaifo-osayemwenre",
    name: "Usiobaifo Osayemwenre",
    title: "Associate Partner",
    bio: "An associate partner with over a decade in the practice, Usiobaifo leads interior and institutional work. She is the studio's closest reader of materials, finishes, and the way a space performs once it is occupied.",
    portrait: { ...portrait("usiobaifo-osayemwenre"), aspect: "aspect-[5/7]" },
  },
];
