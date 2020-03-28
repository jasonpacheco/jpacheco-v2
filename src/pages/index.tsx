import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout/Layout';
import Projects from '../components/Site/projects/ProjectComponents/projects';

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
      </Helmet>
      <Layout withTitle="~">
        <div>
          <h1>Jason Pacheco</h1>
        </div>
        <div>
          <p>
            I&apos;m a React developer, which means I like debugging more than I
            like creating.
          </p>
        </div>
        <Projects />
      </Layout>
    </div>
  );
}
