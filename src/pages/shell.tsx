import React from 'react';
import { Helmet } from 'react-helmet';

import Window from '../components/Window/Window';
import DirectoryState from '../contextHooks/state/directoryState';
import HistoryState from '../contextHooks/state/historyState';

export default function Shell(): JSX.Element {
  return (
    <div>
      <Helmet
        titleTemplate="shell@jpacheco.dev"
        defaultTitle="shell@jpacheco.dev"
      >
        <meta name="description" content="Shell version of jpacheco.dev" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Helmet>
      <DirectoryState>
        <HistoryState>
          <Window isShell />
        </HistoryState>
      </DirectoryState>
    </div>
  );
}
