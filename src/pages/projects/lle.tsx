import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout/Layout';
import LawnEnforcement from '../../components/Site/projects/lle';

export default function LawnEnforcementPage(): JSX.Element {
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
      </Helmet>
      <Layout withTitle="~/projects/lle">
        <LawnEnforcement />
      </Layout>
    </div>
  );
}
