import { useLayoutEffect } from "react";

/**
 * Fade-up on scroll for every `[data-reveal]` element.
 *
 * Elements are visible by default. Before first paint we mark the current
 * ones `data-pending` (which the CSS hides) and remove the mark when each
 * scrolls into view. The mark is a plain attribute React doesn't manage, so
 * re-renders can't wipe it, and any element mounted later (hot reload,
 * conditional UI) simply shows without animating instead of staying hidden.
 */
export function useReveal() {
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.removeAttribute("data-pending");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    elements.forEach((el) => {
      el.setAttribute("data-pending", "");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.removeAttribute("data-pending"));
    };
  }, []);
}
