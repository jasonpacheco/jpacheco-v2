import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../globalStyles';
import themeDark from '../themeDark';
import themeLight from '../themeLight';
import useThemeContext from './contextHooks/useThemeContext';
import Window from './Window';

const AppMount = (): JSX.Element => {
  const { isDarkTheme } = useThemeContext();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyles />
      <Window />
    </ThemeProvider>
  );
};

export default AppMount;
