/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "560px",
      md: "820px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      // Theme tokens live in index.css so light/dark swap in one place.
      colors: {
        paper: "var(--bg)",
        band: "var(--band)",
        ink: "var(--text)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        accent: "var(--accent)",
      },
      maxWidth: {
        page: "1040px",
      },
    },
  },
  plugins: [],
};
