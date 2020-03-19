import React from 'react';

import DirectoryState from '../contextHooks/state/directoryState';
import HistoryState from '../contextHooks/state/historyState';
import ThemeState from '../contextHooks/state/themeState';
import AppMount from './AppMount';
import HomeLayout from './HomeLayout';

export interface LayoutProps {
  children?: React.ReactNode;
  isAppVersion: boolean;
  withTitle?: string;
}

export default function Layout({
  children,
  isAppVersion,
  withTitle,
}: LayoutProps): JSX.Element {
  return (
    <React.StrictMode>
      <DirectoryState>
        <HistoryState>
          <ThemeState>
            {isAppVersion ? (
              <AppMount />
            ) : (
              <HomeLayout withTitle={withTitle}>{children}</HomeLayout>
            )}
          </ThemeState>
        </HistoryState>
      </DirectoryState>
    </React.StrictMode>
  );
}
