import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { AboutContainer, ParagraphWImage } from './styles/about';

export default function About(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.JPG" }) {
        childImageSharp {
          fixed(height: 125, width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <AboutContainer>
      <ParagraphWImage>
        <div>
          <h3>About the developer:</h3>
          <p>
            I&apos;m Jason, a self-taught frontend developer with an unusual
            background in electrical engineering and the military. My goal as a
            developer is simple: to create awesome and useful software!
          </p>
        </div>
        <div>
          <Img
            alt="photo of developer"
            fixed={data.me.childImageSharp.fixed}
            imgStyle={{ borderRadius: '5px' }}
          />
        </div>
      </ParagraphWImage>
      <p>
        As a kid, I loved designing and creating cool little websites to show to
        my family and friends. However, I had trouble figuring out what I wanted
        to pursue a career in. Years later, I majored in electrical engineering
        where I specialized in image and signal processing - which is a fancy
        way of saying that I spent too much time in MATLAB. However, I found the
        massive time investment in EE as not worth it to me.
      </p>

      <p>
        After graduation, I joined the Marine Corps and served four years as a
        military policeman in South Carolina. Unlike college, I finally had some
        free time in the military to re-spark my interest in web development.
      </p>

      <p>
        After making my way through the vast jungle of post-Node.js JavaScript,
        I settled on working with React. I love how fast I can develop with
        React and it feels the most right to me. And yes, unlike many, I like
        JSX. So, I continue on my journey to grow my skills as a self-taught
        developer and hopefully make a fufilling career from it.
      </p>
    </AboutContainer>
  );
}
