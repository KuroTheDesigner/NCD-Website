import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "article" | "div";
};

/**
 * Vertical-rhythm section. Uses generous macro-whitespace appropriate
 * for an editorial, gallery-airy layout (VISUAL_DENSITY: 3).
 */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, as = "section", ...props },
  ref,
) {
  const Tag = as;
  return (
    <Tag
      // @ts-expect-error — forwarding a polymorphic ref
      ref={ref}
      className={cn("py-20 md:py-28 lg:py-36", className)}
      {...props}
    />
  );
});
