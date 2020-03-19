import React from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeContext from '../contextHooks/useThemeContext';
import GlobalStyles from '../globalStyles';
import themeDark from '../themeDark';
import themeLight from '../themeLight';
import About from './Site/about';
import { WindowContainer, WindowContent } from './styles/Window';
import WindowTitleBar from './Window/WindowTitleBar';

interface HomeLayoutProps {
  children: React.ReactNode;
  withTitle: string | undefined;
}

export default function HomeLayout({
  children,
  withTitle,
}: HomeLayoutProps): JSX.Element {
  const { isDarkTheme } = useThemeContext();

  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <GlobalStyles changeFont />
        <WindowContainer>
          <WindowTitleBar withTitle={withTitle || 'jpacheco.dev'} />
          <WindowContent>
            {children}
            <About />
          </WindowContent>
        </WindowContainer>
      </ThemeProvider>
    </div>
  );
}
