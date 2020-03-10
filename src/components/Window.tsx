import React, { Fragment, useState } from 'react';

import ShellDescription from './nodes/ShellDescription';
import Query from './Query';
import QueryNode from './queryNode.interface';
import { WindowContainer, WindowContent } from './styles/Window';
import WindowTitleBar from './WindowTitleBar';

const Window = (): JSX.Element => {
  const [nodeList, setNodeList] = useState<QueryNode[]>([
    {
      nodeID: 0,
      nodeComponent: <ShellDescription />,
    },
  ]);

  const addQueryToHistory = (queryComponent: JSX.Element): void => {
    const nextID = nodeList[nodeList.length - 1].nodeID + 1;

    const node: QueryNode = {
      nodeID: nextID,
      nodeComponent: queryComponent,
    };

    setNodeList([...nodeList, node]);
  };

  return (
    <WindowContainer>
      <WindowTitleBar />
      <WindowContent>
        {nodeList.map(({ nodeID, nodeComponent }) => (
          <Fragment key={nodeID}>{nodeComponent}</Fragment>
        ))}

        <Query directory="~" addQueryToHistory={addQueryToHistory} />
      </WindowContent>
    </WindowContainer>
  );
};

export default Window;
