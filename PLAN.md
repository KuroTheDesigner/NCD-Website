# New Culture Designs — Website Redesign Plan

Source of truth for the redesign of https://newculturedesigns.com.ng/.
All decisions in this document have been confirmed with the client.
This plan ends at specification. Implementation is a separate engagement.

---

## 1. Project Summary

Rebuild the New Culture Designs & Development Centre website as a premium, editorial, portfolio-first experience. The redesign preserves every piece of content from the existing site, enriches it where it is thin, improves copy, and surfaces the firm's most valuable brand asset — the legacy and philosophy of founder Demas Nwoko — without letting it dominate the present-day practice.

---

## 2. Audit of the Existing Site

### Technical / SEO
- Only the homepage appears indexed in Google (`site:newculturedesigns.com.ng` returns one result).
- `sitemap.xml` is not reachable (connection refused).
- Placeholder data is live in production: "Support Given [0 +]", "Years of Experience [0 +]", "[your email address]", "[your phone number]".
- Routes are unstable — `/services`, `/contact-us`, `/company-overview` all returned ECONNREFUSED or 404 during crawl.
- Brand inconsistency — header says "New Culture Designs", body copy says "New World Culture Designs".
- No structured data, no per-page metadata strategy, no Open Graph images observed.
- `/portfolio` is a thin category grid with no project names, locations, clients, or years.

### Design
- Centered hero over imagery with no asymmetry or editorial character.
- Generic Inter-style system fonts carry none of the firm's cultural weight.
- Placeholder statistics undermine credibility on the first scroll.
- The canon of Demas Nwoko (Dominican Chapel, New Culture Studios, Oba Akenzua Cultural Centre) — the firm's strongest asset — is not surfaced.
- No loading / empty / error states, no custom 404, no visible legal links.

---

## 3. Confirmed Decisions

