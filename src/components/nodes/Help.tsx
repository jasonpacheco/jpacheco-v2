import React from 'react';

import { CommandInterface } from '../../utils/commandList';

interface HelpProps {
  commandList: CommandInterface[];
}

const Help = ({ commandList }: HelpProps): JSX.Element => {
  return (
    <>
      <div>
        <p>
          This is the help page for shell@jpacheco.dev, a commandline-like shell
          for browsing the webpage at https://jpacheco.dev. To browse the site,
          provide the shell with any of the commands below, and for more
          information about what each command does, type{' '}
          <code>man {`<command-name>`}</code>.
        </p>
      </div>
      <div>
        <ul>
          {commandList.map(command => (
            <li key={command.id}>
              <code>{command.commandName}</code>, {command.helpDescription}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Help;
