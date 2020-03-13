import React, { useState } from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import validateInput from '../../utils/validateInput';
import ResultNode from '../Nodes/ResultNode';
import {
  QueryContainer,
  QueryDirectory,
  QueryInput,
  QueryShellDirective,
  QueryTime,
} from '../styles/Query';
import PreviousQuery from './PreviousQuery';
import {
  KEY_ENTER,
  QueryDispatchers,
  QueryProps,
  QueryState,
} from './query.interface';

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatchers: QueryDispatchers,
): void => {
  const rawInput = e.target.value;
  const result = validateInput(rawInput);
  dispatchers.setCommandName(result.commandName);
  dispatchers.setIsValidCommand(result.isValidCommand);
  dispatchers.setInputValue(rawInput);
  dispatchers.setRemainingQuery(result.remainingQuery);
};

const handleKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  directoryName: string,
  timeOfQuery: string,
  state: QueryState,
  dispatchers: QueryDispatchers,
  addQueryResult: (queryResult: JSX.Element) => void,
  childDirectories: string[],
): void => {
  if (e.keyCode === KEY_ENTER) {
    e.preventDefault();
    const queryComponent: JSX.Element = (
      <>
        <PreviousQuery
          directory={directoryName}
          query={state.inputValue}
          time={timeOfQuery}
        />
        <ResultNode
          currentDirectory={directoryName}
          childDirectories={childDirectories}
          data={{
            commandName: state.commandName,
            isValidCommand: state.isValidCommand,
            remainingQuery: state.remainingQuery,
          }}
        />
      </>
    );

    dispatchers.setCommandName('');
    dispatchers.setInputValue('');
    dispatchers.setIsValidCommand(false);
    dispatchers.setRemainingQuery('');
    addQueryResult(queryComponent);
  }
};

export default function Query({ queryTime }: QueryProps): JSX.Element {
  const { addQueryResult } = useHistoryContext();
  const { currentDirectory, childDirectories } = useDirectoryContext();
  const [commandName, setCommandName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isValidCommand, setIsValidCommand] = useState(false);
  const [remainingQuery, setRemainingQuery] = useState('');

  const dispatchers: QueryDispatchers = {
    setCommandName,
    setInputValue,
    setIsValidCommand,
    setRemainingQuery,
  };

  const state: QueryState = {
    commandName,
    inputValue,
    isValidCommand,
    remainingQuery,
  };

  return (
    <QueryContainer>
      <p>
        <QueryTime>{queryTime}</QueryTime> in{' '}
        <QueryDirectory>{currentDirectory}</QueryDirectory>
      </p>
      <p className="query__input">
        <QueryShellDirective>@shell::</QueryShellDirective>
        <QueryInput
          isValidCommand={isValidCommand}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            handleChange(e, dispatchers)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void =>
            handleKeyPress(
              e,
              currentDirectory,
              queryTime,
              state,
              dispatchers,
              addQueryResult,
              childDirectories,
            )
          }
          value={inputValue}
        />
      </p>
    </QueryContainer>
  );
}
