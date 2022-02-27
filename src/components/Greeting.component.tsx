import React, { useEffect } from "react";
import { texts } from "../constants/data";

const Greeting: React.FC = () => {
  let i = 0;
  let nextText = 0;

  useEffect(() => {
    typeWriter();
  }, []);

  const typeWriter = () => {
    const item = texts[nextText];
    const { id, txt } = item;
    if (!item) return;
    if (i < txt.length) {
      document.getElementById(id)!.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else {
      i = 0;
      nextText++;
      setTimeout(typeWriter, 50);
    }
  };
  return (
    <div style={{ minHeight: 120 }}>
      <p className="text-slate-900 dark:text-indigo-50" id="greeting"></p>
      <p
        className="text-slate-900 dark:text-indigo-50 text-4xl my-4"
        id="name"
      ></p>
      <p className="text-slate-700 dark:text-indigo-100 italic" id="job"></p>
    </div>
  );
};

export default Greeting;
