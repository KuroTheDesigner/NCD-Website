import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MetadataLine } from "@/components/ui/metadata-line";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[100dvh] flex-col justify-center"
    >
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col gap-8 md:col-span-8 lg:col-span-6">
            <MetadataLine>
              <span>404</span>
              <span>Page not found</span>
            </MetadataLine>

            <h1
              id="not-found-heading"
              className={cn(
                "font-[var(--font-display)] italic text-[var(--color-ink)]",
                "text-[clamp(3rem,9vw,7rem)]",
                "leading-[0.95] tracking-[-0.03em]",
                "[text-wrap:balance]",
              )}
            >
              This page is unbuilt.
            </h1>

            <p className="max-w-[48ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
              The address you followed does not exist — or the page has moved.
              Return to the studio, or look through the work.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/"
                className={cn(
                  "inline-flex items-center gap-2 rounded-[var(--radius-sm)]",
                  "bg-[var(--color-ink)] text-[var(--color-bone)]",
                  "px-6 py-3.5 text-[0.875rem] font-medium",
                  "transition-all duration-[200ms] hover:bg-[var(--color-ink-700)] active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2",
                )}
              >
                Back to studio
              </Link>
              <Link
                href="/work"
                className={cn(
                  "text-[var(--color-ink)] hover:text-[var(--color-laterite)]",
                  "text-[0.9375rem] transition-colors duration-[200ms]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-laterite)] focus-visible:ring-offset-2",
                )}
              >
                View all work
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
