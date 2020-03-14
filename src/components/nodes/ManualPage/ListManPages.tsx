import React from 'react';
import { v4 as uuid } from 'uuid';

import commandList, { CommandInterface } from '../../../utils/commandList';
import ManPage from './ManPage';

interface ListManPagesProps {
  commandArguments: string[];
}

const getCommand = (commandName: string): CommandInterface | string => {
  const result = commandList.filter(
    command => command.commandName === commandName,
  );

  if (result.length === 0) {
    return `man: No manual page for ${commandName}`;
  }

  return result[0];
};

export default function ListManPages({
  commandArguments,
}: ListManPagesProps): JSX.Element {
  return (
    <div>
      {commandArguments.map(arg => {
        if (arg === '') {
          return <p key={uuid()}>man: What manual page do you want?</p>;
        }

        const cmd = getCommand(arg);

        if (typeof cmd === 'string') {
          return <p key={uuid()}>{cmd}</p>;
        }

        return (
          <ManPage
            key={uuid()}
            command={cmd.commandName}
            commandBriefDescription={cmd.briefDescription}
            commandUsage={cmd.usage}
            commandFullDescription={cmd.fullDescription}
            commandExamples={cmd.examples}
          />
        );
      })}
    </div>
  );
}
