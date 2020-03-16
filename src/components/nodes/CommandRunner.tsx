import React, { useEffect, useState } from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import useThemeContext from '../../contextHooks/useThemeContext';
import commandList from '../../utils/commandList';
import { processCD } from '../../utils/processDirectory';
import Help from './Help';
import Lights from './Lights';
import ListDirectories from './ListDirectories/ListDirectories';
import ListManPages from './ManualPage/ListManPages';
import OpenFiles from './OpenFiles/OpenFiles';
import WhoModal from './WhoModal';

const ARGUMENTS_LIMIT = 5;

interface CommandRunnerProps {
  command: string;
  currentDirectory: string;
  remainingQuery: string;
}

const runCommand = (
  command: string,
  remainingQuery: string,
  clearHistory: () => void,
  changeDirectory: (directory: string) => void,
  currentDirectory: string,
  switchTheme: () => void,
  isDarkTheme: boolean,
): JSX.Element => {
  let commandArguments = remainingQuery.split(' ').filter(t => t !== '');
  if (commandArguments.length === 0) commandArguments = [''];
  if (commandArguments.length > ARGUMENTS_LIMIT) {
    return <>ERROR: @shell:: Too many arguments</>;
  }

  switch (command) {
    case 'clear':
      clearHistory();
      return <></>;
    case 'cd':
      return (
        <>{processCD(commandArguments, currentDirectory, changeDirectory)}</>
      );
    case 'ls':
      return (
        <ListDirectories
          currentFullPath={currentDirectory}
          commandArguments={commandArguments}
        />
      );
    case 'help':
      return <Help commandList={commandList} />;
    case 'lights':
      return <Lights isDarkTheme={isDarkTheme} switchTheme={switchTheme} />;
    case 'man':
      return <ListManPages commandArguments={commandArguments} />;
    case 'open':
      return (
        <OpenFiles
          commandArguments={commandArguments}
          currentDirectory={currentDirectory}
        />
      );
    case 'whoareyou':
      return <WhoModal />;
    default:
      return <></>;
  }
};

export default function CommandRunner({
  command,
  currentDirectory,
  remainingQuery,
}: CommandRunnerProps): JSX.Element {
  const { clearHistory } = useHistoryContext();
  const { changeDirectory } = useDirectoryContext();
  const { isDarkTheme, switchTheme } = useThemeContext();
  const [resultJSX, setResultJSX] = useState(<></>);

  useEffect(() => {
    setResultJSX(
      runCommand(
        command,
        remainingQuery,
        clearHistory,
        changeDirectory,
        currentDirectory,
        switchTheme,
        isDarkTheme,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resultJSX;
}
