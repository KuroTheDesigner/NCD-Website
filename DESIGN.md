# New Culture Designs — DESIGN.md

Binding design specification for the New Culture Designs website. Every rule here governs the implementation. Deviations require written justification.

- **DESIGN_VARIANCE:** 7 (offset editorial grids, asymmetric spreads, occasional full-bleed moments)
- **MOTION_INTENSITY:** 7 on project presentations, 2 everywhere else
- **VISUAL_DENSITY:** 3 (gallery-airy, generous negative space)

---

## 1. Visual Theme & Atmosphere

Earthen, archival, unhurried — a distinctly Nigerian architectural editorial that reads like a monograph rather than a marketing site. The surface is warm bone and laterite, the rhythm is slow, and photography is given room to breathe before copy intrudes. Motion is absent almost everywhere; when it appears, it serves the work itself — scroll-choreographed project spreads that deepen engagement with the imagery, never decoration.

---

## 2. Color Palette & Roles

All tokens mirror `src/app/globals.css`. No pure `#000000` or `#FFFFFF` anywhere in the system. Warm neutral family only — no cool grays, no mixed temperature.

### Bone — Primary background canvas
| Token | Hex | Role |
|---|---|---|
| `--color-bone-50` | `#FBF8F2` | Highest canvas (modal overlays, top-of-section washes) |
| `--color-bone-100` | `#F7F2E8` | Elevated panels, sticky nav translucent base |
| `--color-bone` / `--color-bone-200` | `#F2ECE0` | **Default page background.** Replaces every `#FFFFFF`. |
| `--color-bone-300` | `#EBE3D2` | Section shifts, subtle surface separation |
| `--color-bone-400` | `#E2D8C2` | Deepest bone wash (quote pulls, sidebar blocks) |

### Ink — Text and structural
| Token | Hex | Role |
|---|---|---|
| `--color-ink` / `--color-ink-900` | `#1B1714` | **Default text color.** Replaces every `#000000`. |
| `--color-ink-950` | `#120F0C` | Only where extra weight is required (display over bone-300+) |
| `--color-ink-700` | `#2E2722` | Heavy body, table headers |
| `--color-ink-500` | `#4A413B` | Secondary body, metadata on bone-100+ |

### Laterite — Single accent (red earth Nwoko built with)
| Token | Hex | Role |
|---|---|---|
| `--color-laterite-100` | `#F5DCCF` | Soft accent wash, selected-state background tint |
| `--color-laterite-300` | `#E2A287` | Quiet accent (badges, decorative rules) |
| `--color-laterite` / `--color-laterite-500` | `#B4502C` | **Primary accent.** Links on hover, CTAs, focus rings, selection highlight, marquee dividers. |
| `--color-laterite-700` | `#8A3B1F` | Laterite text on bone (contrast-critical) |
| `--color-laterite-900` | `#5E2711` | Laterite pressed state |

### Stone — Secondary neutral (captions, metadata)
| Token | Hex | Role |
|---|---|---|
| `--color-stone-400` | `#A69D8E` | Disabled text, dividers on bone |
| `--color-stone` / `--color-stone-500` | `#8A8275` | **Default caption/metadata color** — JetBrains Mono labels, project years, credits |
| `--color-stone-600` | `#70695E` | Stronger metadata, form helper text |
| `--color-stone-700` | `#58524A` | Stone on laterite-100 wash |

### Ash — Surface separation, card fills
| Token | Hex | Role |
|---|---|---|
| `--color-ash-100` | `#EDE7DA` | Softest card fill when elevation is required |
| `--color-ash-200` | `#E3DDCF` | Input backgrounds, inline code blocks |
| `--color-ash` / `--color-ash-300` | `#D9D2C4` | **Default ash surface** — pull quotes, credit strips |
| `--color-ash-400` | `#C7BFAE` | Hovered surfaces, active filter chips |

### Accent & surface rules
- Maximum one accent (Laterite). No secondary brand color, ever.
- No gradients on text. No gradient backgrounds.
- All shadows tinted with Ink warmth — already encoded in `--shadow-soft`, `--shadow-card`, `--shadow-lift`. Pure black at opacity is banned.
- WCAG AA verified pairings: Ink on Bone, Ink-700 on Bone-200, Laterite-700 on Bone-200, Stone-600 on Bone-200 (metadata size only).

---

## 3. Typography Rules

Three font families. No Inter. No fourth family.

