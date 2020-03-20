import React from 'react';

import ThemeState from './src/contextHooks/state/themeState';
import GlobalStyles from './src/globalStyles';

interface RootProps {
  element: React.ReactNode;
}

const wrapRootElement = ({ element }: RootProps): JSX.Element => {
  return (
    <ThemeState>
      <>
        <GlobalStyles />
        {element}
      </>
    </ThemeState>
  );
};

export default wrapRootElement;
