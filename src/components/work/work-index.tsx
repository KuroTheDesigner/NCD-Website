"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/cn";
import { TextLink } from "@/components/ui/text-link";
import { tweenSoft } from "@/lib/motion";
import {
  projectDecade,
  type Project,
  type ProjectCategory,
} from "@/content/projects";
import { ProjectTile } from "./project-tile";

type Category = ProjectCategory | "All";
type DecadeKey = number | "All";

type ProjectTilePresentation = {
  aspect: "portrait" | "landscape" | "wide";
  span: "narrow" | "standard" | "wide" | "full";
  colStart?: number;
};

const CATEGORIES: Category[] = [
  "All",
  "Cultural",
  "Corporate",
  "Residential",
  "Educational",
  "Interior",
];

/**
 * Deterministic, editorial rhythm for the grid. Cycles a five-tile pattern
 * that balances wide and narrow spans, portrait and landscape imagery, and
 * introduces the occasional offset start column.
 */
const PATTERN: ProjectTilePresentation[] = [
  { aspect: "landscape", span: "wide" },
  { aspect: "portrait", span: "narrow" },
  { aspect: "wide", span: "standard", colStart: 4 },
  { aspect: "portrait", span: "narrow", colStart: 2 },
  { aspect: "landscape", span: "wide", colStart: 6 },
];

function presentationFor(
  index: number,
  count: number,
): ProjectTilePresentation {
  // A very small project set looks cleaner in a two-column rhythm; large sets
  // benefit from the offset pattern.
  if (count <= 2) {
    return { aspect: "landscape", span: "standard" };
  }
  return PATTERN[index % PATTERN.length];
}

type WorkIndexProps = {
  projects: Project[];
};

