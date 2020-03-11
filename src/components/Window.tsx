import React, { Fragment } from 'react';

import getQueryTime from '../utils/getQueryTime';
import useHistoryContext from './contextHooks/useHistoryContext';
import Query from './Query';
import { WindowContainer, WindowContent } from './styles/Window';
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

        <Query directory="~" queryTime={getQueryTime()} />
      </WindowContent>
    </WindowContainer>
  );
};

export default Window;