| # | Topic | Decision |
|---|---|---|
| 1 | Primary audience | Prospective clients commissioning work: private residential (HNW, 35–60), corporate/institutional decision-makers, religious/cultural institutions. Secondary: press, architects, students. |
| 1 | Primary CTA | "Start a project" — structured brief form capturing scope, site, budget band, timeline. Secondary: "Book a studio visit/call." Tertiary: "Press & inquiries." |
| 2 | Demas Nwoko positioning | Central to identity but not overwhelming. Dedicated `/legacy` page tells his story; home carries a single tasteful founder moment; his canon is treated as seminal work in `/work`. The firm reads as a living practice, not a museum. |
| 3 | Brand voice | Editorial, architectural, confident, unhurried, plainspoken. No corporate hype. |
| 4 | Geographic market | Nigeria-first, Africa-fluent, internationally capable. |
| 5 | Services | Consolidated to six lines: Architectural Design, Interior Design, Design-Build, Cultural & Institutional Projects, Facilities Management, Property Development. Each gets its own `/services/[slug]` page. |
| 6 | Legacy page | Separate `/legacy` page (SEO value of "Demas Nwoko" search intent, keeps `/studio` focused on the present firm). |
| 7 | Journal / blog | Skipped at launch. Revisit only if someone is committed to writing it. |
| 8 | FAQ | Dedicated `/faq` page plus service-specific FAQs inline on each service page. |
| 9 | Case study depth | Two modes sharing one template. Flagship (Dominican Chapel, New Culture Studios, Oba Akenzua): long-form — cover, brief, approach, 8–12 images, plans, pull quote, credits. Standard: condensed — cover, paragraph summary, 4–6 images, credits. |
| 10 | Confidential projects | "Private Commission" state: redacted location, anonymized client ("A family residence, Lagos"), substituted or blurred photography. |
| 11 | Work index filters | Category (Cultural, Corporate, Residential, Educational, Interior) and year (decade buckets). No search bar. |
| 12 | Logo | Existing wordmark preserved at launch; cleaned up as a crisp SVG. Identity redesign is out of scope. |
| 13 | Dark mode | Skipped. Single warm light mode. |
| 14 | Photography at launch | Architectural placeholders from public sources clearly marked; swapped as client supplies final assets. `/assets/README.md` tracks status. |
| 15 | Hero video | No video at launch. Still photography with scroll-driven reveals. |
| 16 | Motion policy | **Motion is reserved almost entirely for project presentations** — case studies and the work index use scroll-choreographed mask reveals, sticky image sequences, and editorial pacing to deepen engagement with the imagery. Everywhere else (studio, services, contact, legacy body copy) is static. **Interactive elements get microanimations only** — 200–300ms transitions, subtle hover/press feedback, focus rings. No parallax on marketing pages, no cursor trails, no auto-sliders. Full `prefers-reduced-motion` support. |
| 17 | Framework | Next.js 15 App Router, React Server Components default. Tailwind v4. Framer Motion for UI microanimations. GSAP + ScrollTrigger for project-presentation scroll-telling (isolated in their own client components). Phosphor Icons, stroke weight 1.5. shadcn/ui for form primitives only, fully restyled. |
| 18 | Hosting | Vercel. |
| 19 | Contact form | Serverless route emails a single studio inbox. No CRM. Cloudflare Turnstile for spam. |
| 20 | Analytics | Vercel Analytics + Vercel Speed Insights. No Google Analytics. No cookie banner. |
| 21 | Domain | Keep `newculturedesigns.com.ng`. HTTPS, canonical, `www` → apex redirects. |
| 22 | SEO keywords | "architecture firm Nigeria", "Nigerian architectural design", "Demas Nwoko architect", "cultural architecture Nigeria", "Ibadan architecture firm", "design-build Nigeria", plus project long-tail. Finalized keyword map in `DESIGN.md` at build time. |
| 23 | Structured data | `Organization` + `ProfessionalService` site-wide, `Person` on Demas Nwoko's legacy page, `CreativeWork` on each case study, `FAQPage`, `BreadcrumbList`. |
| 24 | Cookie consent | Not required (Vercel Analytics is cookieless). |
| 25 | Legal pages | `/privacy` and `/terms` placeholder pages with "last updated" stamps at launch. Client to have a Nigerian lawyer finalize copy. |
| 26 | Accessibility | WCAG 2.2 AA. Keyboard nav, focus rings, skip-to-content, semantic landmarks, alt text discipline, reduced-motion. |
| 27 | Browser support | Latest two versions of Chrome, Safari, Firefox, Edge. iOS 16+, Android Chrome. No legacy. |
| — | Fonts | Free alternatives only. Display: `Fraunces` (editorial high-contrast serif). Body: `Cabinet Grotesk` or `Satoshi` trial (confirm license) — free-license fallback `PP Neue Montreal` trial or `Archivo`. Mono: `JetBrains Mono`. No Inter. |
| — | Language | English only at launch. |
| — | CMS | Static content at launch. |
| — | Imagery rights | Client owns all rights to images of Demas Nwoko and his works. Further project imagery supplied later alongside project metadata. |

---

## 4. Content Inventory

### Preserved verbatim (polished for tone)

- Tagline: **Transforming Spaces, Inspiring Lives**.
- Positioning: indigenous firm specializing in design, design-build, facilities management, and property development.
- Mission statement: *To pioneer innovative and sustainable design and construction solutions that harmonize modernity with cultural heritage, while delivering exceptional value to our clients through creativity, affordability, and excellence in every project.*
- Vision: to stay ahead by continuously innovating in the design, construction, and management of building facilities while ensuring projects are unique, affordable, durable, and deliver value over their anticipated lifespan.
- Six value pillars: Innovative Design Solutions, Sustainable Practices, Tailored Solutions, Expert Team, Comprehensive Services, Commitment to Excellence.
- Leadership team:
  - **Demas Nwoko** — Founder / Principal.
  - **Arc. (Mrs) Anyibofu Ugbodaga, FNIA** — Managing Director / Co-Founder.
  - **Ashim Nwoko** — Project Executive Director.
  - **Francis Ugbodaga** — IT Executive Director.
  - **Usiobaifo Osayemwenre** — Associate Partner.
