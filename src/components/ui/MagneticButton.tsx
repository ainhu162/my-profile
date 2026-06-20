import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "grad" | "ghost";
  strength?: number;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

/** Button / link that gently follows the cursor (magnetic effect). */
export const MagneticButton: React.FC<Props> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "grad",
  strength = 0.25,
  download,
  target,
  rel,
  ariaLabel,
}) => {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const cls = `${variant === "grad" ? "btn-grad" : "btn-ghost"} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cls}
    >
      {children}
    </button>
  );
};
