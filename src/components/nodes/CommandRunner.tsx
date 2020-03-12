import React from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import processChangeDirectory from '../../utils/processChangeDirectory';
import DirectoryChildren from './DirectoryChildren';
import Help from './Help';

interface CommandRunnerProps {
  command: string;
  currentDirectory: string;
  childDirectories: string[];
  remainingQuery: string;
}

const runCommand = (
  command: string,
  remainingQuery: string,
  clearHistory: () => void,
  changeDirectory: (directory: string, childDirectories: string[]) => void,
  childDirectories: string[],
  currentDirectory: string,
): JSX.Element => {
  const commandArguments = remainingQuery.split(' ');

  switch (command) {
    case 'clear':
      clearHistory();
      return <></>;
    case 'cd':
      return (
        <>
          {processChangeDirectory(
            changeDirectory,
            childDirectories,
            commandArguments,
            currentDirectory,
          )}
        </>
      );
    case 'ls':
      return (
        <DirectoryChildren
          currentFullPath={currentDirectory}
          childDirectories={childDirectories}
        />
      );
    case 'help':
      return <Help />;
    default:
      return <></>;
  }
};

export default function CommandRunner({
  command,
  currentDirectory,
  childDirectories,
  remainingQuery,
}: CommandRunnerProps): JSX.Element {
  const { clearHistory } = useHistoryContext();
  const { changeDirectory } = useDirectoryContext();

  return React.useMemo(
    () =>
      runCommand(
        command,
        remainingQuery,
        clearHistory,
        changeDirectory,
        childDirectories,
        currentDirectory,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [command, childDirectories],
  );
}
