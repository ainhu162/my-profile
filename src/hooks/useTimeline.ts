import { RefObject, useEffect } from "react";

/**
 * Scroll-linked timeline. Sizes the track and fill lines to run from the first
 * to the last `[data-dot]` inside `wrapRef`, scales the fill by how far the
 * middle of the viewport has travelled along it, and marks every dot it has
 * passed with `data-on`. Does nothing while the dots are hidden (mobile).
 */
export function useTimeline(
  wrapRef: RefObject<HTMLElement>,
  trackRef: RefObject<HTMLElement>,
  fillRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!wrap || !track || !fill) return;

    const centre = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2;
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const dots = Array.from(wrap.querySelectorAll<HTMLElement>("[data-dot]"));
      if (dots.length < 2) return;

      const wrapTop = wrap.getBoundingClientRect().top;
      const start = centre(dots[0]) - wrapTop;
      const length = centre(dots[dots.length - 1]) - wrapTop - start;
      if (length <= 0) return; // dots are display:none

      for (const line of [track, fill]) {
        line.style.top = `${start}px`;
        line.style.height = `${length}px`;
      }

      const readingLine = window.innerHeight * 0.5;
      const progress = (readingLine - (wrapTop + start)) / length;
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
      dots.forEach((dot) => dot.toggleAttribute("data-on", centre(dot) <= readingLine));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    document.fonts?.ready.then(schedule); // web fonts shift the layout
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [wrapRef, trackRef, fillRef]);
}
