import { HistoryActions, HistoryContextState } from '../interfaces/history';

const HISTORY_LIMIT = 25;
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
        ].filter(({ nodeID }) => nodeID > state.nextID - HISTORY_LIMIT),
        queryHistory: [action.queryInput, ...state.queryHistory].filter(
          q => q.inputValue !== '',
        ),
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
