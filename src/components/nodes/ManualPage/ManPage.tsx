import React from 'react';
import { v4 as uuid } from 'uuid';

import { ManualTitle, SectionContents, StyledCommand } from './styled';

interface ManPageProps {
  command: string;
  commandBriefDescription: string;
  commandUsage: string;
  commandFullDescription: string;
  commandExamples?: {
    commandUsage: string;
    usageDescription: string;
  }[];
}

const styleCommand = (
  command: string,
  commandFullDescription: string,
): (string | JSX.Element)[] => {
  return commandFullDescription.split(' ').map((word): string | JSX.Element => {
    if (word.startsWith('{cmd}')) {
      const rest = word.slice(word.indexOf('}') + 1);
      return (
        <span key={uuid()}>
          <StyledCommand>{`${command}`}</StyledCommand>
          {`${rest} `}
        </span>
      );
    }
    return `${word} `;
  });
};

export default function ManPage({
  command,
  commandBriefDescription,
  commandUsage,
  commandFullDescription,
  commandExamples,
}: ManPageProps): JSX.Element {
  return (
    <div>
      <ManualTitle>
        <h3>
          {command} :: Shell Commands Manual :: {command}
        </h3>
      </ManualTitle>
      <div>
        <h4>NAME</h4>
        <SectionContents>
          <StyledCommand>{command}</StyledCommand> -- {commandBriefDescription}
        </SectionContents>
      </div>
      <div>
        <h4>SYNOPSIS</h4>
        <SectionContents>
          <StyledCommand>{command}</StyledCommand> {commandUsage}
        </SectionContents>
      </div>
      <div>
        <h4>DESCRIPTION</h4>
        <SectionContents>
          {styleCommand(command, commandFullDescription)}
        </SectionContents>
      </div>
      {commandExamples ? (
        <div>
          <h4>EXAMPLES</h4>

          <div>
            {commandExamples.map(example => (
              <React.Fragment key={uuid()}>
                <SectionContents>
                  <StyledCommand>{command}</StyledCommand>{' '}
                  {example.commandUsage}
                </SectionContents>
                <p style={{ marginLeft: '5rem' }}>{example.usageDescription}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
