import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { AboutContainer, ParagraphWImage } from './styles/about';

export default function About(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "portrait.JPG" }) {
        childImageSharp {
          fixed(height: 125, width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
    <AboutContainer>
      <ParagraphWImage>
        <div>
          <h3>About the developer:</h3>
          <p>
            I&apos;m Jason, an up-and-coming frontend developer from Santa Ana,
            CA. My goals are simple: to create awesome and useful software!
          </p>
        </div>
        <div>
          <p>
            <Img
              alt="photo of developer"
              fixed={data.me.childImageSharp.fixed}
              imgStyle={{ borderRadius: '5px' }}
            />
          </p>
        </div>
      </ParagraphWImage>
      <p>
        As a kid, I loved firing up Notepad++ and designing small websites to
        show off to my friends and family. However, I took a brief 15-year
        hiatus due to conflicts of interest known as school and military
        service.
      </p>
      <p>
        I studied electrical engineering at Stanford where I specialized in
        image and signal processing. That&apos;s just a fancy way of saying that
        I spent too much time in MATLAB. Too too much time.
      </p>
      <p>
        After I graduated, I joined the Marine Corps. Probably the most
        questionable decision of my life, but it was an interesting one
        nonetheless. 5811: Can&apos;t spell CHUMP without MP, amirite?
      </p>
      <p>
        Somehow the stars aligned for me because I completed my service in the
        midst of a global pandemic and an economic downturn. On the bright side,
        the social distancing has worked in my favor since now I can focus on
        writing code and working towards my goals as a self-taught frontend
        developer{' '}
        <span aria-label="cool" role="img">
          😎
        </span>
        .
      </p>

      <ParagraphWImage>
        <p>Actual photo of me during my time in the Muhweenie Corps {'--->'}</p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=I7Kw8wV3oPo"
            title="Link to youtube"
          >
            <Img
              fixed={data.patrick.childImageSharp.fixed}
              imgStyle={{ borderRadius: '5px' }}
            />
          </a>
        </p>
      </ParagraphWImage>
    </AboutContainer>
  );
}
