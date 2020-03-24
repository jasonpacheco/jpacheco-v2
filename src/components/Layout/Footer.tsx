import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import GitHubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin-alt.svg';
import { IconWrapper, Paragraph, StyledInnerLink } from '../shared.styled';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 0 auto;
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
      <Paragraph>
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
