"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";
import { panelVariants, scrimVariants } from "@/lib/motion";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/legacy", label: "Legacy" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogTitleId = useId();

  const close = useCallback(() => setOpen(false), []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape-to-close + focus trap + body scroll lock
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { body } = document;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>(
      "[data-nav-panel-first]",
    );
    firstLink?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = originalOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, close]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full",
        "bg-[var(--color-bone)]/85 backdrop-blur-md",
        "border-b border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)]",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10 lg:px-14"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className={cn(
            "group inline-flex items-baseline gap-2",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)]",
          )}
        >
          <span
            className={cn(
              "font-[var(--font-display)] italic",
              "text-[1.1rem] md:text-[1.25rem]",
              "tracking-[-0.02em] leading-none",
              "text-[var(--color-ink)]",
              "transition-colors duration-[240ms]",
              "group-hover:text-[var(--color-laterite)]",
            )}
          >
            New Culture Designs
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative inline-flex items-center gap-2 py-2",
                    "font-[var(--font-body)] text-[0.875rem]",
                    "transition-colors duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "text-[var(--color-ink)] hover:text-[var(--color-laterite)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)]",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute left-0 right-0 -bottom-[4px] h-[1.5px]",
                        "origin-left bg-[var(--color-laterite)]",
                        "transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                      )}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile trigger */}
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center md:hidden",
            "text-[var(--color-ink)]",
            "transition-colors duration-[200ms]",
            "hover:text-[var(--color-laterite)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)]",
            "rounded-[var(--radius-sm)]",
            "active:translate-y-[1px]",
          )}
        >
          <List aria-hidden="true" size={22} weight="regular" />
        </button>
      </nav>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {open && (
          <div
            role="dialog"
            id="primary-nav-panel"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={scrimVariants}
              aria-hidden="true"
              onClick={close}
              className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--color-ink)_55%,transparent)]"
            />
            <motion.div
              ref={panelRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              className={cn(
                "absolute right-0 top-0 h-full w-[min(88vw,22rem)]",
                "bg-[var(--color-bone)]",
                "border-l border-[color:color-mix(in_srgb,var(--color-ink)_12%,transparent)]",
                "flex flex-col",
              )}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span
                  id={dialogTitleId}
                  className="font-[var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-stone-600)]"
                >
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => {
                    close();
                    triggerRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center",
                    "text-[var(--color-ink)]",
                    "transition-colors duration-[200ms]",
                    "hover:text-[var(--color-laterite)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)]",
                    "rounded-[var(--radius-sm)]",
                    "active:translate-y-[1px]",
                  )}
                >
                  <X aria-hidden="true" size={20} weight="regular" />
                </button>
              </div>

              <ul className="flex flex-col px-6 pb-6 pt-2">
                {NAV_ITEMS.map((item, idx) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li
                      key={item.href}
                      className="border-b border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        data-nav-panel-first={idx === 0 ? "" : undefined}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-baseline justify-between py-5",
                          "font-[var(--font-display)] text-[1.75rem] leading-none",
                          "tracking-[-0.02em]",
                          "text-[var(--color-ink)]",
                          "transition-colors duration-[220ms]",
                          "hover:text-[var(--color-laterite)]",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)] rounded-[var(--radius-sm)]",
                          active && "text-[var(--color-laterite)]",
                        )}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className="font-[var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-stone-500)]"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
