import React from 'react';

import { PreviousQueryProps } from './query.interface';
import {
  QueryContainer,
  QueryDirectory,
  QueryShellDirective,
  QueryTime,
} from './query.styled';

export default function PreviousQuery({
  query,
  directory,
  time,
}: PreviousQueryProps): JSX.Element {
  return (
    <QueryContainer>
      <p>
        <QueryTime>{time}</QueryTime> in{' '}
        <QueryDirectory>{directory}</QueryDirectory>
      </p>
      <p>
        <QueryShellDirective>&gt;&nbsp;</QueryShellDirective>
        {query}
      </p>
    </QueryContainer>
  );
}
