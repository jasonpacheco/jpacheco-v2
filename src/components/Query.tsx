import React, { useEffect, useState } from 'react';

import getQueryTime from '../utils/getQueryTime';
import PreviousQuery from './PreviousQuery';
import {
  QueryContainer,
  QueryDirectory,
  QueryInput,
  QueryShellDirective,
  QueryTime,
} from './styles/Query';

interface QueryProps {
  addQueryToHistory: (queryComponent: JSX.Element) => void;
  directory: string;
}

const Query = ({ addQueryToHistory, directory }: QueryProps): JSX.Element => {
  const [queryTime, setQueryTime] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isEnterPressed) {
      setQueryTime(getQueryTime());
      setIsEnterPressed(false);
    }
  }, [isEnterPressed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    command: string,
    directoryName: string,
    timeOfQuery: string,
  ): void => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setIsEnterPressed(true);
      const queryComponent: JSX.Element = (
        <PreviousQuery
          command={command}
          directory={directoryName}
          time={timeOfQuery}
        />
      );
      addQueryToHistory(queryComponent);
      setInputValue('');
    }
  };

  return (
    <QueryContainer>
      <p>
        <QueryTime>{queryTime}</QueryTime> in{' '}
        <QueryDirectory>{directory}</QueryDirectory>
      </p>
      <p>
        <QueryShellDirective>@shell::</QueryShellDirective>
        <QueryInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            handleChange(e)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void =>
            handleKeyPress(e, inputValue, directory, queryTime)
          }
          value={inputValue}
        />
      </p>
    </QueryContainer>
  );
};

export default Query;
