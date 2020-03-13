import React from 'react';

export default function WhoModal(): JSX.Element {
  return (
    <div>
      <p>
        Hello, hola, <span aria-label="marhaba (Arabic for hello)">مرحبا</span>,{' '}
        <span aria-label="nihao (Mandarin Chinese for hello)">你好</span>!
        I&#39;m Jason. Like many preteens growing up in the myspace era, I
        accidentally stumbled into the world of web development while I was
        trying to learn how to design a{' '}
        <span aria-label="fire" role="img">
          🔥
        </span>{' '}
        myspace profile. I fell in love with the challenges and creativity of
        web design for the remainder of my absolutely glorious middle school
        years. After a brief ten-year hiatus due to the school-to-debt pipeline,
        (err... I meant the American education system), and an enlistment in the
        Marine Corps, I rekindled my interest in webdev.
      </p>

      <p>
        Unsurprisingly, I was well-behind the curve. What in the world is ES6,
        Node, and Webpack? I thought Babel was a tower and why are there a
        million and one tools that accomplish the same thing?? Is writing plain
        HTML, CSS, and vanilla JS a faux pas now??? There&#39;s still a lot that
        I don&#39;t understand about the JavaScript web ecosystem, but I&#39;m
        trying my best, <i>okay</i>?! Anyways, if you&#39;re really that bored,
        you can preview my autobiography in ~/about which will be direct-to-spam
        folder soon :)
      </p>
    </div>
  );
}
