import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Projects from '../components/Site/projects/projects';

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
      </Helmet>
      <Layout withTitle="jpacheco.dev">
        <div>
          <h1>Jason Pacheco</h1>
        </div>
        <Projects />
      </Layout>
    </div>
  );
}
