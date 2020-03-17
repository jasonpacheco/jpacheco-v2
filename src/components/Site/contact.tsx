import React from 'react';

import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { StyledLink } from '../styles/shared.styled';
import { GitColor, InnerWrapper, OuterWrapper } from './styles/contact';

export default function Contact(): JSX.Element {
  return (
    <div>
      <h4>Profiles:</h4>
      <OuterWrapper>
        <InnerWrapper>
          <p>
            <StyledLink
              href="https://github.com/jasonpacheco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>
          </p>{' '}
          <p>
            <a
              href="https://github.com/jasonpacheco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitColor>
                <GithubIcon />
              </GitColor>
            </a>
          </p>
        </InnerWrapper>
        <InnerWrapper>
          <p>
            <StyledLink
              href="https://www.linkedin.com/in/jason-pacheco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </StyledLink>
          </p>{' '}
          <p>
            <a
              href="https://www.linkedin.com/in/jason-pacheco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </p>
        </InnerWrapper>
      </OuterWrapper>
    </div>
  );
}
