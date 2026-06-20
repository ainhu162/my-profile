/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          violet: "#8b5cf6",
          purple: "#a855f7",
          fuchsia: "#d946ef",
          cyan: "#22d3ee",
          sky: "#38bdf8",
        },
        ink: {
          950: "#05060f",
          900: "#0a0b18",
          850: "#0e1022",
          800: "#13152b",
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.5)",
        card: "0 18px 50px -20px rgba(2,6,23,0.65)",
      },
      backgroundImage: {
        "grad-brand":
          "linear-gradient(120deg,#a855f7 0%,#8b5cf6 35%,#22d3ee 100%)",
        "grad-text":
          "linear-gradient(120deg,#e9d5ff 0%,#c4b5fd 30%,#a5f3fc 70%,#67e8f9 100%)",
      },
      keyframes: {
        "aurora-1": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(8vw,6vh) scale(1.25)" },
          "66%": { transform: "translate(-6vw,4vh) scale(0.9)" },
        },
        "aurora-2": {
          "0%,100%": { transform: "translate(0,0) scale(1.1)" },
          "33%": { transform: "translate(-10vw,-4vh) scale(0.85)" },
          "66%": { transform: "translate(6vw,-8vh) scale(1.2)" },
        },
        "aurora-3": {
          "0%,100%": { transform: "translate(-50%,-50%) scale(1)" },
          "50%": { transform: "translate(-46%,-54%) scale(1.3)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "aurora-1": "aurora-1 22s ease-in-out infinite",
        "aurora-2": "aurora-2 26s ease-in-out infinite",
        "aurora-3": "aurora-3 30s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
