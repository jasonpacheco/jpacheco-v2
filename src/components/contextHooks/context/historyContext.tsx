import { createContext } from 'react';

import { HistoryContextInterface } from '../interfaces/history';

const historyContext = createContext<HistoryContextInterface | undefined>(
  undefined,
);

export default historyContext;
