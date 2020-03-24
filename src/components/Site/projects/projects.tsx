import React from 'react';
import styled from 'styled-components';

import GithubIcon from '../../../assets/github.svg';
import { GitColor } from '../contact.styled';

export const ProjectContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects:</h3>
      <ProjectContainer>
        <p>Shell</p>
        <p>
          A terminal-like shell version of this website because why not? Limited
          feature set at the moment.
        </p>
        <p>
          <GitColor size="1.5">
            <GithubIcon />
          </GitColor>
        </p>
      </ProjectContainer>
      <ProjectContainer>
        <p>Fauxnitama</p>
        <p>
          A React implementation of Onitama. It comes complete with keyboard
          controls, move notation derived from chess algebraic and
          Forsyth-Edwards Notation, and an AI developed using the negamax
          algorithm. Development in progress.
        </p>
        <p>
          <GitColor size="1.5">
            <GithubIcon />
          </GitColor>
        </p>
      </ProjectContainer>
    </div>
  );
}
