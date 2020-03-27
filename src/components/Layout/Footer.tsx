import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import EmailIcon from '../../assets/email.svg';
import GitHubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin-alt.svg';
import {
  IconWrapper,
  Paragraph,
  StyledInnerLink,
  StyledLink,
} from '../shared.styled';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  p {
    padding: 0 1rem;
  }
  width: 95%;
  @media (min-width: 768px) {
    width: 729px;
  }
`;

export const IconLinksWrapper = styled.span`
  display: flex;
`;

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Paragraph>
        <StyledInnerLink>
          <Link to="/">Home</Link>
        </StyledInnerLink>{' '}
        |{' '}
        <StyledInnerLink>
          <Link to="/about">About</Link>
        </StyledInnerLink>
      </Paragraph>

      <Paragraph>
        <span style={{ position: 'relative', top: '-0.4rem' }}>
          <StyledLink href="mailto:jason@jpacheco.dev">
            jason@jpacheco.dev
          </StyledLink>
        </span>
        <span style={{ margin: '0 0.3rem' }} />
        <IconWrapper size="1.8">
          <EmailIcon />
        </IconWrapper>
        <span style={{ margin: '0 0.1rem' }} />
        <a
          href="https://github.com/jasonpacheco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper size="1.8">
            <GitHubIcon />
          </IconWrapper>
        </a>
        <span style={{ margin: '0 0.1rem' }} />
        <a
          href="https://www.linkedin.com/in/jason-pacheco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper size="1.8">
            <LinkedInIcon />
          </IconWrapper>
        </a>
      </Paragraph>
    </FooterWrapper>
  );
}
