import React, { useEffect, useState } from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import useThemeContext from '../../contextHooks/useThemeContext';
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
  switchTheme: () => void,
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
            'cd',
            childDirectories,
            commandArguments,
            currentDirectory,
            changeDirectory,
          )}
        </>
      );
    case 'ls':
      return (
        <DirectoryChildren
          currentFullPath={currentDirectory}
          childDirectories={childDirectories}
          commandArguments={commandArguments}
        />
      );
    case 'help':
      return <Help />;
    case 'lights':
      switchTheme();
      return <></>;
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
  const { switchTheme } = useThemeContext();
  const [resultJSX, setResultJSX] = useState(<></>);

  useEffect(() => {
    setResultJSX(
      runCommand(
        command,
        remainingQuery,
        clearHistory,
        changeDirectory,
        childDirectories,
        currentDirectory,
        switchTheme,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resultJSX;
}