| Role | Family | CSS var | Weights | Tracking | Leading |
|---|---|---|---|---|---|
| Display | **Fraunces** (variable, opsz + SOFT + WONK) | `--font-display-fraunces` | 400, 500, 600 | `--tracking-display` (`-0.03em`) | `--leading-display` (`0.95`) / `--leading-hero` (`1.02`) |
| Body | **Outfit** (variable) | `--font-body-outfit` | 400, 500, 600 | `--tracking-body` (`-0.005em`) | `--leading-body` (`1.65`) |
| Archival / labels | **JetBrains Mono** (variable) | `--font-mono-jetbrains` | 400, 500 | `--tracking-mono` (`0.02em`) for prose / `--tracking-label` (`0.16em`) for small caps | `--leading-label` (`1.2`) |

### Scale (from `globals.css` `@theme`)

| Token | Size | Use |
|---|---|---|
| `text-2xs` | `0.6875rem` / 11px | Credits strip, micro-caps labels |
| `text-xs` | `0.75rem` / 12px | Archival metadata (year, location) |
| `text-sm` | `0.875rem` / 14px | Secondary body, form helper text |
| `text-base` | `1rem` / 16px | Default body |
| `text-lg` | `1.125rem` / 18px | Lead paragraph |
| `text-xl` | `1.25rem` / 20px | Pull-out body on essay pages |
| `text-2xl` | `1.5rem` / 24px | Section eyebrow set in display |
| `text-3xl` | `1.875rem` / 30px | Card title, subhead |
| `text-4xl` | `2.25rem` / 36px | H3, mobile H2 |
| `text-5xl` | `3rem` / 48px | H2, mobile H1 |
| `text-6xl` | `3.75rem` / 60px | H1 tablet, project title mobile |
| `text-7xl` | `4.75rem` / 76px | Home H1 desktop |
| `text-8xl` | `6rem` / 96px | Project title desktop, legacy display |
| `text-9xl` | `8rem` / 128px | Reserved for `/legacy` opening word only |

### Role assignments
- **Hero H1 (home, legacy):** Fraunces 500, `text-6xl md:text-7xl lg:text-8xl`, `leading-hero`, `text-wrap: balance`, lowercase italics permitted for emphasis.
- **Page H1 (studio, services, work, contact):** Fraunces 500, `text-5xl md:text-6xl`, `tracking-display`, `leading-display`.
- **H2 section head:** Fraunces 500, `text-4xl md:text-5xl`, `text-wrap: balance`.
- **H3 card/subsection:** Fraunces 500, `text-2xl md:text-3xl`, `tracking-tight`.
- **Eyebrow:** JetBrains Mono 500, `text-xs`, `tracking-label`, `uppercase`, Stone-500.
- **Body paragraph:** Outfit 400, `text-base md:text-lg`, `leading-body`, `max-w-[65ch]`, `text-wrap: pretty`.
- **Lead (first paragraph of long-form):** Outfit 400, `text-lg md:text-xl`, `leading-body`, Ink-700.
- **Caption / project metadata:** JetBrains Mono 400, `text-xs`, `tracking-mono`, Stone-500. Small caps permitted.
- **Pull quote:** Fraunces 400 italic, `text-3xl md:text-4xl`, `leading-[1.2]`, Ink on Ash-200 block.
- **Navigation:** Outfit 500, `text-sm`, `tracking-[0.02em]`.
- **Button label:** Outfit 500, `text-sm`, `tracking-[0.02em]`.

### Typography hygiene
- No all-caps body copy. Small caps (JetBrains Mono + `tracking-label`) replace all-caps for labels.
- No orphans on H1–H3 — `text-wrap: balance` applied by default in `globals.css`.
- `font-feature-settings` on body inherits `"ss01", "ss02", "cv01", "cv11"` — do not override.
- Numeric data uses JetBrains Mono. Tabular figures (`font-variant-numeric: tabular-nums`) on all data tables and credit strips.
- Lowercase italics preferred for subheads ("works, 1967 — present"). No title case outside proper nouns.

---

## 4. Component Stylings

### Buttons

**Primary (`Laterite` fill — reserved for "Start a project" CTA)**
- Resting: `bg-laterite text-bone`, `px-6 py-3`, `rounded-[--radius-sm]` (2px), Outfit 500 `text-sm`, `tracking-[0.02em]`.
- Hover: `bg-laterite-700`, `transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]`.
- Active/Press: `-translate-y-[1px]` briefly, then `translate-y-0`; color shifts to `laterite-900`. 200ms total.
- Focus-visible: `outline: 2px solid var(--color-laterite)`, `outline-offset: 3px` (inherited from `:focus-visible` in globals).
- Disabled: `bg-stone-400 text-bone-200 cursor-not-allowed`, no hover response.
- Loading: label replaced with three staggered mono dots (`· · ·`) animating opacity; button width locked.

