import React from 'react';
import { Helmet } from 'react-helmet';

import Window from '../components/Window/Window';

export default function Shell(): JSX.Element {
  return (
    <div>
      <Helmet titleTemplate="shell@jpacheco.dev">
        <meta name="description" content="Shell version of jpacheco.dev" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Helmet>
      <Window />
    </div>
  );
}
