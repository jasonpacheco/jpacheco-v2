import React, { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import themeDark from '../../themeDark';
import themeLight from '../../themeLight';
import useLocalStorage from '../../utils/useLocalStorage';
import ThemeContext from '../context/themeContext';

type ThemeStateProps = {
  children: React.ReactNode;
};

const ThemeState = ({ children }: ThemeStateProps): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'dark');
  const currentStyledTheme = currentTheme === 'dark' ? themeDark : themeLight;

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      setCurrentTheme('light');
    }
    setHasMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hasMounted ? (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <StyledThemeProvider theme={currentStyledTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  ) : (
    // <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
    //   <div />
    //   <StyledThemeProvider theme={currentStyledTheme}>
    //     {children}
    //   </StyledThemeProvider>
    // </ThemeContext.Provider>
    <div />
  );
};

export default ThemeState;