- Six FAQ topics: services offered, project initiation, design process stages, sustainable solutions, international clients, contact methods.
- Footer legal link structure: Terms & Conditions, Legal, Business, Partners.

### Enriched from public record (flagged as editorial until client confirms)

- **Dominican Chapel, Ibadan (1970–1975)** — laterite, timber, landmark bell tower evoking Christianity's crown of thorns and Hausa vernacular pinnacles.
- **New Culture Studios, Ibadan (1967 – ongoing)** — private residence extended into a public art hub; retractable amphitheatre roof planned.
- **Oba Akenzua Cultural Centre, Benin City (1972 – )** — public cultural building modeled after New Culture Studios.
- Philosophy: design authentic to cultural and environmental context, integration of art and functionality, local materials (laterite, timber, stone), natural ventilation, cultural symbolism. Featured in *1000 Buildings You Must See Before You Die*.
- Recent initiative: New Culture School of Design, Lagos.

### To be supplied by client

- Verified contact info (email, phone, physical address, WhatsApp).
- Social handles (Instagram, LinkedIn, others).
- Full project list with real dates, locations, and client names where permissible.
- Verified firm statistics (years in practice, projects completed, team size).
- Any press features, awards, or publications.
- Final project imagery beyond the Demas Nwoko canon.

---

## 5. Information Architecture

```
/                         Home
/studio                   About the firm — mission, vision, values, team, process
/services                 Services overview
/services/[slug]          Six service deep-dives
/work                     Filterable project index
/work/[slug]              Individual case studies (flagship or standard mode)
/legacy                   Demas Nwoko — philosophy, canon, timeline
/contact                  Form + office info + map
/faq                      FAQ (global)
/privacy                  Placeholder legal
/terms                    Placeholder legal
/404                      Custom not-found page
```

Navigation order (primary): **Work · Studio · Services · Legacy · Contact**.
Footer: quick links + legal + social + a kinetic marquee of project names as a signature touch.

---

## 6. Creative Direction

### Design dials
- **DESIGN_VARIANCE: 7** — offset editorial grids, asymmetric spreads, occasional full-bleed moments.
- **MOTION_INTENSITY: 7 on project presentations, 2 everywhere else** — see motion policy below.
- **VISUAL_DENSITY: 3** — gallery-airy, large negative space, photography breathes.

### Palette (earthen, archival, distinctly Nigerian)

| Token | Hex | Role |
|---|---|---|
| Bone | `#F2ECE0` | Primary background (warm ivory). Never `#FFFFFF`. |
| Ink | `#1B1714` | Display + body text. Never `#000000`. |
| Laterite | `#B4502C` | Single accent — drawn from the red earth Nwoko built with. |
| Stone | `#8A8275` | Secondary neutral for captions, metadata. |
| Ash | `#D9D2C4` | Surface separation, card fills when elevation is required. |

Rules:
- Maximum one accent (Laterite).
- No gradients on text or backgrounds.
- All shadows tinted with Ink warmth, never pure black at opacity.
- Warm neutral family only — no cool grays mixed in.

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | **Fraunces** | Hero headlines, page titles, project names. `tracking-tight`, `leading-none`, `text-wrap: balance`. |
| Body | **Cabinet Grotesk** (or `Satoshi` pending license) | Paragraphs, UI copy. `max-w-[65ch]`, generous leading, weights 400/500/600. |
| Archival / labels | **JetBrains Mono** | Project year, location, coordinates, credits, numeric data. Small caps, tracked out. |

No Inter. No all-caps everywhere — lowercase italics and small caps preferred for subheads.

### Layout signatures

- Asymmetric hero: display type left-aligned on a 60% column, signature image anchored bottom-right.
- `/work` index as a drag-to-pan editorial wall on desktop, collapsing to a vertical list on mobile.
- Case studies as long-form architectural spreads: oversized imagery, pull quotes, annotated plans, credits strip.
- `/legacy` as a vertical timeline with pinned section headers.
- Services pages use a 2-column zig-zag, never 3 equal cards.
- `min-h-[100dvh]` on full-height sections, never `h-screen`.
- Max container width 1440px on wide viewports.

