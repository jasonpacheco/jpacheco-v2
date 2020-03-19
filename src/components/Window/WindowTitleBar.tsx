import React from 'react';

import DirectoryIcon from '../../assets/directory-icon.svg';
import FileIcon from '../../assets/file-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import {
  WindowOptionCircle,
  WindowOptionsContainer,
  WindowTitleBarContainer,
  WindowTitleBarSpacer,
  WindowTitleContainer,
} from '../styles/Window';

const getType = (path: string): string => {
  if (path !== '~') {
    return 'directory';
  }

  if (path.endsWith('.tsx')) {
    return 'file';
  }

  return 'home';
};

type IconProps = {
  type?: string;
};
const Icon = ({ type }: IconProps): JSX.Element => {
  switch (type) {
    case 'directory':
      return (
        <span>
          <DirectoryIcon />
        </span>
      );
    case 'file':
      return (
        <span>
          <FileIcon />
        </span>
      );
    case 'home':
      return (
        <span>
          <HomeIcon />
        </span>
      );
    default:
      return <span />;
  }
};

const WindowOptions = (): JSX.Element => {
  return (
    <WindowOptionsContainer>
      <WindowOptionCircle optionFor="exit" />
      <WindowOptionCircle optionFor="minimize" />
      <WindowOptionCircle optionFor="maximize" />
    </WindowOptionsContainer>
  );
};

interface WindowTitleProps {
  withTitle: string;
}
const WindowTitle = ({ withTitle }: WindowTitleProps): JSX.Element => {
  return (
    <WindowTitleContainer>
      <p>
        <Icon type={getType(withTitle)} />
        {withTitle}
      </p>
    </WindowTitleContainer>
  );
};
interface WindowTitleBarProps {
  withTitle?: string;
}
const WindowTitleBar = ({ withTitle }: WindowTitleBarProps): JSX.Element => {
  return (
    <WindowTitleBarContainer>
      <WindowOptions />
      <WindowTitle withTitle={withTitle || '~'} />
      <WindowTitleBarSpacer />
    </WindowTitleBarContainer>
  );
};

export default WindowTitleBar;
