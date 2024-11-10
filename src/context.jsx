import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  const fromLocalStorage = localStorage.getItem('darkTheme');

  if (fromLocalStorage === null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return fromLocalStorage === 'true';
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState('warthog');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
// 9L8xBilZH72egnGVf_-iiXGRWBI1qVf8UFj139y7BuQ
