import React from 'react';

import DirectoryState from '../contextHooks/state/directoryState';
import HistoryState from '../contextHooks/state/historyState';
import ThemeState from '../contextHooks/state/themeState';
import AppMount from './AppMount';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(): JSX.Element {
  return (
    <React.StrictMode>
      <DirectoryState>
        <HistoryState>
          <ThemeState>
            <AppMount />
          </ThemeState>
        </HistoryState>
      </DirectoryState>
    </React.StrictMode>
  );
}
