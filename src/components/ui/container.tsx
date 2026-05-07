import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Editorial max-width container. Never wider than 1440px; padding scales by
 * breakpoint without swinging too far at any step.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14",
          className,
        )}
        {...props}
      />
    );
  },
);
