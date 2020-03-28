import React from 'react';

import Emoji from '../../shared/Emoji';
import SiteLink from '../../shared/SiteLink';
import Project from './Project';
import { FlexWrapper, ProjectContainer } from './projects.styled';

export default function Projects(): JSX.Element {
  return (
    <div>
      <h3>Projects</h3>
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
        notation, and an AI developed using negamax."
        links={{
          demoLink: 'https://fauxnitama.jpacheco.dev/',
          repoName: 'fauxnitama',
          projectPage: '/projects/fauxnitama',
        }}
        emoji="🀄️"
      />
      <Project
        name="Lowcountry Lawn Enforcement"
        description="A concept page for a friend's small business."
        links={{
          demoLink: 'https://lawnenforcement.jpacheco.dev',
          repoName: 'lawnenforcement',
          projectPage: '/projects/lle',
        }}
        emoji="🚨"
      />
      <ProjectContainer>
        <FlexWrapper>
          <div>
            <h4>Hennessey&apos;d</h4>
            <p>
              Final project for an image processing course. A four minute-long,
              crudely-animated episode of SpongeBob... created in MATLAB.
            </p>
            <p>
              <SiteLink
                title="Course Page"
                url="https://web.stanford.edu/class/ee168/projects.shtml"
              />
              <span style={{ margin: '0 0.2rem' }} />
              <SiteLink title="Streamable" url="https://streamable.com/n4ped" />
            </p>
          </div>
          <div>
            <Emoji emoji="🏝" label="emoji for island" />
          </div>
        </FlexWrapper>
      </ProjectContainer>
    </div>
  );
}
