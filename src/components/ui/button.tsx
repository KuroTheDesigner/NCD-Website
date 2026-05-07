import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "link";
type Size = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
  "disabled:cursor-not-allowed disabled:opacity-50 " +
  "active:translate-y-[1px]";

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-bone)] rounded-[var(--radius-md)] " +
    "hover:bg-[var(--color-ink-700)] " +
    "disabled:hover:bg-[var(--color-ink)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] rounded-[var(--radius-md)] " +
    "border border-[var(--color-ink)] " +
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] " +
    "disabled:hover:bg-transparent disabled:hover:text-[var(--color-ink)]",
  link:
    "bg-transparent text-[var(--color-ink)] px-0 h-auto " +
    "underline underline-offset-[6px] decoration-[1.5px] decoration-[var(--color-ink-500)] " +
    "hover:text-[var(--color-laterite)] hover:decoration-[var(--color-laterite)] " +
    "active:translate-y-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, type, ...props },
  ref,
) {
  const finalSize = variant === "link" ? "" : sizeClasses[size];
  return (
    <button
      ref={ref}
      type={type ?? "button"}
      className={cn(baseClass, finalSize, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});
