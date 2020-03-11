import { useContext } from 'react';

import historyContext from './context/historyContext';
import { HistoryContextInterface } from './interfaces/history';

const useHistoryContext = (): HistoryContextInterface => {
  const ctx = useContext(historyContext);

  if (ctx === undefined) {
    throw new Error('useHistoryContext is undefined');
  }

  return ctx;
};

export default useHistoryContext;
