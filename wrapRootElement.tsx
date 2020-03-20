import React from 'react';

import DirectoryState from './src/contextHooks/state/directoryState';
import HistoryState from './src/contextHooks/state/historyState';
import ThemeState from './src/contextHooks/state/themeState';
import GlobalStyles from './src/globalStyles';

interface RootProps {
  element: React.ReactNode;
}

const wrapRootElement = ({ element }: RootProps): JSX.Element => {
  return (
    <ThemeState>
      <DirectoryState>
        <HistoryState>
          <>
            <GlobalStyles />
            {element}
          </>
        </HistoryState>
      </DirectoryState>
    </ThemeState>
  );
};

export default wrapRootElement;
