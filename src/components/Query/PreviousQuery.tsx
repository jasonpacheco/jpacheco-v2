import React from 'react';

import {
  QueryContainer,
  QueryDirectory,
  QueryShellDirective,
  QueryTime,
} from '../styles/Query';

interface PreviousQueryProps {
  command: string;
  directory: string;
  time: string;
}

const PreviousQuery = ({
  command,
  directory,
  time,
}: PreviousQueryProps): JSX.Element => {
  return (
    <QueryContainer>
      <p>
        <QueryTime>{time}</QueryTime> in{' '}
        <QueryDirectory>{directory}</QueryDirectory>
      </p>
      <p>
        <QueryShellDirective>@shell::</QueryShellDirective>
        {command}
      </p>
    </QueryContainer>
  );
};

export default PreviousQuery;
