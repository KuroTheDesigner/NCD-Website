import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type MetadataLineProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  separator?: string;
  as?: ElementType;
};

/**
 * Archival metadata: JetBrains Mono, small caps, tracked-out.
 * Used for project year, location, category, credits.
 * Accepts raw children (a string or <span> list) and optionally splits
 * top-level children with a middot separator.
 */
export function MetadataLine({
  children,
  separator = "·",
  className,
  as: Tag = "div",
  ...props
}: MetadataLineProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <Tag
      className={cn(
        "inline-flex flex-wrap items-center gap-x-3 gap-y-1",
        "font-[var(--font-mono)] text-[var(--color-stone-600)]",
        "text-[0.6875rem] uppercase",
        "[letter-spacing:var(--tracking-label)]",
        className,
      )}
      {...props}
    >
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-3">
          <span>{item}</span>
          {idx < items.length - 1 && (
            <span aria-hidden="true" className="text-[var(--color-stone-500)]">
              {separator}
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
}
