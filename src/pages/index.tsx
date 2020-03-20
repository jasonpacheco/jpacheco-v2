import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

export default function IndexPage(): JSX.Element {
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
    <div>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <noscript>
          {`

          <meta http-equiv="refresh" content="0; url=/home" />
        `}
        </noscript>
      </Helmet>
      <Layout withTitle="~">
        <div>
          <h1>Jason Pacheco</h1>
        </div>
      </Layout>
    </div>
  );
}
