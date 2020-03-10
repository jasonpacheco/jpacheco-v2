import React, { Fragment, useState } from 'react';

import HomeIcon from '../assets/home-icon.svg';
import Query from './Query';
import QueryNode from './queryNode.interface';
import {
  WindowContainer,
  WindowContent,
  WindowOptionCircle,
  WindowOptionsContainer,
  WindowTitleBar,
  WindowTitleBarSpacer,
  WindowTitleContainer,
} from './styles/Window';

const WindowOptions = (): JSX.Element => {
  return (
    <WindowOptionsContainer>
      <WindowOptionCircle optionFor="exit" />
      <WindowOptionCircle optionFor="minimize" />
      <WindowOptionCircle optionFor="maximize" />
    </WindowOptionsContainer>
  );
};

const WindowTitle = (): JSX.Element => {
  return (
    <WindowTitleContainer>
      <p>
        <HomeIcon />
        jpacheco.dev
      </p>
    </WindowTitleContainer>
  );
};

const ShellDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Welcome to shell@jpacheco.dev! Click here or type <code>noshell</code>{' '}
        if you prefer a webpage instead of an interactive shell. Type{' '}
        <code>help</code> for a list of available commands. Go forth and
        conquer!
      </p>
    </div>
  );
};

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
      <WindowTitleBar>
        <WindowOptions />
        <WindowTitle />
        <WindowTitleBarSpacer />
      </WindowTitleBar>
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
