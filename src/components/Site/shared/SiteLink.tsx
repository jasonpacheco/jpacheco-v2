import { Link } from 'gatsby';
import React from 'react';

import { StyledInnerLink, StyledLink } from '../../shared.styled';

type SiteLinkProps = {
  title: string;
  url: string;
  isGatsbyLink?: boolean;
};

export default function SiteLink({
  title,
  url,
  isGatsbyLink = false,
}: SiteLinkProps): JSX.Element {
  return !isGatsbyLink ? (
    <StyledLink href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </StyledLink>
  ) : (
    <StyledInnerLink>
      <Link to={url}>{title}</Link>
    </StyledInnerLink>
  );
}
