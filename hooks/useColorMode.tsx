import { useState, useEffect } from 'react';

const useColorMode = (initialValue: boolean) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage?.getItem('darkMode');
      return storedValue ? JSON.parse(storedValue) : initialValue ?? true;
    }
  });

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useColorMode;
