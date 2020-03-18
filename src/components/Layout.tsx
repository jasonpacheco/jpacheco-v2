import React from 'react';

import DirectoryState from '../contextHooks/state/directoryState';
import HistoryState from '../contextHooks/state/historyState';
import ThemeState from '../contextHooks/state/themeState';
import AppMount from './AppMount';
import HomeLayout from './HomeLayout';

export interface LayoutProps {
  children?: React.ReactNode;
  isAppVersion: boolean;
}

export default function Layout({
  children,
  isAppVersion,
}: LayoutProps): JSX.Element {
  return (
    <React.StrictMode>
      <DirectoryState>
        <HistoryState>
          <ThemeState>
            {isAppVersion ? <AppMount /> : <HomeLayout>{children}</HomeLayout>}
          </ThemeState>
        </HistoryState>
      </DirectoryState>
    </React.StrictMode>
  );
}
