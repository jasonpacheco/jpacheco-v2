import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

export default function Home(): JSX.Element {
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
        defaultTitle="Jason Pacheco | Home"
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Layout isAppVersion={false} withTitle="~/home">
        <div>
          <h1>Jason Pacheco</h1>
        </div>
      </Layout>
    </div>
  );
}
