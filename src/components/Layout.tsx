import React from 'react';

import About from './Site/about';
import { WindowContainer, WindowContent } from './Window/window.styled';
import WindowTitleBar from './Window/WindowTitleBar';

export interface LayoutProps {
  children: React.ReactNode;
  withTitle: string;
}

export default function Layout({
  children,
  withTitle,
}: LayoutProps): JSX.Element {
  return (
    <React.StrictMode>
      <WindowContainer>
        <WindowTitleBar withTitle={withTitle || 'jpacheco.dev'} />
        <WindowContent>
          {children}
          <About />
        </WindowContent>
      </WindowContainer>
    </React.StrictMode>
  );
}
