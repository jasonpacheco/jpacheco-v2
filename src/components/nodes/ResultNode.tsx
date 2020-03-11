import React from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import { ValidationResult } from '../../utils/validateInput';
import DirectoryChildren from './DirectoryChildren';
import Help from './Help';

interface ResultNodeProps {
  data: ValidationResult;
}

const ResultNode = ({ data }: ResultNodeProps): JSX.Element => {
  const { clearHistory } = useHistoryContext();
  const { currentDirectory } = useDirectoryContext();

  const runCommand = (command: string): JSX.Element => {
    switch (command) {
      case 'clear':
        clearHistory();
        return <></>;
      case 'cd':
        return <></>;
      case 'ls':
        return <DirectoryChildren currentFullPath={currentDirectory} />;
      case 'help':
        return <Help />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      {!data.isValidCommand
        ? `@@shell: Unknown command ${data.commandName}`
        : runCommand(data.commandName)}
    </div>
  );
};

export default ResultNode;
