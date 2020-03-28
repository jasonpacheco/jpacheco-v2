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
  @media (max-width: 510px) {
    flex-wrap: wrap;
    p:nth-child(2) {
      order: 3;
    }
  }
  p {
    padding: 0 1rem;
  }
  width: 95%;
  @media (min-width: 768px) {
    width: 729px;
  }
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
      <Paragraph style={{ fontSize: '0.8rem' }}>
        &quot;We must dare to invent the future.&quot;
        <br />
        <i>Thomas Sankara</i>
      </Paragraph>
      <Paragraph>
        <StyledLink href="mailto:jason@jpacheco.dev">
          <IconWrapper size="1.8">
            <EmailIcon />
          </IconWrapper>
        </StyledLink>
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
