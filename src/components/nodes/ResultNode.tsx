import React from 'react';

import { ValidationResult } from '../../utils/validateInput';
import CommandRunner from './CommandRunner';

interface ResultNodeProps {
  currentDirectory: string;
  data: ValidationResult;
}

const ResultNode = ({
  currentDirectory,
  data,
}: ResultNodeProps): JSX.Element => {
  const parseInvalidCommand = (commandName: string): string =>
    commandName === '' ? '' : `@@shell: Unknown command ${commandName}`;
  return (
    <>
      {data.isValidCommand ? (
        <CommandRunner
          command={data.commandName}
          currentDirectory={currentDirectory}
          remainingQuery={data.remainingQuery}
        />
      ) : (
        parseInvalidCommand(data.commandName)
      )}
    </>
  );
};

export default ResultNode;
