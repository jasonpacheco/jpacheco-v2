import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default function Links(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      patrick: file(relativePath: { eq: "weenie.jpg" }) {
        childImageSharp {
          fixed(height: 125, width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <h3>Links and other content:</h3>
      <div>
        <p>
          Since it&apos;s technically <i>my</i> website, I can put anything
          here, right?
        </p>
      </div>
      <div>
        <div>
          <p>The most accurate representation of my time in Corps:</p>
          <a
            href="https://www.youtube.com/watch?v=I7Kw8wV3oPo"
            title="Link to youtube"
          >
            <Img
              fixed={data.patrick.childImageSharp.fixed}
              imgStyle={{ borderRadius: '5px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
