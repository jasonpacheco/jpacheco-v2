import React from 'react';

import { StyledLink } from '../styles/shared.styled';

export default function Version(): JSX.Element {
  return (
    <div>
      <h3>SHELL INFORMATION</h3>
      <div>
        <p>
          Thank you for using the shell version of my website. This shell is
          built with Gatsby and TypeScript. Icons are from{' '}
          <StyledLink href="https://icons8.com/">icons8.com</StyledLink>.
        </p>
        <p>
          Shell version: <code>1.0.0</code>
        </p>
        <p>
          Site version: <code>2.0</code>
        </p>
      </div>
      <div>
        <h3>CHANGELOG</h3>
        <div>
          <p>Initial release 2020-03-18</p>
        </div>
      </div>
    </div>
  );
}
