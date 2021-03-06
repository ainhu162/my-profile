import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import logo from './../assets/logo.svg';

const LIGHT = 'light';
const DARK = 'dark';
const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(localStorage.theme === DARK);

  useEffect(() => {
    addClassDarkMode(localStorage.theme === DARK);
  }, []);

  const setModeVisible = (): void => {
    const isDarkMode = localStorage.theme === DARK;
    addClassDarkMode(!isDarkMode); // add class
    localStorage.theme = isDarkMode ? LIGHT : DARK; // store theme
    setIsDark(!isDarkMode); // set state
  };

  const addClassDarkMode = (isDarkMode: boolean): boolean => {
    if (
      isDarkMode ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }

    return isDarkMode;
  };

  return (
    <div className="fixed z-10 left-0 top-0 w-full py-1.5 bg-indigo-50 shadow-md dark:shadow-neutral-900 dark:bg-slate-900">
      <div className="container mx-auto flex items-center">
        <img src={logo} alt="logo-frontend" className="w-16" />
        {isDark ? (
          <MoonIcon
            onClick={setModeVisible}
            className="cursor-pointer hover:text-indigo-500 h-8 w-8 text-indigo-100 ml-auto"
          />
        ) : (
          <SunIcon
            onClick={setModeVisible}
            className="cursor-pointer hover:text-indigo-500 h-8 w-8 text-slate-900 ml-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
