import { useCallback, useContext } from 'react';

import themeContext from './context/themeContext';
import { ThemeContextProps } from './interfaces/theme';

interface UseThemeHook {
  currentTheme: string;
  toggleTheme: () => void;
}

const useThemeContext = (): UseThemeHook => {
  const ctx = useContext<ThemeContextProps | undefined>(themeContext);

  if (!ctx) {
    throw new Error('useThemeContext is undefined');
  }

  const { currentTheme, setCurrentTheme } = ctx;

  const toggleTheme = useCallback(() => {
    if (currentTheme === 'dark') setCurrentTheme('light');
    else if (currentTheme === 'light') setCurrentTheme('dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return {
    currentTheme,
    toggleTheme,
  };
};

export default useThemeContext;
