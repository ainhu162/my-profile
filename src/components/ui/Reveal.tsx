import React from "react";
import { useInView } from "../../hooks/useInView";

type Direction = "up" | "left" | "right" | "scale";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const dirClass: Record<Direction, string> = {
  up: "",
  left: "reveal--left",
  right: "reveal--right",
  scale: "reveal--scale",
};

/** Wraps content and fades / slides it in when scrolled into view. */
export const Reveal: React.FC<Props> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${dirClass[direction]} ${
        inView ? "is-visible" : ""
      } ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
