import { useState, useEffect } from 'react';

// Components
import { FiSun as SunIcon } from 'react-icons/fi';
import { HiOutlineMoon as MoonIcon } from 'react-icons/hi';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const classes = 'fill-black dark:fill-white w-8 h-8';

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <SunIcon className={classes} /> : <MoonIcon className={classes} />}
    </button>
  );
};

export { ThemeSwitcher };
