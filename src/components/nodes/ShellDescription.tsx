import { Link } from 'gatsby';
import React from 'react';

import { StyledInnerLink } from '../shared.styled';

const ShellDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Welcome to the shell for{' '}
        <StyledInnerLink>
          <Link to="/">https://jpacheco.dev</Link>
        </StyledInnerLink>
        , the website for frontend developer, Jason Pacheco.
      </p>
      <p>
        Click{' '}
        <StyledInnerLink>
          <Link to="/">here</Link>
        </StyledInnerLink>{' '}
        or type <code>noshell</code> if you prefer the non-interactive version
        of my site. Type <code>help</code> for a list of available commands.
      </p>
    </div>
  );
};

export default ShellDescription;
