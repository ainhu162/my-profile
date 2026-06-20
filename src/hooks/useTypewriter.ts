import { useEffect, useState } from "react";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

/**
 * Cycle through a list of phrases with a type / delete effect.
 * Returns the currently visible substring.
 */
export function useTypewriter(words: string[], options: Options = {}) {
  const { typeSpeed = 70, deleteSpeed = 35, pause = 1500 } = options;
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplay((prev) =>
            deleting
              ? word.substring(0, prev.length - 1)
              : word.substring(0, prev.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return display;
}
