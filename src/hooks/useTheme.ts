import { useCallback, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "dark" | "light";
/** Viewport point the theme change spreads out from (e.g. the toggle). */
export type ThemeOrigin = { x: number; y: number };

const THEME_COLOR: Record<Theme, string> = { light: "#f5f3ee", dark: "#161513" };

// View Transitions API isn't in this TypeScript version's DOM types yet.
type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  // Light by default; follow the OS only when it asks for dark.
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Layout effect so the class is on <html> by the time flushSync returns,
  // which is when the view transition takes its "after" snapshot.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[theme]);
  }, [theme]);

  /**
   * Flip the theme. Given an origin, the new theme grows out of that point as
   * a circle where the browser supports view transitions; otherwise (or with
   * reduced motion) it switches instantly.
   */
  const toggle = useCallback((origin?: ThemeOrigin) => {
    const flip = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    const doc = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!origin || !doc.startViewTransition || reduceMotion) {
      flip();
      return;
    }

    const { x, y } = origin;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    doc
      .startViewTransition(() => flushSync(flip))
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          } as KeyframeAnimationOptions
        );
      })
      .catch(() => {
        /* transition skipped — the theme has still flipped */
      });
  }, []);

  return { theme, toggle };
}
