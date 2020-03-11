import { HistoryActions, HistoryContextState } from '../interfaces/history';

export default (
  state: HistoryContextState,
  action: HistoryActions,
): HistoryContextState => {
  switch (action.type) {
    case 'history/addQueryResult':
      return {
        ...state,
        nextID: state.nextID + 1,
        nodeList: [
          ...state.nodeList,
          {
            nodeID: state.nextID,
            nodeComponent: action.queryResult,
          },
        ],
      };
    case 'history/clearHistory':
      return {
        ...state,
        nextID: 0,
        nodeList: [],
      };
    default:
      return state;
  }
};
