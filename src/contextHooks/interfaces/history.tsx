import { QueryState } from '../../components/Query/query.interface';

export interface QueryNode {
  nodeID: number;
  nodeComponent: JSX.Element;
}

export type HistoryContextState = {
  nextID: number;
  nodeList: QueryNode[];
  queryHistory: QueryState[];
};

interface AddHistoryAction {
  type: 'history/addQueryResult';
  queryResult: JSX.Element;
  queryInput: QueryState;
}

interface ClearHistoryAction {
  type: 'history/clearHistory';
}

export type HistoryActions = AddHistoryAction | ClearHistoryAction;

export interface HistoryContextInterface extends HistoryContextState {
  addQueryResult: (queryResult: JSX.Element, queryInput: QueryState) => void;
  clearHistory: () => void;
}