export function WorkIndex({ projects }: WorkIndexProps) {
  const [category, setCategory] = useState<Category>("All");
  const [decade, setDecade] = useState<DecadeKey>("All");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const decades = useMemo<number[]>(() => {
    const set = new Set<number>();
    for (const p of projects) set.add(projectDecade(p));
    return Array.from(set).sort((a, b) => b - a);
  }, [projects]);

  const filtered = useMemo<Project[]>(() => {
    return projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (decade !== "All" && projectDecade(p) !== decade) return false;
      return true;
    });
  }, [projects, category, decade]);

  const contextRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    contextRef.current = gsap.context(() => {});
    return () => contextRef.current?.revert();
  }, []);

  useLayoutEffect(() => {
    contextRef.current?.add(() => {
      // Entry animation for filter section - runs only once
      const filterLine = containerRef.current?.querySelector(".filter-line");
      const filterButton = buttonRef.current;
      
      if (filterLine && filterButton) {
        gsap.set([filterLine, filterButton], { opacity: 0, y: 20 });
        
        gsap.to(filterLine, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });
        
        gsap.to(filterButton, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.35,
        });
      }
    });
  }, []);

  useLayoutEffect(() => {
    contextRef.current?.add(() => {
      // Menu slide animation
      gsap.to(menuRef.current, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Arrow rotation
      gsap.to(arrowRef.current, {
        rotate: isOpen ? 180 : 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    });
  }, [isOpen]);

  useLayoutEffect(() => {
    contextRef.current?.add(() => {
      const button = buttonRef.current;
      const arrow = arrowRef.current;
      if (!button || !arrow) return;

      if (isHovered) {
        gsap.to(button, {
          color: "var(--color-laterite)",
          duration: 0.2,
        });
        gsap.to(arrow, {
          y: isOpen ? -3 : 3,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(button, {
          color: "var(--color-ink)",
          duration: 0.2,
        });
        gsap.to(arrow, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  }, [isHovered, isOpen]);

  const resultCount = filtered.length;

  return (
    <div ref={containerRef} className="flex flex-col gap-12 md:gap-16">
      {/* Filter section */}
      <div className="flex flex-col">
        <div className="filter-line border-b border-[color:color-mix(in_srgb,var(--color-ink)_14%,transparent)] pb-4">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "flex items-center gap-2 font-[var(--font-body)] text-[28px] leading-none transition-colors",
              "focus-visible:outline-none focus-visible:text-[var(--color-laterite)]"
            )}
          >
            <span>Filter</span>
            <svg
              ref={arrowRef}
              width="17.5"
              height="17.5"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--color-laterite)]"
            >
              <path
                d="M5 1V9M5 9L1.5 5.5M5 9L8.5 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          ref={menuRef}
          style={{ height: 0, opacity: 0, overflow: "hidden" }}
        >
          <div className="flex flex-col gap-6 py-10">
            <FilterGroup
              label="Category"
              legendId="work-filter-category"
              options={CATEGORIES.map((c) => ({ value: c, label: c }))}
              selected={category}
              onSelect={(v) => setCategory(v as Category)}
            />

            <FilterGroup
              label="Decade"
              legendId="work-filter-decade"
              options={[
                { value: "All", label: "All" },
                ...decades.map((d) => ({ value: d, label: `${d}s` })),
              ]}
              selected={decade}
              onSelect={(v) => setDecade(v as DecadeKey)}
            />

            <div
              aria-live="polite"
              className={cn(
                "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                "[letter-spacing:var(--tracking-label)] text-[var(--color-stone-600)]",
                "mt-2"
              )}
            >
              {resultCount === projects.length
                ? `Showing all ${projects.length} projects`
                : `${resultCount} of ${projects.length} projects`}
            </div>
          </div>
        </div>
      </div>

      {/* Project grid or empty state */}
      {resultCount === 0 ? (
        <EmptyState
          onReset={() => {
            setCategory("All");
            setDecade("All");
          }}
        />
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24 lg:gap-y-28"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const presentation = presentationFor(index, resultCount);
              return (
                <motion.div
                  key={project.id}
                  layout
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ ...tweenSoft, duration: 0.6 }}
                  className={cn(
                    presentation.span === "narrow" && "md:col-span-5",
                    presentation.span === "standard" && "md:col-span-6",
                    presentation.span === "wide" && "md:col-span-7",
                    presentation.span === "full" && "md:col-span-12",
                    presentation.colStart === 2 && "md:col-start-2",
                    presentation.colStart === 3 && "md:col-start-3",
                    presentation.colStart === 4 && "md:col-start-4",
                    presentation.colStart === 5 && "md:col-start-5",
                    presentation.colStart === 6 && "md:col-start-6",
                  )}
                >
                  <ProjectTile
                    project={project}
                    aspect={presentation.aspect}
                    span="full"
                    priority={index < 2}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

type FilterOption<T extends string | number> = { value: T; label: string };

type FilterGroupProps<T extends string | number> = {
  label: string;
  legendId: string;
  options: FilterOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
};

function FilterGroup<T extends string | number>({
  label,
  legendId,
  options,
  selected,
  onSelect,
}: FilterGroupProps<T>) {
  return (
    <div
      role="group"
      aria-labelledby={legendId}
      className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5"
    >
      <span
        id={legendId}
        className={cn(
          "font-[var(--font-mono)] text-[0.625rem] uppercase",
          "[letter-spacing:var(--tracking-label)] text-[var(--color-stone-600)]",
          "md:min-w-[5.5rem]",
        )}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = opt.value === selected;
          return (
            <button
              key={String(opt.value)}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(opt.value)}
              className={cn(
                "inline-flex h-9 items-center rounded-full border px-4",
                "font-[var(--font-body)] text-[0.8125rem]",
                "transition-[background-color,color,border-color,transform] duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-laterite)]",
                "active:translate-y-[1px]",
                isSelected
                  ? cn(
                      "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]",
                      "hover:bg-[var(--color-ink-700)] hover:border-[var(--color-ink-700)]",
                    )
                  : cn(
                      "border-[color:color-mix(in_srgb,var(--color-ink)_28%,transparent)]",
                      "bg-transparent text-[var(--color-ink)]",
                      "hover:border-[var(--color-ink)] hover:bg-[color:color-mix(in_srgb,var(--color-ink)_4%,transparent)]",
                    ),
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-5 border-t py-20 md:py-28",
        "border-[color:color-mix(in_srgb,var(--color-ink)_14%,transparent)]",
      )}
    >
      <span
        className={cn(
          "font-[var(--font-mono)] text-[0.6875rem] uppercase",
          "[letter-spacing:var(--tracking-label)] text-[var(--color-stone-600)]",
        )}
      >
        Empty view
      </span>
      <h2
        className="max-w-[18ch] font-[var(--font-display)] text-[2rem] leading-[1.05] tracking-[-0.02em] md:text-[2.5rem]"
        style={{ textWrap: "balance" }}
      >
        No projects match this view.
      </h2>
      <p className="max-w-[48ch] text-[1rem] leading-[1.65] text-[var(--color-ink-500)]">
        Adjust the category or decade to see more of the catalogue.
      </p>
      <TextLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onReset();
        }}
      >
        Reset filters
      </TextLink>
    </div>
  );
}
