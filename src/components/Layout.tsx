import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../globalStyles';
import themeDark from '../themeDark';
import themeVariables from '../themeVariables';
import Window from './Window';

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
      <ThemeProvider theme={themeDark}>
        <GlobalStyles />
        <Window />
      </ThemeProvider>
    </React.StrictMode>
  );
}
