import React, { useReducer } from 'react';

import ThemeContext from '../context/themeContext';
import { ThemeContextState } from '../interfaces/theme';
import themeReducer from '../reducers/themeReducer';

const varInStorage = window.localStorage.getItem('theme');
const initialState: ThemeContextState = {
  isDarkTheme: varInStorage ? varInStorage === 'dark' : true,
};

type ThemeStateProps = {
  children: React.ReactNode;
};

const ThemeState = ({ children }: ThemeStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const switchTheme = (): void => {
    dispatch({
      type: 'theme/switch',
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
