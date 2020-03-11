import { createContext } from 'react';

import { ThemeContextInterface } from '../interfaces/theme';

const themeContext = createContext<ThemeContextInterface | undefined>(
  undefined,
);

export default themeContext;
