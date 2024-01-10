import { useState, useEffect } from 'react';

// Components
import { FiSun as SunIcon } from 'react-icons/fi';
import { FaMoon as MoonIcon } from 'react-icons/fa';


const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

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

  const classes = 'fill-black dark:fill-white w-6 h-6';

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <SunIcon className={classes} /> : <MoonIcon className={classes} />}
    </button>
  );
};

export { ThemeSwitcher };