**Ghost (secondary, "Book a studio visit")**
- Resting: `border border-ink/20 text-ink bg-transparent`, `px-6 py-3`, same radius/type as primary.
- Hover: `border-ink/60 bg-ash-200`.
- Active: `-translate-y-[1px]`, `bg-ash-300`.
- Disabled: `border-stone-400/30 text-stone-400`.

**Link (inline, editorial)**
- Resting: Ink, underlined via `border-b border-ink/30 pb-[2px]`.
- Hover: `border-b-laterite text-laterite-700`, 200ms transition.
- Visited: same as resting (no purple).
- External: trailing Phosphor `ArrowUpRight` icon at `strokeWidth: 1.5`, Stone-500.

### Cards (used sparingly — only when elevation communicates hierarchy)

- Default: `bg-ash-100`, no border, `rounded-[--radius-md]` (6px), `p-8` (rare `p-10` on flagship tiles).
- Hover (project tile only): `shadow-card` → `shadow-lift`, image `scale-[1.02]` over 400ms ease-out, metadata row shifts up `-translate-y-[2px]`.
- Work-index tiles prefer negative space and hairline dividers (`border-t border-ink/10`) over card chrome.

### Inputs (contact form, brief form)

- Label: above input. Outfit 500 `text-sm` Ink, `mb-2`.
- Input/textarea: `bg-ash-200 border border-transparent`, `px-4 py-3`, `rounded-[--radius-sm]`, Outfit 400 `text-base` Ink, placeholder Stone-500.
- Focus: `bg-bone`, `border-ink/30`, `outline` handled by global `:focus-visible` laterite ring.
- Error: `border-laterite-700`, helper text below in JetBrains Mono `text-xs` Laterite-700, prefixed with a 1px laterite square — never an emoji.
- Disabled: `bg-ash-100 text-stone-500 cursor-not-allowed`.
- Helper text: JetBrains Mono `text-xs` Stone-600, `mt-2`.
- Gap between fieldsets: `gap-6`. Within a field group: `gap-2`.

### Links (in body flow)

- Inherit text color. Underline via `border-b border-current/30`. Hover lifts underline to Laterite and shifts text to Laterite-700. 200ms.

### Navigation

- Primary nav: single row, left-aligned wordmark, right-aligned links. No sticky drop shadow unless scrolled > 80px.
- Scrolled state: `bg-bone/80 backdrop-blur-md border-b border-ink/8`, 200ms crossfade.
- Link: Outfit 500 `text-sm`, Stone-600 resting, Ink on hover with a 1px laterite underline animating in from the left (transform-origin left, 220ms).
- Active route: Ink, laterite underline statically present.
- Mobile nav: full-screen Bone-50 overlay, stacked display-type links (`text-5xl` Fraunces 500), staggered reveal 60ms apart using CSS `animation-delay: calc(var(--index) * 60ms)`.

### Loaders

- No spinners. Skeleton loaders only, matching the final layout's exact dimensions.
- Skeleton fill: `bg-ash-200` with a shimmer sweep — `linear-gradient(90deg, transparent 0%, rgba(27,23,20,0.05) 50%, transparent 100%)` translating `-100%` → `100%` over 1400ms ease-in-out, infinite. Respects `prefers-reduced-motion`.
- Case-study scroll progress: 2px laterite bar at top of viewport, width tied to scroll position (GSAP ScrollTrigger `scrub: true`).

### Empty states

- Always composed, never apologetic. Single centered block, `max-w-[40ch]`.
- Fraunces 500 `text-2xl` title (e.g., "no projects in this filter yet"), Outfit 400 `text-base` Stone-600 body, one ghost button to reset filters.
- Illustration: a hairline SVG of a simple architectural primitive (arch, column, roof line) in Stone-400 at 40% opacity. Never an emoji. Never a Lucide sad-face.

### Error states

- Page-level (404, 500): full-height composition using `min-h-[100dvh]`. Fraunces `text-7xl` title ("this page is unbuilt", "something buckled"), one-sentence body in Outfit, ghost "back to work" button, flagship-project photograph full-bleed below the fold.
- Inline form error: see Inputs above.
- Toast/alert: not used. Errors live in-context.

### Icons

