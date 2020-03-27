import React from 'react';

import GithubIcon from '../../../assets/github.svg';
import { IconWrapper, Paragraph } from '../../shared.styled';
import SiteLink from '../shared/SiteLink';

export default function Fauxnitama(): JSX.Element {
  return (
    <div>
      <h1>Fauxnitama:</h1>
      <div>
        <Paragraph
          margin={0.5}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <SiteLink title="Demo" url="https://fauxnitama.jpacheco.dev/" />
          <span style={{ margin: '0 0.2rem' }} />
          <span>
            <a
              href="https://github.com/jasonpacheco/fauxnitama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper size="1.5">
                <GithubIcon />
              </IconWrapper>
            </a>{' '}
          </span>
        </Paragraph>
      </div>

      <div>
        <p>
          If you haven&apos;t heard of or played{' '}
          <SiteLink
            title="Onitama"
            url="https://www.arcanewonders.com/game/onitama/"
          />
          , you need to change that! It&apos;s a fantastic game with chess-like
          qualities, but unlike chess, it&apos;s entirely possible to win
          against a seasoned player if you&apos;re playing for the first time.
        </p>
        <p>
          The game is played on 5x5 board with five face-up cards in play. Each
          player begins with four student pieces, one master piece, and two move
          cards &mdash; the fifth card is swapped with the card a player made a
          move with. The game starts with a master on his or her temple and two
          students on each adjacent side of the master. The objective of the
          game is simple: capture the opposing master or use your master to
          capture your opponent&apos;s temple using the moves on the cards.
        </p>
        <p>
          Since I couldn&apos;t find many web implementations of Onitama, I took
          it upon on myself to create a React version of Onitama, called
          Fauxnitama (pronounced foe-knee-ta-ma).
        </p>
      </div>
      <h3>Features</h3>
      <div>
        <ul>
          <li>
            All Onitama original cards and{' '}
            <SiteLink
              title="expansion"
              url="https://www.arcanewonders.com/game/onitama/senseis-path/"
            />{' '}
            pack set
          </li>
          <li>Keyboard controls to select cards and move pieces</li>
          <li>Easy to visualize moves</li>
          <li>
            Moves notation similar to{' '}
            <SiteLink
              title="algebraic"
              url="https://en.wikipedia.org/wiki/Algebraic_notation_(chess)"
            />{' '}
            and{' '}
            <SiteLink
              title="Forsyth-Edwards"
              url="https://www.chessgames.com/fenhelp.html"
            />
          </li>
        </ul>
      </div>
      <h3>To do</h3>
      <div>
        <ul>
          <li>Rewrite the game using Canvas API and vanilla JS</li>
          <li>Mobile-first experience</li>
          <li>Smoother, improved UI with better animations and sounds</li>
          <li>Networking capabilities</li>
        </ul>
      </div>
      <h3>Discussion</h3>
      <div>
        <p>
          My game development experience is limited, very limited. I have
          created clones of Breakout and Tetris in Java, Snake in vanilla JS,
          and that&apos;s about it. I like React so it seemed like a novel idea
          to build Onitama with React. In retrospect, using React to make a game
          is like using a butcher&apos;s knife to chop down a tree &mdash; it
          will get the job done, but it&apos;s not the appropriate tool for the
          job.
        </p>
        <p>
          It was also my first major project using TypeScript. I did become a
          fan of TS by the end of it, but TS is too much of a bog on development
          speed. Intellisense makes developing apps in TypeScript worth the
          laborious effort to get a TS-enabled app up-and-running. I like going
          about the things the hard way so I committed to strict mode, which
          slowed me down a good bit as well.
        </p>
        <p>
          Foregoing the Canvas API to program the game in React made this
          project challenging. In my head, I felt it would be easier to manage
          individual components and board state as React components and Context
          state than rely on a traditional MVC pattern in plain JavaScript.
          While this decision made certain aspects a breeze, it also came back
          to haunt me as the project complexity grew.
        </p>
        <p>
          My first big mistake in using Context was keeping all my state in one,
          bloated game context. This was before I found out that Dan Abramov
          advises splitting state into{' '}
          <SiteLink
            title="multiple contexts"
            url="https://github.com/facebook/react/issues/15156#issuecomment-474590693"
          />
          . I also was not aware that accessing Context state triggers a new
          render. With many moving parts, it became clear why my laptop sounded
          like it was about to lift off during gameplay, despite my futile
          attempts to memoize as much as I could.
        </p>
        <p>
          Moreover, I kept encountering various race conditions which led me to
          ditch Context for Redux. The Redux solution achieved what I wanted and
          I was finally able to proceed to the next stage &mdash; the AI.
        </p>
        <p>
          My negamax implementation for AI has its quirks and headaches. To
          start, even with the optimized moves, the AI plays some pretty dumb
          moves. My master could be right in front of an opposing piece but the
          AI will make some dumb, non-capturing move even when it has the right
          cards to capture my vulnerable master. Then, in other situations, the
          AI will act like it knows what it&apos;s doing. The solution is
          probably more if statements, right?
        </p>
        <p>
          The most pressing issue with the negamax algorithm is best explained
          in this Github{' '}
          <SiteLink
            title="issue"
            url="https://github.com/jasonpacheco/fauxnitama/issues/1"
          />
          . It is not a game-breaking bug, but it totally ruins the purpose of
          an AI. I consider myself a perfectionist when it comes to personal
          projects, and to my dismay, I haven&apos;t been able to finish the
          game because of this bug. I am planning on a complete rewrite of the
          game from scratch in the near future.
        </p>
      </div>
    </div>
  );
}