### Motion policy (confirmed with client)

**Motion serves the work. Everything else is still.**

Applied only on project presentations (`/work`, `/work/[slug]`, project tiles on `/`):
- Scroll-linked mask reveals on project hero images.
- Sticky image columns that swap as text scrolls past (architectural-monograph feel).
- Kinetic marquee of project names as section dividers.
- Drag-to-pan work index with inertia.
- Scroll progress indicator on long case studies.

Applied site-wide as microanimations on interactive elements only:
- 200–300ms transitions on hover, focus, press.
- Subtle tactile feedback on press (`-translate-y-[1px]` or `scale-[0.98]`).
- Spring physics on Framer Motion interactions (`stiffness: 100, damping: 20`).
- Focus rings on all keyboard-reachable controls.

Explicitly forbidden:
- Parallax on marketing pages (hero, studio, services, legacy body copy, contact).
- Auto-playing carousels or hero sliders.
- Custom cursors or cursor trails.
- Perpetual background animations on non-project pages.
- Neon glows, outer shadows, animated gradient text.

All scroll-linked motion must be opt-out via `prefers-reduced-motion`. GSAP and Framer Motion are never mixed in the same component tree; GSAP is isolated to case-study scroll-telling client components with strict `useEffect` cleanup.

---

## 7. Page-by-Page Concept

### Home (`/`)
1. Editorial hero — tagline left, signature image bottom-right, static.
2. One-line positioning statement.
3. Featured flagship project (Dominican Chapel) — first taste of the project-presentation motion system: scroll-linked mask reveal.
4. Services index — 2-column zig-zag, static with hover microanimations.
5. Founder moment — single paragraph, link to `/legacy`.
6. Selected works grid — three to six tiles, category and year metadata, motion on image hover only.
7. Start-a-project CTA strip.

### Studio (`/studio`)
Mission → vision → six values as editorial text spreads → practice areas → team portraits with titles and short bios → process (brief → concept → development → documentation → delivery).

### Services (`/services` + `/services/[slug]`)
Overview lists six disciplines. Each deep-dive includes: scope, deliverables, process, 2–3 relevant project links, service-specific FAQ, CTA.

### Work (`/work`)
Filter chips (category + decade). Drag-to-pan editorial wall on desktop; vertical list on mobile. Each tile shows project title, location, year, category, and a single silent image.

### Work detail (`/work/[slug]`)
Two templates sharing one layout:
- **Flagship**: cover, brief, approach, 8–12 full-bleed images, floor plans, pull quote, credits strip, next-project link.
- **Standard**: cover, one-paragraph summary, 4–6 images, credits strip, next-project link.

This is where the full motion choreography lives.

### Legacy (`/legacy`)
Opening essay on Demas Nwoko's philosophy. Timeline 1967 → present with pinned section headers. Key projects linked to their case studies. Press quotes (Al Jazeera, The Architectural Review, Wallpaper, The Conversation) with outbound links.

### Contact (`/contact`)
Inline brief form (not a modal) with fields: name, email, phone, project type, site/location, budget band, timeline, message. Office address, map embed, direct email, socials.

### FAQ (`/faq`)
Side-by-side Q/A list grouped by topic (services, process, international, sustainability, engagement, fees). Not an accordion wall.

### 404
Branded "this page is unbuilt" message, back-to-work CTA, photo of one of the flagship projects.

---

## 8. Tech Stack

- **Framework:** Next.js 15 (App Router, RSC default).
- **Styling:** Tailwind CSS v4 with design tokens sourced from the palette/type system above.
- **UI motion:** Framer Motion for microanimations and layout transitions.
- **Scroll motion:** GSAP + ScrollTrigger for project-presentation scroll-telling, isolated in leaf `'use client'` components with strict cleanup. Never mixed with Framer Motion in the same tree.
- **Components:** shadcn/ui for form primitives only, fully restyled against the design tokens.
- **Icons:** Phosphor Icons, `strokeWidth: 1.5`.
- **Images:** `next/image` with AVIF/WebP, responsive sizes, lazy loading below the fold.
- **Forms:** Server action + serverless route, Cloudflare Turnstile.
- **Hosting:** Vercel.
- **Analytics:** Vercel Analytics + Speed Insights.
- **Domain:** `newculturedesigns.com.ng`, HTTPS-only, `www` → apex redirect.

