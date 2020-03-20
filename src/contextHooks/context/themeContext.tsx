import { createContext } from 'react';

import { ThemeContextProps } from '../interfaces/theme';

const themeContext = createContext<ThemeContextProps | undefined>(undefined);

export default themeContext;
