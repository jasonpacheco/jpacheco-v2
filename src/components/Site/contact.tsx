import React from 'react';

import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { IconWrapper, StyledLink } from '../shared.styled';
import { InnerWrapper, OuterWrapper } from './contact.styled';

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
              <IconWrapper>
                <GithubIcon />
              </IconWrapper>
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
