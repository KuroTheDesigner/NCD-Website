import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with proper conflict resolution.
 * Use anywhere conditional classNames compose together.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
