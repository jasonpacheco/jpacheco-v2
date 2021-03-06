import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import DirectoryIcon from '../../assets/directory-icon.svg';
import FileIcon from '../../assets/file-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import useThemeContext from '../../contextHooks/useThemeContext';
import {
  WindowOptionCircle,
  WindowOptionsContainer,
  WindowTitleBarContainer,
  WindowTitleBarSpacer,
  WindowTitleContainer,
} from './window.styled';

const getType = (path: string): string => {
  if (path !== '~' && path !== 'jpacheco.dev') {
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
  let icon;
  if (type === 'directory') {
    icon = <DirectoryIcon />;
  } else if (type === 'file') {
    icon = <FileIcon />;
  } else {
    icon = <HomeIcon />;
  }
  return <span>{icon}</span>;
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
      <Icon type={getType(withTitle)} />
      <span> &mdash; {withTitle}</span>
    </WindowTitleContainer>
  );
};

interface WindowTitleBarProps {
  withTitle?: string;
}
const WindowTitleBar = ({ withTitle }: WindowTitleBarProps): JSX.Element => {
  const { currentTheme, toggleTheme } = useThemeContext();

  const data = useStaticQuery(graphql`
    query {
      light: file(relativePath: { eq: "sun.png" }) {
        childImageSharp {
          fixed(height: 14, width: 14) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dark: file(relativePath: { eq: "moon.png" }) {
        childImageSharp {
          fixed(height: 14, width: 14) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <WindowTitleBarContainer>
      <WindowOptions />
      <WindowTitle withTitle={withTitle || '~'} />
      <WindowTitleBarSpacer>
        <span
          onClick={toggleTheme}
          onKeyUp={(): void => {}}
          role="button"
          tabIndex={-1}
        >
          <Img
            fixed={
              data[currentTheme === 'dark' ? 'light' : 'dark'].childImageSharp
                .fixed
            }
            alt="light mode"
          />
        </span>
      </WindowTitleBarSpacer>
    </WindowTitleBarContainer>
  );
};

export default WindowTitleBar;
