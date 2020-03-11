import React, { useState } from 'react';

import validateInput from '../utils/validateInput';
import useHistoryContext from './contextHooks/useHistoryContext';
import PreviousQuery from './PreviousQuery';
import ResultNode from './ResultNode';
import {
  QueryContainer,
  QueryDirectory,
  QueryInput,
  QueryShellDirective,
  QueryTime,
} from './styles/Query';

const KEY_ENTER = 13;

interface QueryProps {
  directory: string;
  queryTime: string;
}

const Query = ({ directory, queryTime }: QueryProps): JSX.Element => {
  const { addQueryResult } = useHistoryContext();
  const [state, setState] = useState({
    commandName: '',
    inputValue: '',
    isValidCommand: false,
    remainingQuery: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rawInput = e.target.value;
    const result = validateInput(rawInput);

    setState({
      ...state,
      commandName: result.commandName,
      inputValue: rawInput,
      isValidCommand: result.isValidCommand,
      remainingQuery: result.remainingQuery,
    });
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    command: string,
    directoryName: string,
    timeOfQuery: string,
  ): void => {
    if (e.keyCode === KEY_ENTER) {
      e.preventDefault();
      const queryComponent: JSX.Element = (
        <>
          <PreviousQuery
            command={command}
            directory={directoryName}
            time={timeOfQuery}
          />
          <ResultNode
            data={{
              commandName: state.commandName,
              isValidCommand: state.isValidCommand,
              remainingQuery: state.remainingQuery,
            }}
          />
        </>
      );
      addQueryResult(queryComponent);
      setState({
        ...state,
        commandName: '',
        inputValue: '',
        isValidCommand: false,
        remainingQuery: '',
      });
    }
  };

  return (
    <>
      <QueryContainer>
        <p>
          <QueryTime>{queryTime}</QueryTime> in{' '}
          <QueryDirectory>{directory}</QueryDirectory>
        </p>
        <p className="query__input">
          <QueryShellDirective>@shell::</QueryShellDirective>

          <QueryInput
            isValidCommand={state.isValidCommand}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleChange(e)
            }
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void =>
              handleKeyPress(e, state.inputValue, directory, queryTime)
            }
            value={state.inputValue}
          />
        </p>
      </QueryContainer>
    </>
  );
};

export default Query;
