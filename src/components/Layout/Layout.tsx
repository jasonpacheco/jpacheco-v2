import React from 'react';

import { WindowContainer, WindowContent } from '../Window/window.styled';
import WindowTitleBar from '../Window/WindowTitleBar';
import Footer from './Footer';

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
        <WindowContent>{children}</WindowContent>
      </WindowContainer>
      <Footer />
    </React.StrictMode>
  );
}
