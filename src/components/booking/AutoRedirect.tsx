"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type AutoRedirectProps = {
  to: string;
  afterMs: number;
};

/**
 * Sends the visitor to `to` after `afterMs`. Uses replace, so the back button
 * skips the page this is on instead of landing on it again.
 *
 * If the page has been opened inside a frame (Tally's redirect can load it inside the
 * /contact form frame), it first takes over the whole window so the visitor sees it full screen.
 */
export function AutoRedirect({ to, afterMs }: AutoRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (window.self !== window.top) {
      try {
        window.top?.location.replace(window.location.href);
        return;
      } catch {
        // Parent is on another domain and can't be changed: carry on inside the frame.
      }
    }

    const timer = window.setTimeout(() => router.replace(to), afterMs);
    return () => window.clearTimeout(timer);
  }, [router, to, afterMs]);

  return null;
}
