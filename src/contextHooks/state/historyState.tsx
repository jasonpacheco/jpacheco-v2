import React, { useReducer } from 'react';

import ShellDescription from '../../components/Nodes/ShellDescription';
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
};

type HistoryStateProps = {
  children: React.ReactNode;
};

const HistoryState = ({ children }: HistoryStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const addQueryResult = (queryResult: JSX.Element): void => {
    dispatch({
      type: 'history/addQueryResult',
      queryResult,
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
