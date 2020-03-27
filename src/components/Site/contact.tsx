import React from 'react';

import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import { IconWrapper } from '../shared.styled';
import { InnerWrapper, OuterWrapper } from './contact.styled';
import SiteLink from './shared/SiteLink';

export default function Contact(): JSX.Element {
  return (
    <div>
      <h4>Profiles:</h4>
      <OuterWrapper>
        <InnerWrapper>
          <p>
            <SiteLink title="Github" url="https://github.com/jasonpacheco" />
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
            <SiteLink
              title="LinkedIn"
              url="https://www.linkedin.com/in/jason-pacheco/"
            />
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
