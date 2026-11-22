import React from "react";
import { sections, type SectionId } from "../../constants/data";

/** Page-width container shared by every full-bleed band. */
export const container = "mx-auto max-w-page px-5 md:px-8";

type Props = {
  id: SectionId;
  /** "band" fills the section with a slightly darker paper tone. */
  tone?: "plain" | "band";
  children: React.ReactNode;
};

/**
 * Editorial section: a large serif title on an ink rule, the section number on
 * the right. On scroll-in the title rises out of a mask and the rule draws
 * left to right (see `[data-reveal="title"]` in index.css).
 */
export const Section: React.FC<Props> = ({ id, tone = "plain", children }) => {
  const { index, title } = sections[id];
  return (
    <section id={id} className={tone === "band" ? "bg-band" : undefined}>
      <div className={`${container} py-12 md:py-16`}>
        <header
          data-reveal="title"
          className="relative flex items-end justify-between gap-6 pb-4"
        >
          <h2 className="font-serif text-[40px] font-normal leading-none tracking-[-0.01em] md:text-[56px]">
            <span className="title-mask">
              <span>{title}</span>
            </span>
          </h2>
          <span className="index-fade font-mono text-sm text-accent">{index}</span>
          <span
            aria-hidden="true"
            className="rule-draw absolute inset-x-0 bottom-0 h-px bg-ink"
          />
        </header>
        <div className="pt-8 md:pt-10">{children}</div>
      </div>
    </section>
  );
};
