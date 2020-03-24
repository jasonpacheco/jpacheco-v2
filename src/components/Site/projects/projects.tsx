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

type IconLinkProps = {
  name: string;
};
const IconLink = ({ name }: IconLinkProps): JSX.Element => (
  <Paragraph margin={0.5}>
    <a
      href={`https://github.com/jasonpacheco/${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWrapper size="1.5">
        <GithubIcon />
      </IconWrapper>
    </a>
  </Paragraph>
);

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects:</h3>
      <ProjectContainer>
        <h4>Shell</h4>
        <p>A terminal-like shell version of this website because why not?</p>
        <IconLink name="" />
      </ProjectContainer>
      <ProjectContainer>
        <h4>Fauxnitama</h4>
        <p>
          A React implementation of Onitama. Features keyboard controls,
          chess-like notation derived from algebraic and Forsyth-Edwards
          notation, and an AI developed using the negamax algorithm.
        </p>
        <IconLink name="fauxnitama" />
      </ProjectContainer>
      <ProjectContainer>
        <h4>Lowcountry Lawn Enforcement</h4>
        <p>
          A website I was commissioned for a friend&apos;s small business but
          was postponed due to the outbreak of SARS-CoV-2.
        </p>
        <IconLink name="" />
      </ProjectContainer>
      <ProjectContainer>
        <h4>EE168 Final Project</h4>
        <p>
          My teammates and I created a five minute-long, Stanford-themed,
          animated episode of SpongeBob. The kicker? It was created in MATLAB.
        </p>
        <p>
          <StyledLink
            href="https://web.stanford.edu/class/ee168/projects.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            External Link
          </StyledLink>
        </p>
      </ProjectContainer>
    </div>
  );
}
