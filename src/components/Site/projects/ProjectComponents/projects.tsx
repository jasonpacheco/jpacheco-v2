import React from 'react';

import { StyledLink } from '../../../shared.styled';
import Project from './Project';
import { FlexWrapper, ProjectContainer } from './projects.styled';

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects:</h3>
      <Project
        name="Shell"
        description="A terminal-like shell version of this website because why not?"
        links={{
          demoLink: '/shell',
          repoName: 'jpacheco-v2/tree/master/src/components/nodes',
          projectPage: '/projects/shell',
        }}
        emoji="🐚"
      />
      <Project
        name="Fauxnitama"
        description="A React implementation of Onitama. Features keyboard controls,
        chess-like notation derived from algebraic and Forsyth-Edwards
        notation, and an AI developed using the negamax algorithm."
        links={{
          demoLink: '/',
          repoName: 'fauxnitama',
          projectPage: '/projects/fauxnitama',
        }}
        emoji="🀄️"
      />
      <Project
        name="Lowcountry Lawn Enforcement"
        description="A website I was commissioned for a friend's small business
        but was cancelled mid-development."
        links={{
          demoLink: '/',
          repoName: '',
          projectPage: '/projects/lle',
        }}
        emoji="🚨"
      />
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
