import React, { useLayoutEffect, useRef } from 'react';

import useHistoryContext from '../../contextHooks/useHistoryContext';
import getQueryTime from '../../utils/getQueryTime';
import ManPage from '../Nodes/ManualPage/ManPage';
import Query from '../Query/Query';
import { WindowContainer, WindowContent } from '../styles/Window';
import WindowTitleBar from './WindowTitleBar';

export default function Window(): JSX.Element {
  const { nodeList } = useHistoryContext();
  const queryEndRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (queryEndRef && queryEndRef.current) {
        queryEndRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 50);
  }, [nodeList]);

  return (
    <WindowContainer>
      <WindowTitleBar />
      <WindowContent>
        <div>
          {nodeList.map(({ nodeID, nodeComponent }) => (
            <div key={nodeID}>{nodeComponent}</div>
          ))}
        </div>

        <Query queryTime={getQueryTime()} />
        <div ref={queryEndRef} />
      </WindowContent>
    </WindowContainer>
  );
}
