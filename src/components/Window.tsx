import React, { useState } from 'react';

import HomeIcon from '../assets/home-icon.svg';
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
        Welcome to shell@jpacheco.dev! Click here or type <pre>noshell</pre> if
        you prefer a webpage instead of an interactive shell. Type{' '}
        <pre>help</pre> for a list of available commands. Go forth and conquer!
      </p>
    </div>
  );
};

const Window = (): JSX.Element => {
  const [nodeList, setNodeList] = useState([
    {
      nodeID: 0,
      nodeComponent: ShellDescription,
    },
  ]);

  return (
    <WindowContainer>
      <WindowTitleBar>
        <WindowOptions />
        <WindowTitle />
        <WindowTitleBarSpacer />
      </WindowTitleBar>
      <WindowContent>
        {nodeList.map(node => (
          <node.nodeComponent />
        ))}
      </WindowContent>
    </WindowContainer>
  );
};

export default Window;
