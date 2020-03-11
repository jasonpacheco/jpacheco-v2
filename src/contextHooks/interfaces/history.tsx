export interface QueryNode {
  nodeID: number;
  nodeComponent: JSX.Element;
}

export type HistoryContextState = {
  nextID: number;
  nodeList: QueryNode[];
};

interface AddHistoryAction {
  type: 'history/addQueryResult';
  queryResult: JSX.Element;
}

interface ClearHistoryAction {
  type: 'history/clearHistory';
}

export type HistoryActions = AddHistoryAction | ClearHistoryAction;

export interface HistoryContextInterface extends HistoryContextState {
  addQueryResult: (queryResult: JSX.Element) => void;
  clearHistory: () => void;
}
