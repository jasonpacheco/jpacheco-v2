import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout/Layout';
import About from '../components/Site/about';

export default function AboutPage(): JSX.Element {
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
      </Helmet>
      <Layout withTitle="~/about">
        <About />
      </Layout>
    </div>
  );
}
