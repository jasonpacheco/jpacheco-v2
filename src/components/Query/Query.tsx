import React, { useState } from 'react';

import useDirectoryContext from '../../contextHooks/useDirectoryContext';
import useHistoryContext from '../../contextHooks/useHistoryContext';
import validateInput from '../../utils/validateInput';
import ResultNode from '../nodes/ResultNode';
import {
  QueryContainer,
  QueryDirectory,
  QueryInput,
  QueryShellDirective,
  QueryTime,
} from '../styles/Query';
import PreviousQuery from './PreviousQuery';
import {
  DISPATCH_DELAY_MS,
  KEY_DOWN,
  KEY_ENTER,
  KEY_UP,
  QueryDispatchers,
  QueryProps,
  QueryState,
} from './query.interface';

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatchers: QueryDispatchers,
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  const rawInput = e.target.value;
  const result = validateInput(rawInput);

  setIsTouched(rawInput !== '');

  dispatchers.setCommandName(result.commandName);
  dispatchers.setIsValidCommand(result.isValidCommand);
  dispatchers.setInputValue(rawInput);
  dispatchers.setRemainingQuery(result.remainingQuery);
};

const dispatchQuery = (
  dispatchers: QueryDispatchers,
  result: QueryState,
): void => {
  dispatchers.setCommandName(result.commandName);
  dispatchers.setInputValue(result.inputValue);
  dispatchers.setIsValidCommand(result.isValidCommand);
  dispatchers.setRemainingQuery(result.remainingQuery);
};

const getQuery = (
  dir: typeof KEY_UP | typeof KEY_DOWN,
  queryHistory: QueryState[],
  dispatchers: QueryDispatchers,
  currentQueryIndex: number,
  setCurrentQueryIndex: React.Dispatch<React.SetStateAction<number>>,
): void => {
  const len = queryHistory.length;
  const result = queryHistory[currentQueryIndex + (dir === KEY_UP ? 1 : -1)];
  if (dir === KEY_UP && len > 0) {
    if (result !== undefined) {
      setTimeout(() => {
        dispatchQuery(dispatchers, result);
        setCurrentQueryIndex(currentQueryIndex + 1);
      }, DISPATCH_DELAY_MS);
    }
  } else if (len > 0) {
    if (result === undefined) {
      setTimeout(() => {
        dispatchQuery(dispatchers, {
          commandName: '',
          inputValue: '',
          isValidCommand: false,
          remainingQuery: '',
        });
      }, DISPATCH_DELAY_MS);
    } else {
      setTimeout(() => {
        dispatchQuery(dispatchers, result);
        setCurrentQueryIndex(currentQueryIndex - 1);
      }, DISPATCH_DELAY_MS);
    }
  }
};

const handleKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  directoryName: string,
  timeOfQuery: string,
  state: QueryState,
  dispatchers: QueryDispatchers,
  addQueryResult: (queryResult: JSX.Element, queryInput: QueryState) => void,
  queryHistory: QueryState[],
  currentQueryIndex: number,
  setCurrentQueryIndex: React.Dispatch<React.SetStateAction<number>>,
  isTouched: boolean,
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  if (e.keyCode === KEY_ENTER) {
    e.preventDefault();
    const queryComponent: JSX.Element = (
      <div>
        <PreviousQuery
          directory={directoryName}
          query={state.inputValue}
          time={timeOfQuery}
        />
        <ResultNode
          currentDirectory={directoryName}
          data={{
            commandName: state.commandName,
            isValidCommand: state.isValidCommand,
            remainingQuery: state.remainingQuery,
          }}
        />
      </div>
    );

    addQueryResult(queryComponent, {
      commandName: state.commandName,
      inputValue: state.inputValue,
      isValidCommand: state.isValidCommand,
      remainingQuery: state.remainingQuery,
    });
    dispatchers.setCommandName('');
    dispatchers.setInputValue('');
    dispatchers.setIsValidCommand(false);
    dispatchers.setRemainingQuery('');
    setCurrentQueryIndex(-1);
    setIsTouched(false);
  } else if (e.keyCode === KEY_UP) {
    if (!isTouched) {
      getQuery(
        KEY_UP,
        queryHistory,
        dispatchers,
        state.inputValue === '' ? -1 : currentQueryIndex,
        setCurrentQueryIndex,
      );
    }
  } else if (e.keyCode === KEY_DOWN) {
    if (!isTouched) {
      getQuery(
        KEY_DOWN,
        queryHistory,
        dispatchers,
        currentQueryIndex,
        setCurrentQueryIndex,
      );
    }
  }
};

export default function Query({ queryTime }: QueryProps): JSX.Element {
  const { addQueryResult, queryHistory } = useHistoryContext();
  const { currentDirectory } = useDirectoryContext();
  const [commandName, setCommandName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isValidCommand, setIsValidCommand] = useState(false);
  const [remainingQuery, setRemainingQuery] = useState('');
  const [currentQueryIndex, setCurrentQueryIndex] = useState(-1);
  const [isTouched, setIsTouched] = useState(false);

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
        <QueryShellDirective>&gt;&nbsp;</QueryShellDirective>
        <QueryInput
          isValidCommand={isValidCommand}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            handleChange(e, dispatchers, setIsTouched)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void =>
            handleKeyPress(
              e,
              currentDirectory,
              queryTime,
              state,
              dispatchers,
              addQueryResult,
              queryHistory,
              currentQueryIndex,
              setCurrentQueryIndex,
              isTouched,
              setIsTouched,
            )
          }
          value={inputValue}
        />
      </p>
    </QueryContainer>
  );
}
