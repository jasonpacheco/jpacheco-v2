import React, { useReducer } from 'react';

import ShellDescription from '../../components/nodes/ShellDescription';
import { QueryState } from '../../components/Query/query.interface';
import HistoryContext from '../context/historyContext';
import { HistoryContextState } from '../interfaces/history';
import historyReducer from '../reducers/historyReducer';

const initialState: HistoryContextState = {
  nextID: 1,
  nodeList: [
    {
      nodeID: 0,
      nodeComponent: <ShellDescription />,
    },
  ],
  queryHistory: [],
};

type HistoryStateProps = {
  children: React.ReactNode;
};

const HistoryState = ({ children }: HistoryStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const addQueryResult = (
    queryResult: JSX.Element,
    queryInput: QueryState,
  ): void => {
    dispatch({
      type: 'history/addQueryResult',
      queryResult,
      queryInput,
    });
  };

  const clearHistory = (): void => {
    dispatch({
      type: 'history/clearHistory',
    });
  };

  return (
    <HistoryContext.Provider value={{ ...state, addQueryResult, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryState;
