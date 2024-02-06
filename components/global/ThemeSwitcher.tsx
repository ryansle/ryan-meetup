// Components
import { FiSun as SunIcon } from 'react-icons/fi';
import { FaMoon as MoonIcon } from 'react-icons/fa';

// Utilities
import useColorMode from '@/hooks/useColorMode';


const ThemeSwitcher = () => {
  const [darkMode, toggleDarkMode] = useColorMode();

  const classes = 'fill-black dark:fill-white w-6 h-6';

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <SunIcon className={classes} /> : <MoonIcon className={classes} />}
    </button>
  );
};

export { ThemeSwitcher };
