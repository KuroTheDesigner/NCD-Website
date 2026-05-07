"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { MetadataLine } from "@/components/ui/metadata-line";
import type { ProjectImage } from "@/content/projects";

type StickyGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: ProjectImage[];
};

/**
 * Flagship case-study sticky gallery.
 *
 * Pattern: a left-hand text column pins in place while a stack of images
 * scrolls past on the right (architectural-monograph feel). On `prefers-
 * reduced-motion`, the pin is disabled and the content simply stacks.
 *
 * GSAP is isolated to this leaf client component. No Framer Motion in this
 * tree. Uses gsap.context() for scope and ScrollTrigger.matchMedia for the
 * reduced-motion guard. Cleans up on unmount.
 */
export function StickyGallery({
  eyebrow,
  title,
  description,
  images,
}: StickyGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!root || !left || !right) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Full motion branch — desktop, no reduced motion.
      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reducedMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isDesktop, reducedMotion } = context.conditions as {
            isDesktop: boolean;
            reducedMotion: boolean;
          };
          if (!isDesktop || !reducedMotion) return;

          // Pin the left column across the scrollable right column height.
          const pinTrigger = ScrollTrigger.create({
            trigger: root,
            start: "top top+=96",
            endTrigger: right,
            end: "bottom bottom-=96",
            pin: left,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          // Soft reveal on each image as it enters the viewport.
          const imageEls = right.querySelectorAll<HTMLElement>("[data-gallery-image]");
          imageEls.forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom-=120",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });

          return () => {
            pinTrigger.kill();
          };
        },
      );
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "grid grid-cols-1 gap-12",
        "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-16",
      )}
    >
      <div ref={leftRef} className="lg:self-start">
        <div className="flex max-w-[38ch] flex-col gap-5 lg:pt-2">
          <MetadataLine>
            <span>{eyebrow}</span>
          </MetadataLine>
          <h2
            className="font-[var(--font-display)] text-[2rem] md:text-[2.5rem] leading-[1.02] tracking-[-0.025em]"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h2>
          <p className="text-[1rem] md:text-[1.0625rem] leading-[1.65] text-[var(--color-ink-500)]">
            {description}
          </p>
        </div>
      </div>

      <div ref={rightRef} className="flex flex-col gap-10 md:gap-14">
        {images.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            data-gallery-image
            className={cn(
              "relative w-full overflow-hidden rounded-[var(--radius-sm)]",
              "bg-[var(--color-ash-200)]",
              i % 3 === 0
                ? "aspect-[4/5]"
                : i % 3 === 1
                  ? "aspect-[3/2]"
                  : "aspect-[16/10]",
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            {img.caption && (
              <figcaption
                className={cn(
                  "absolute inset-x-0 bottom-0 px-4 py-3",
                  "bg-[linear-gradient(to_top,rgba(27,23,20,0.55),transparent_100%)]",
                  "font-[var(--font-mono)] text-[0.6875rem] uppercase",
                  "[letter-spacing:var(--tracking-label)] text-[var(--color-bone)]",
                )}
              >
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
