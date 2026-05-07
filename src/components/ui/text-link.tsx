import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  /** When true, suppress the underline-from-left effect (inline body links). */
  plain?: boolean;
};

/**
 * Editorial text link with an underline that draws in from the left on hover.
 * 200–300ms, Laterite accent. Uses native focus ring.
 */
export function TextLink({
  children,
  className,
  plain,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group relative inline-block",
        "text-[var(--color-ink)] hover:text-[var(--color-laterite)]",
        "transition-colors duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)]",
        className,
      )}
      {...props}
    >
      <span className="relative">
        {children}
        {!plain && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute left-0 right-0 -bottom-[3px] h-[1.5px]",
              "origin-left scale-x-0 bg-[var(--color-laterite)]",
              "transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:scale-x-100 group-focus-visible:scale-x-100",
            )}
          />
        )}
      </span>
    </Link>
  );
}
