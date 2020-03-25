import { Link } from 'gatsby';
import React from 'react';

import GithubIcon from '../../../../assets/github.svg';
import {
  IconWrapper,
  Paragraph,
  StyledInnerLink,
  StyledLink,
} from '../../../shared.styled';
import { FlexWrapper, ProjectContainer } from './projects.styled';

type IconLinkProps = {
  demoLink: string;
  repoName: string;
  projectPage: string;
};

const IconLink = ({
  demoLink,
  repoName,
  projectPage,
}: IconLinkProps): JSX.Element => (
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
    <StyledInnerLink>
      <Link to={projectPage}>Project Page</Link>
    </StyledInnerLink>
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

type ProjectLinks = {
  demoLink: string;
  repoName: string;
  projectPage: string;
};

interface ProjectProps {
  name: string;
  description: string;
  links: ProjectLinks;
  emoji: string;
}

export default function Project({
  name,
  description,
  links: { demoLink, repoName, projectPage },
  emoji,
}: ProjectProps): JSX.Element {
  return (
    <ProjectContainer>
      <FlexWrapper>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
          <IconLink
            demoLink={demoLink}
            repoName={repoName}
            projectPage={projectPage}
          />
        </div>
        <div>
          <span aria-label={`emoji symbol for project ${name}`} role="img">
            {emoji}
          </span>
        </div>
      </FlexWrapper>
    </ProjectContainer>
  );
}
