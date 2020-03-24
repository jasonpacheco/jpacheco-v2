import React, { useLayoutEffect, useRef } from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import getQueryTime from '../../utils/getQueryTime';
import useLockBodyScroll from '../../utils/useLockBodyScroll';
import Query from '../Query/Query';
import { WindowContainer, WindowContent } from './window.styled';
import WindowTitleBar from './WindowTitleBar';

type WindowProps = {
  isShell?: boolean;
};
export default function Window({ isShell }: WindowProps): JSX.Element {
  const { nodeList } = useHistoryContext();
  const { currentDirectory } = useDirectoryContext();
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
  useLockBodyScroll();
  return (
    <WindowContainer isShell={isShell}>
      <WindowTitleBar withTitle={currentDirectory} />
      <WindowContent isShell={isShell}>
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
