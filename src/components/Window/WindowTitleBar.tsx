import React from 'react';

import HomeIcon from '../../assets/home-icon.svg';
import {
  WindowOptionCircle,
  WindowOptionsContainer,
  WindowTitleBarContainer,
  WindowTitleBarSpacer,
  WindowTitleContainer,
} from '../styles/Window';

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

const WindowTitleBar = (): JSX.Element => {
  return (
    <WindowTitleBarContainer>
      <WindowOptions />
      <WindowTitle />
      <WindowTitleBarSpacer />
    </WindowTitleBarContainer>
  );
};

export default WindowTitleBar;
