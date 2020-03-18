import { Link } from 'gatsby';
import React from 'react';

import { StyledLink } from '../styles/shared.styled';

const ShellDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Welcome to shell@jpacheco.dev! Click{' '}
        <Link to="/home">
          <StyledLink>here</StyledLink>
        </Link>{' '}
        or type <code>noshell</code> if you prefer a webpage instead of an
        interactive shell. Type <code>help</code> for a list of available
        commands. Go forth and conquer!
      </p>
    </div>
  );
};

export default ShellDescription;
