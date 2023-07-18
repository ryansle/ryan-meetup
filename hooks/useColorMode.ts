import { useState, useEffect } from 'react';

const useColorMode = () => {
  // Default the app to dark mode
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Load theme from local storage on initial render
  useEffect(() => {
    const colorMode = localStorage.getItem('darkMode');

    if (colorMode != null) {
      console.log('setter')
      setDarkMode(JSON.parse(colorMode));
    }
  }, []);

  // Update local storage instance whenever we make changes to our theme
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleColorMode = () => {
    setDarkMode((previous) => !previous);
  };

  return { darkMode, toggleColorMode };
};

export default useColorMode;
