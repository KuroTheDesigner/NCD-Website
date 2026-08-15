import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

/**
 * Site footer + kinetic marquee of project names.
 *
 * Motion policy note: the marquee qualifies under the project-presentation
 * carve-out because its content is project names — the subjects of the site.
 * Pure CSS animation, opt-out wired in globals.css via prefers-reduced-motion.
 */

type Column = {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
};

const COLUMNS: Column[] = [
  {
    heading: "Practice",
    links: [
      { label: "Work", href: "/work" },
      { label: "Studio", href: "/studio" },
      { label: "Services", href: "/services" },
      { label: "Legacy", href: "/legacy" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "studio@newculturedesigns.com.ng", href: "mailto:studio@newculturedesigns.com.ng" },
      { label: "+234 (0) 000 000 0000", href: "tel:+2340000000000" },
      { label: "Ibadan, Oyo State, Nigeria", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    Icon: InstagramLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: LinkedinLogo,
  },
  {
    label: "X",
    href: "https://x.com/",
    Icon: XLogo,
  },
];

export function Footer() {
  // Duplicate the project-name set so the CSS translate loop feels seamless.
  const marqueeItems = [...projects, ...projects];
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 md:mt-28 lg:mt-36">
      {/* Kinetic project-name marquee */}
      <div
        aria-hidden="true"
        className={cn(
          "border-y border-[color:color-mix(in_srgb,var(--color-bone)_12%,transparent)]",
          "bg-[var(--color-ink-950)]",
          "py-6 overflow-hidden",
        )}
      >
        <div className="marquee-mask">
          <div className="marquee-track">
            {marqueeItems.map((project, idx) => (
              <span
                key={`${project.slug}-${idx}`}
                className={cn(
                  "inline-flex items-center gap-6",
                  "font-[var(--font-display)] italic",
                  "text-[1.75rem] md:text-[2.25rem]",
                  "leading-none tracking-[-0.02em]",
                  "text-[var(--color-bone-100)]",
                )}
              >
                {project.title}
                <span
                  className="font-[var(--font-mono)] not-italic text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-stone-400)]"
                >
                  {project.yearStart}
                  {project.yearEnd ? `–${project.yearEnd}` : ""}
                </span>
                <span
                  aria-hidden="true"
                  className="h-[1.5px] w-10 bg-[var(--color-laterite)]/70"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-[var(--color-ink)] pb-10 pt-16 text-[var(--color-bone)] md:pb-14 md:pt-24">
        <Container>
          {/* Large wordmark */}
          <div className="flex flex-col gap-10 pb-14 md:flex-row md:items-end md:justify-between">
            <h2
              className={cn(
                "font-[var(--font-display)] italic",
                "text-[3rem] md:text-[5rem] lg:text-[6.5rem]",
                "leading-[0.95] tracking-[-0.03em]",
                "text-[var(--color-bone)]",
                "max-w-[12ch]",
              )}
            >
              New Culture
              <br />
              Designs.
            </h2>

            <p
              className={cn(
                "max-w-[34ch] font-[var(--font-body)] text-[0.95rem]",
                "text-[var(--color-ash-300)]",
              )}
            >
              An indigenous architectural practice working across Nigeria and
              beyond — design, design-build, facilities, and property
              development.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 gap-10 border-t border-[color:color-mix(in_srgb,var(--color-bone)_12%,transparent)] pt-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-12">
            {/* Columns */}
            {COLUMNS.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <h3
                  className={cn(
                    "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                    "tracking-[0.16em] text-[var(--color-stone-400)]",
                    // Column headers aren't display serif — override the global h3.
                    "![font-family:var(--font-mono)] !leading-none",
                  )}
                >
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-3 text-[0.95rem]">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <TextLink href={link.href} inverted>{link.label}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3
                className={cn(
                  "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                  "tracking-[0.16em] text-[var(--color-stone-400)]",
                  "![font-family:var(--font-mono)] !leading-none",
                )}
              >
                Follow
              </h3>
              <ul className="flex flex-wrap gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center",
                        "rounded-[var(--radius-sm)]",
                        "border border-[color:color-mix(in_srgb,var(--color-bone)_20%,transparent)]",
                        "text-[var(--color-bone)]",
                        "transition-[color,background-color,transform] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]",
                        "active:translate-y-[1px]",
                      )}
                    >
                      <Icon aria-hidden="true" size={18} weight="regular" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            className={cn(
              "mt-16 flex flex-col gap-3 border-t border-[color:color-mix(in_srgb,var(--color-bone)_12%,transparent)] pt-6",
              "md:flex-row md:items-center md:justify-between",
              "font-[var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-stone-400)]",
            )}
          >
            <span>© {year} New Culture Designs & Development Centre</span>
            <span>Ibadan · Lagos · Benin City</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
