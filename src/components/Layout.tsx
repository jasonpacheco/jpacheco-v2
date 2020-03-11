import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import HistoryState from '../contextHooks/state/historyState';
import ThemeState from '../contextHooks/state/themeState';
import AppMount from './AppMount';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <HistoryState>
        <ThemeState>
          <AppMount />
        </ThemeState>
      </HistoryState>
    </React.StrictMode>
  );
}
