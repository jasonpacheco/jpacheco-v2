import React from 'react';
import styled from 'styled-components';

import GithubIcon from '../../../assets/github.svg';
import { IconWrapper, Paragraph } from '../../shared.styled';

export const ProjectContainer = styled.div`
  border: 1px solid ${(props): string => props.theme.colors.window.border};
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects:</h3>
      <ProjectContainer>
        <h4>Shell</h4>
        <p>
          A terminal-like shell version of this website because why not?
          Continually growing command set.
        </p>
        <Paragraph margin={0.5}>
          <a
            href="https://github.com/jasonpacheco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper size="1.5">
              <GithubIcon />
            </IconWrapper>
          </a>
        </Paragraph>
      </ProjectContainer>
      <ProjectContainer>
        <h4>Fauxnitama</h4>
        <p>
          A React implementation of Onitama. It comes complete with keyboard
          controls, move notation derived from chess algebraic and
          Forsyth-Edwards Notation, and an AI developed using the negamax
          algorithm. Development in progress.
        </p>
        <Paragraph margin={0.5}>
          <a
            href="https://github.com/jasonpacheco/fauxnitama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper size="1.5">
              <GithubIcon />
            </IconWrapper>
          </a>
        </Paragraph>
      </ProjectContainer>
    </div>
  );
}
