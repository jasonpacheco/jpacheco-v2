/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

import GithubIcon from '../../../assets/github.svg';
import { IconWrapper, Paragraph, StyledLink } from '../../shared.styled';

export const ProjectContainer = styled.div`
  background-color: ${(props): string => props.theme.colors.site.background};
  border: 1px solid ${(props): string => props.theme.colors.window.border};
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    flex: 2;
  }
  div:last-child {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

type IconLinkProps = {
  demoLink: string;
  repoName: string;
};
const IconLink = ({ demoLink, repoName }: IconLinkProps): JSX.Element => (
  <Paragraph margin={0.5} style={{ display: 'flex', alignItems: 'center' }}>
    <span>
      <StyledLink
        href={`${demoLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </StyledLink>
    </span>
    <span style={{ margin: '0 0.2rem' }} />
    <span>
      <a
        href={`https://github.com/jasonpacheco/${repoName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWrapper size="1.5">
          <GithubIcon />
        </IconWrapper>
      </a>{' '}
    </span>
  </Paragraph>
);

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects:</h3>
      <ProjectContainer>
        <FlexWrapper>
          <div>
            <h4>Shell</h4>
            <p>
              A terminal-like shell version of this website because why not?
            </p>
            <IconLink
              demoLink="/shell"
              repoName="jpacheco-v2/tree/master/src/components/nodes"
            />
          </div>
          <div>
            <span aria-label="emoji for shell" role="img">
              🐚
            </span>
          </div>
        </FlexWrapper>
      </ProjectContainer>
      <ProjectContainer>
        <FlexWrapper>
          <div>
            <h4>Fauxnitama</h4>
            <p>
              A React implementation of Onitama. Features keyboard controls,
              chess-like notation derived from algebraic and Forsyth-Edwards
              notation, and an AI developed using the negamax algorithm.
            </p>
            <IconLink demoLink="/" repoName="fauxnitama" />
          </div>
          <div>
            <span aria-label="emoji for game" role="img">
              🀄️
            </span>
          </div>
        </FlexWrapper>
      </ProjectContainer>
      <ProjectContainer>
        <FlexWrapper>
          <div>
            <h4>Lowcountry Lawn Enforcement</h4>
            <p>
              A website I was commissioned for a friend&apos;s small business
              but was cancelled mid-development.
            </p>
            <IconLink demoLink="/" repoName="" />
          </div>
          <div>
            <span aria-label="emoji for law" role="img">
              🚨
            </span>
          </div>
        </FlexWrapper>
      </ProjectContainer>
      <ProjectContainer>
        <FlexWrapper>
          <div>
            <h4>EE168 Final Project</h4>
            {/* <div
              style={{
                width: '100%',
                height: '0px',
                position: 'relative',
                paddingBottom: '73.394%',
              }}
            >
              <iframe
                src="https://streamable.com/s/n4ped/etiwkv"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                style={{ width: '100%', height: ' 100%', position: 'absolute' }}
              />
            </div> */}
            <p>
              My teammates and I created a four minute-long, Stanford-themed,
              animated episode of SpongeBob. The kicker? It was created in
              MATLAB.
            </p>
            <p>
              <StyledLink
                href="https://web.stanford.edu/class/ee168/projects.shtml"
                target="_blank"
                rel="noopener noreferrer"
              >
                External Page
              </StyledLink>
              <span style={{ margin: '0 0.2rem' }} />
              <StyledLink
                href="https://streamable.com/n4ped"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Link
              </StyledLink>
            </p>
          </div>
          <div>
            <span aria-label="emoji for island" role="img">
              🏝
            </span>
          </div>
        </FlexWrapper>
      </ProjectContainer>
    </div>
  );
}
