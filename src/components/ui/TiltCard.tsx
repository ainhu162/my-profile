import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

/** A glass card that tilts in 3D toward the cursor with a moving glare. */
export const TiltCard: React.FC<Props> = ({
  children,
  className = "",
  max = 9,
  glare = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | undefined>(undefined);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const rx = (py - 0.5) * -2 * max;
      const ry = (px - 0.5) * 2 * max;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const handleEnter = () => {
    const el = ref.current;
    if (el)
      el.style.transition =
        "transform 0.08s ease-out, border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition =
      "transform 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease";
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group/tilt card card-hover ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {glare && <span className="tilt-glare" />}
      {children}
    </div>
  );
};
