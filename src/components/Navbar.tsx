import React, { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.svg";
import { navLinks, profile } from "../constants/data";
import type { Theme } from "../hooks/useTheme";

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Navbar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      setScrolled(window.scrollY > 16);
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? (root.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card py-1" : "py-2"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-grad-brand rounded-r-full"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <nav className="max-w-screen-lg mx-auto px-5 flex items-center h-14">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-lg"
        >
          <img src={logo} className="w-9 h-9" alt="Nhu Tu logo" />
          <span className="hidden sm:inline">
            {profile.shortName}
            <span className="text-grad">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/5 border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1 ml-auto md:ml-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center w-10 h-10 rounded-full glass hover:border-brand-violet/60 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-amber-300" />
            ) : (
              <MoonIcon className="w-5 h-5 text-brand-violet" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full glass"
          >
            {open ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass mx-3 mb-2 rounded-2xl p-2 flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