- Phosphor Icons exclusively, `weight="regular"` (1.5px stroke). No Lucide, no Feather, no Heroicons, no emojis.
- Icon color inherits text color. Size defaults: `16px` (inline body), `20px` (buttons), `24px` (nav triggers).

---

## 5. Layout Principles

### Grid and container
- **Max container width:** `max-w-[1440px] mx-auto`. Horizontal padding: `px-6 md:px-10 lg:px-16`.
- **Grid primitive:** CSS Grid only. Never flexbox percentage math. Common patterns:
  - Asymmetric hero: `grid-cols-12`, headline spans cols 1–7, imagery cols 8–12 offset down by `mt-24` on desktop.
  - Zig-zag sections: `grid-cols-2` with alternating `order` per row. Image and text each span 1 col on `md:`, collapse to single column below.
  - Work index desktop: CSS Grid `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` as fallback; primary mode is drag-to-pan boundless grid.

### Asymmetry rules (DESIGN_VARIANCE 7)
- **Asymmetric hero rule:** on `/`, `/studio`, `/legacy`, `/services`, `/contact`, and `/work/[slug]` covers, the display type is anchored to a 60% column (cols 1–7 of 12). The signature image or archival caption anchors bottom-right at cols 8–12, vertically offset by `mt-16 md:mt-32`. Never centered.
- **2-col zig-zag rule:** `/services`, `/services/[slug]`, the home services index, and `/studio` body sections use alternating 2-column rows. Row 1: text left / image right. Row 2: image left / text right. Never three equal cards in a row.
- **Negative space budget:** section vertical padding starts at `py-24 md:py-32 lg:py-40`. Reduce only where content density requires it.
- **Offset discipline:** asymmetry is structural, not random. Use `margin-top: -2rem` overlaps and fractional grid columns (`grid-template-columns: 2fr 1fr`) to create deliberate tension. No floating elements with accidental gaps.

### Full-height rule
- **Never `h-screen`.** Always `min-h-[100dvh]`. Applies to hero sections, 404, contact intro, and legacy opening. No exceptions.

### Responsive behavior
- Mobile-first. Every asymmetric layout at `md:` and above collapses to single-column, `w-full px-6 py-12` on `< 768px`. No horizontal scroll except the intentional drag-to-pan work index on `lg:` and above.
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1440px`.
- Images: `next/image`, AVIF → WebP fallback, explicit `sizes` attribute per layout.

### Section structure
- Every primary section uses a semantic landmark: `<section>` with an `aria-labelledby` pointing at its H2.
- Page scaffolding: `<main>` wraps route content; `<nav>` for primary nav; `<footer>` with `<address>` block for contact; `<article>` on case studies; `<aside>` on case-study credit strips.

### Z-index scale (systemic only — no arbitrary spam)
- `z-0` flow content, `z-10` sticky section headers, `z-20` sticky nav, `z-40` grain overlay, `z-50` modal/overlay, `z-100` skip-to-content link.

---

## 6. Motion & Interaction

**Motion serves the work. Everywhere else is still.** This is a binding constraint, not a preference.

### Where motion is applied

**On project presentations only (`/work`, `/work/[slug]`, home featured-project tile):**
- Scroll-linked mask reveals on project hero images — GSAP ScrollTrigger, `scrub: true`, `clip-path` inset animating `100%` → `0%` over the first 30vh of scroll.
- Sticky image columns that swap as body text scrolls past (architectural-monograph feel) — GSAP ScrollTrigger `pin: true` + `scrub` on image opacity crossfades.
- Scroll progress indicator on flagship case studies — 2px Laterite bar at top of viewport.
- Drag-to-pan work index with inertia on `lg:` and above — GSAP Draggable + InertiaPlugin.
- Kinetic marquee of project names above the footer — CSS `animation: marquee-slide 48s linear infinite` from `globals.css`, `will-change: transform`, mask-image edge fade already encoded.

GSAP is isolated to leaf `'use client'` components with strict `useEffect` cleanup (return `ScrollTrigger.killAll()` / `ctx.revert()`). Never mixed with Framer Motion in the same component tree.

### Site-wide microanimations on interactive elements only

- All hover/focus/press transitions: 200–300ms, easing `cubic-bezier(0.22, 1, 0.36, 1)` (encoded on the skip link; use the same curve everywhere).
- Press feedback: `-translate-y-[1px]` or `scale-[0.98]`, returning in 200ms.
- Framer Motion interactions use spring physics: `{ type: "spring", stiffness: 100, damping: 20 }`. No linear easing on interactive elements.
- Focus rings on every keyboard-reachable control (Laterite, 2px, 3px offset — inherited from global `:focus-visible`).
- Mobile nav stagger: 60ms delays via CSS `animation-delay: calc(var(--index) * 60ms)`.

### Reduced motion

- `globals.css` already enforces global `prefers-reduced-motion` opt-out — all animations reduced to `0.001ms`, marquee halted, scroll-behavior reset to `auto`.
- GSAP ScrollTrigger components must additionally check `matchMedia("(prefers-reduced-motion: reduce)").matches` and skip timeline creation when true, rendering the final still frame only.

### Forbidden motion

- No parallax on marketing pages (hero, studio, services, legacy body copy, contact).
- No auto-playing carousels, hero sliders, or auto-advancing testimonials.
- No custom cursors, cursor trails, or magnetic hover on cursor across the site.
- No perpetual background animations on non-project pages (no mesh gradients, no floating blobs, no pulsing dots).
- No neon glows, outer shadows on buttons, animated gradient text, text-fill gradients on headers.
- No page-transition curtain wipes or liquid swipes.

---

## 7. Anti-Patterns Banned

Any of the following in the codebase is a defect. No exceptions.

### Type
- **No Inter.** Anywhere. Fraunces / Outfit / JetBrains Mono only.
- No system-font stacks as primary families (`system-ui` used only as fallback).
- No oversized screaming H1s without hierarchy — control via weight and color, not scale alone.
- No all-caps body or all-caps buttons. Small caps via JetBrains Mono + `tracking-label` only.

### Color
- **No `#000000`.** Use `--color-ink` (`#1B1714`) or deeper.
- **No `#FFFFFF`.** Use `--color-bone` (`#F2ECE0`).
- No pure-black shadows at opacity. Use the warm-tinted `--shadow-*` tokens.
- No AI purple/blue neon gradients. No purple at all, unless it is in a photograph.
- No gradient text fills. No animated gradient strokes. No iridescent holographic foil.
- No secondary accent color introduced beyond Laterite.
- No mixing cool grays (Slate/Zinc) with the warm Stone family.

