import React, { useEffect, useState } from "react";
import { navLinks, profile, sections, type SectionId } from "../constants/data";
import type { Theme, ThemeOrigin } from "../hooks/useTheme";

type Props = {
  theme: Theme;
  toggleTheme: (origin?: ThemeOrigin) => void;
};

const sectionIds = Object.keys(sections) as SectionId[];

/** Section crossing the middle of the viewport, or null in the hero. */
function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const id = e.target.id as SectionId;
          // Clear on leave too, so scrolling back up to the hero resets it.
          setActive((prev) => (e.isIntersecting ? id : prev === id ? null : prev));
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export const Navbar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const active = useActiveSection();
  const current = active ? sections[active] : null;
  const next = theme === "dark" ? "light" : "dark";

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <header className="border-b border-rule bg-paper md:sticky md:top-0 md:z-40">
      <nav className="mx-auto flex max-w-page flex-wrap items-baseline gap-x-6 gap-y-3 px-5 py-4 md:px-8">
        <a href="#top" className="font-serif text-xl">
          {profile.name}
        </a>

        {/* Running header: which section you're reading (desktop only) */}
        <span aria-hidden="true" className="label hidden min-w-[9rem] md:inline">
          {current && (
            <span key={active} className="swap-in inline-block border-l border-rule pl-4">
              {current.index} — {current.title}
            </span>
          )}
        </span>

        {/* Full-width second row on mobile, inline on desktop */}
        <ul className="order-last flex w-full gap-x-4 text-sm md:order-none md:ml-auto md:w-auto md:gap-x-6">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`nav-link transition-colors hover:text-ink ${
                    isActive ? "text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-baseline gap-5 text-sm md:ml-0">
          <a href={profile.cv} download className="link">
            CV (PDF)
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${next} mode`}
            className="label capitalize transition-colors hover:text-ink"
          >
            {next}
          </button>
        </div>
      </nav>
    </header>
  );
};
