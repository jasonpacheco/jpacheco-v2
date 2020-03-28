import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { AboutContainer, ImageContainer } from './about.styled';

export default function About(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "me.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AboutContainer>
      <ImageContainer>
        <Img
          alt="photo of developer"
          fluid={data.mobile.childImageSharp.fluid}
          imgStyle={{ borderRadius: '5px' }}
        />
      </ImageContainer>
      <div>
        <h3>About the developer</h3>
        <p>
          I&apos;m Jason, a self-taught frontend developer with electrical
          engineering and military experience. My goal as a developer is simple:
          to create awesome and useful software!
        </p>
      </div>
      <div style={{ clear: 'both' }} />
    </AboutContainer>
  );
}