### Iconography
- No Lucide, Feather, Heroicons, Material Icons, or stock SVG sets. Phosphor Icons at `strokeWidth: 1.5` only.
- **No emojis.** In code, markup, copy, alt text, filenames, commit messages, or placeholders. Banned.
- No generic "egg" avatars or Lucide user icons.

### Layout
- **No `h-screen`.** Always `min-h-[100dvh]`.
- **No three-equal-cards feature rows.** 2-column zig-zag or asymmetric grid, always.
- No centered hero over imagery (DESIGN_VARIANCE 7 bans this).
- No flexbox percentage math (`w-[calc(33%-1rem)]`). CSS Grid.
- No accordion-wall FAQ. FAQ is a side-by-side Q/A list grouped by topic.
- No testimonial carousels (no testimonials on site at launch; if added, static quote grid only).
- No arbitrary z-index spam.

### Motion
- No parallax on marketing pages.
- No auto-sliders, auto-carousels, auto-advancing hero.
- No cursor trails or custom cursors.
- No perpetual background animations off the work surface.
- No page transitions (Next.js default instant route change).

### Content and data
- No AI copywriting clichés: **elevate, seamless, unleash, next-gen, revolutionize, empower, innovative** (in marketing copy — "innovative" is permitted only in the client's own preserved mission statement), **cutting-edge, robust, synergy, leverage** (as a verb), **game-changer, best-in-class, world-class.**
- No placeholder statistics in production (`0+`, `99.99%`, `50%`). Every stat must be verified or omitted.
- No generic names ("John Doe", "Jane Smith"). Real team names only.
- No Unsplash links in committed code. Use `/public/assets` with a `README.md` status log.
- No "Lorem ipsum" shipped to production.

### External components
- No default shadcn/ui styling. If shadcn is used for form primitives, every radius, color, and shadow is restyled to match these tokens.
- No third-party hero video players.
- No cookie banner (Vercel Analytics is cookieless).

### Strategic omissions that would count as defects if missed
- Skip-to-content link (`.skip-link` already in globals).
- Custom 404 page.
- `/privacy` and `/terms` placeholder pages with "last updated" stamps.
- Semantic landmarks (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`) on every page.
- Alt text on every non-decorative image; `alt=""` explicit on decorative ones.
- Form validation with inline errors (no `alert()`).
- Visible focus rings on every interactive element.
- `prefers-reduced-motion` respected on every animated surface.
