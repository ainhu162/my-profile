import React, { useState } from "react";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconLeetcode from "../assets/icon-leetcode.png";
import { useEffect } from "react";

const Widget: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (document.documentElement.scrollTop < 10) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <ul
      className={`fixed sm:right-1 sm:bottom-1 ${
        !show && "sm:hidden"
      } lg:right-auto lg:block lg:bottom-auto lg:left-4 lg:top-1/3 bg-white dark:bg-slate-600 rounded-lg p-2 ring-1 ring-slate-900/5 shadow-xl`}
    >
      <li>
        <a href="https://www.linkedin.com/in/nhutu">
          <img
            className="w-8"
            alt="linkedin"
            src={iconLinkedin}
            title="linkedin"
          />
        </a>
      </li>
      <li className="my-3">
        <a href="https://github.com/ainhu162">
          <img className="w-8" alt="github" src={iconGithub} title="github" />
        </a>
      </li>
      <li>
        <a href="https://leetcode.com/nhutu/">
          <img
            className="w-8"
            alt="leetcode"
            src={iconLeetcode}
            title="leetcode"
          />
        </a>
      </li>
    </ul>
  );
};

export default Widget;