---

## 9. SEO & Schema

- Per-page `metadata` exports (title, description, canonical, OG image).
- Programmatic OG image generation via Next.js OG for project pages.
- `robots.ts` + `sitemap.ts` generated from the content graph.
- Structured data: `Organization`, `ProfessionalService`, `Person` (Demas Nwoko on `/legacy`), `CreativeWork` (each case study), `FAQPage`, `BreadcrumbList`.
- Priority keyword targets: "architecture firm Nigeria", "Nigerian architectural design", "Demas Nwoko architect", "cultural architecture Nigeria", "Ibadan architecture firm", "design-build Nigeria", plus project long-tail ("Dominican Chapel Ibadan architect").
- Keyword-to-URL map finalized in `DESIGN.md` at implementation start.

---

## 10. Accessibility

- WCAG 2.2 AA across the site.
- Skip-to-content link.
- Semantic landmarks (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`).
- Keyboard navigation and visible focus rings.
- All images with descriptive alt text; decorative images marked `alt=""` intentionally.
- Color contrast verified against WCAG AA for Bone/Ink/Laterite combinations.
- `prefers-reduced-motion` honored on all scroll-linked motion.
- Forms with label-above-input, helper and error text, inline validation, no `alert()`.

---

## 11. Legal

- `/privacy` and `/terms` placeholder pages with "Last updated" stamps at launch.
- Client to engage a Nigerian lawyer to finalize legal copy post-launch.
- No cookie banner required (Vercel Analytics is cookieless).
- Contact-form data handling clearly described in `/privacy`.

---

## 12. Execution Phases (post-approval)

1. **Foundation.** Next.js scaffold, Tailwind tokens, typography, base layouts, nav, footer, accessibility primitives.
2. **Creative direction.** Generate `DESIGN.md` in project root per CLAUDE.md methodology (7-section format).
3. **Pages.** Home → Work index → Work detail template → Studio → Services → Legacy → Contact → FAQ → 404.
4. **SEO & schema.** Metadata, sitemap, robots, structured data, OG images, per-page titles and descriptions.
5. **Motion build.** GSAP case-study choreography on project pages. Framer Motion microanimations site-wide.
6. **Audit loop.** Run `redesign-existing-projects` against implemented code, iterate up to five times, fix findings.
7. **Handoff.** README with content-editing instructions and asset-swap workflow, list of placeholder assets awaiting client supply.

---

## 13. Open Items (client to supply before or during build)

- Verified contact details (email, phone, address, WhatsApp, socials).
- Full project list with dates, locations, and client permissions.
- Verified firm statistics (years in practice, projects completed, team size).
- Any press features, awards, publications.
- Final project photography for projects beyond the Demas Nwoko canon.
- Team member short bios (2–3 sentences each).
- Nigerian legal review of `/privacy` and `/terms` after launch.

---

## 14. Sources Consulted During Planning

- Existing site: https://newculturedesigns.com.ng/
- Demas Nwoko — Wikipedia: https://en.wikipedia.org/wiki/Demas_Nwoko
- The pioneering architecture of Demas Nwoko — Wallpaper: https://www.wallpaper.com/architecture/architecture-artist-designer-demas-nwoko-nigeria
- Revisit: New Culture Studios — The Architectural Review: https://www.architectural-review.com/essays/revisit/revisit-new-culture-studios-in-ibadan-nigeria-by-demas-nwoko
- A new master's house — Al Jazeera: https://www.aljazeera.com/features/2020/8/10/a-new-masters-house-the-architect-decolonising-nigerian-design
- Nigerian architect Demas Nwoko — The Conversation: https://theconversation.com/nigerian-architect-demas-nwoko-on-his-award-winning-work-whatever-you-build-it-should-suit-your-culture-206224
