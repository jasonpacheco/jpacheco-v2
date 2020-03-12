import React, { Fragment, useEffect, useRef } from 'react';

import useHistoryContext from '../../contextHooks/useHistoryContext';
import getQueryTime from '../../utils/getQueryTime';
import Query from '../Query/Query';
import { WindowContainer, WindowContent } from '../styles/Window';
import WindowTitleBar from './WindowTitleBar';

const Window = (): JSX.Element => {
  const { nodeList } = useHistoryContext();
  const queryEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (queryEndRef && queryEndRef.current) {
      queryEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [nodeList]);

  return (
    <WindowContainer>
      <WindowTitleBar />
      <WindowContent>
        {nodeList.map(({ nodeID, nodeComponent }) => (
          <Fragment key={nodeID}>{nodeComponent}</Fragment>
        ))}

        <Query queryTime={getQueryTime()} />
        <div ref={queryEndRef} />
      </WindowContent>
    </WindowContainer>
  );
};

export default Window;
