import React from 'react';

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
  return (
    <WindowContainer>
      <WindowTitleBar withTitle={withTitle || 'jpacheco.dev'} />
      <WindowContent>
        {children}
        <About />
      </WindowContent>
    </WindowContainer>
  );
}
