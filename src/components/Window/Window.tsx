import React, { Fragment } from 'react';

import useHistoryContext from '../../contextHooks/useHistoryContext';
import getQueryTime from '../../utils/getQueryTime';
import Query from '../Query/Query';
import { WindowContainer, WindowContent } from '../styles/Window';
import WindowTitleBar from './WindowTitleBar';

const Window = (): JSX.Element => {
  const { nodeList } = useHistoryContext();

  return (
    <WindowContainer>
      <WindowTitleBar />
      <WindowContent>
        {nodeList.map(({ nodeID, nodeComponent }) => (
          <Fragment key={nodeID}>{nodeComponent}</Fragment>
        ))}

        <Query queryTime={getQueryTime()} />
      </WindowContent>
    </WindowContainer>
  );
};

export default Window;
