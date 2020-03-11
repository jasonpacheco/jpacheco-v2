import { useContext } from 'react';

import themeContext from './context/themeContext';
import { ThemeContextInterface } from './interfaces/theme';

const useThemeContext = (): ThemeContextInterface => {
  const ctx = useContext(themeContext);

  if (ctx === undefined) {
    throw new Error('useContext is undefined');
  }

  return ctx;
};

export default useThemeContext;
