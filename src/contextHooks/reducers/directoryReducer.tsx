import {
  DirectoryActions,
  DirectoryContextState,
} from '../interfaces/directory';

export default (
  state: DirectoryContextState,
  action: DirectoryActions,
): DirectoryContextState => {
  switch (action.type) {
    case 'directory/changeDirectory':
      return {
        ...state,
        currentDirectory: action.directory,
      };
    default:
      return state;
  }
};
