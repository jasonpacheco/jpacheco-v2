import React from 'react';

import {
  QueryContainer,
  QueryDirectory,
  QueryShellDirective,
  QueryTime,
} from '../styles/Query';
import { PreviousQueryProps } from './query.interface';

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
        <QueryShellDirective>@shell::</QueryShellDirective>
        {query}
      </p>
    </QueryContainer>
  );
}
