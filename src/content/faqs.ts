export type FAQ = {
  question: string;
  answer: string;
  category: "general" | "process" | "cost" | "timeline";
};

export const faqs: FAQ[] = [
  {
    category: "general",
    question: "Where are you based and where do you work?",
    answer:
      "The studio is based in Ibadan, Oyo State, Nigeria. We work across Nigeria — Lagos, Abuja, Port Harcourt, Benin City, and beyond — and take commissions from clients working abroad where the programme is a good fit. We travel to site as often as the project demands.",
  },
  {
    category: "general",
    question: "What kinds of buildings do you design?",
    answer:
      "Cultural and institutional buildings, private residences, corporate headquarters, educational facilities, and interiors. The common thread is that every building carries a cultural argument — we do not draw generically.",
  },
  {
    category: "general",
    question: "Are you affiliated with the Nigerian Institute of Architects?",
    answer:
      "Yes. The firm's managing director, Arc. (Mrs) Anyibofu Ugbodaga, is a Fellow of the Nigerian Institute of Architects (FNIA). The practice operates fully within the statutory frameworks governing the profession in Nigeria.",
  },
  {
    category: "process",
    question: "How does an engagement begin?",
    answer:
      "With a brief conversation — by phone, in the studio, or on site. We want to understand the site, the programme, and your ambitions before committing either of us to a scope. At the end of that conversation, if the fit is right, we issue a fee proposal.",
  },
  {
    category: "process",
    question: "Can I visit the studio?",
    answer:
      "You can. The studio is at New Culture Studios in Ibadan — a compound that has been the working base of the practice since 1967. Visits are by appointment. Use the contact form or email directly.",
  },
  {
    category: "process",
    question: "Do you work with other architects' drawings?",
    answer:
      "We can take a project mid-stream. We will review the existing set honestly, tell you what is sound and what needs to be redrawn, and scope accordingly. We do not pretend a drawing is ours when it is not.",
  },
  {
    category: "process",
    question: "How do you handle projects in remote or difficult sites?",
    answer:
      "We have built on hillside plots, in tight urban conditions, and on sites a long drive from any town. We treat difficult sites as a design opportunity, not a liability. Our approach is to spend more time on site early — before the drawings crystallise — so the design is calibrated to the real conditions.",
  },
  {
    category: "cost",
    question: "How are fees structured?",
    answer:
      "Fees are stage-based and agreed against the construction budget, the scope, and the level of consultant coordination required. We issue a fixed stage-fee proposal so clients never encounter an open-ended bill. For design-build commissions, a lump-sum construction contract is agreed once the design is developed enough to be costed reliably.",
  },
  {
    category: "cost",
    question: "Is there a minimum project size?",
    answer:
      "We do not publish a minimum, but we are selective. The practice works best on commissions where the design itself matters — where the client is investing in something that will carry the firm's name for decades. Very small or programme-only commissions are not usually the right fit.",
  },
  {
    category: "timeline",
    question: "How long does a project take from brief to handover?",
    answer:
      "It depends on scale and complexity. A private residence typically runs twelve to eighteen months from brief through design and construction. A cultural or institutional building, or a phased scheme, may run several years. We set a realistic programme at the brief stage and report against it monthly.",
  },
  {
    category: "timeline",
    question: "Can you work to a fixed completion date?",
    answer:
      "Yes, within the design-build model where we control both design and construction. Under a conventional architect-plus-contractor arrangement, the completion date is shared between parties; we manage our side of it and carry as much programme risk as the contract allows.",
  },
];

export const faqCategories = [
  { id: "general", label: "General" },
  { id: "process", label: "Process" },
  { id: "cost", label: "Fees & cost" },
  { id: "timeline", label: "Timelines" },
] as const;
