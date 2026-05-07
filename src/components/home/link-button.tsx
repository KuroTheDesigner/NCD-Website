import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const baseClass =
  "inline-flex items-center justify-center gap-2 select-none " +
  "font-[var(--font-body)] font-medium " +
  "transition-[background-color,color,border-color,transform,box-shadow] " +
  "duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-laterite)] " +
  "active:translate-y-[1px]";

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-bone)] rounded-[var(--radius-md)] " +
    "hover:bg-[var(--color-ink-700)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] rounded-[var(--radius-md)] " +
    "border border-[var(--color-ink)] " +
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)]",
};

/**
 * Next.js `Link` with the same visual language as the shared Button primitive.
 * Used for CTAs that navigate rather than trigger an action.
 */
export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(baseClass, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
