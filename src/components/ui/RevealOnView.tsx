"use client";

import { useEffect, useRef, useState } from "react";

type RevealState = "idle" | "waiting" | "shown";

type RevealOnViewProps = React.HTMLAttributes<HTMLDivElement> & {
  /** How much of the element must be visible before it reveals (0 to 1). */
  threshold?: number;
  /**
   * Shrinks the "visible" area from the bottom of the screen, so the reveal waits
   * until the element has scrolled further up, not the moment it peeks in.
   */
  bottomOffset?: string;
};

/**
 * Sets data-reveal on a wrapper so children can animate in when it scrolls into view.
 *   idle    = server render / no JavaScript: content shows normally (safe fallback)
 *   waiting = below the fold, hidden until reached
 *   shown   = in view, play the animation
 * Style children with Tailwind: give this wrapper `group`, then use
 * `group-data-[reveal=waiting]:...` for the hidden state. Plays once.
 */
export function RevealOnView({ children, threshold = 0.6, bottomOffset = "20%", ...rest }: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        } else {
          // Already on screen at load stays "idle" (no animation); off screen waits to be reached.
          setState((current) => (current === "idle" ? "waiting" : current));
        }
      },
      { threshold, rootMargin: `0px 0px -${bottomOffset} 0px` },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, bottomOffset]);

  return (
    <div ref={ref} data-reveal={state} {...rest}>
      {children}
    </div>
  );
}
