import React, { useReducer } from 'react';

import DirectoryContext from '../context/directoryContext';
import { DirectoryContextState } from '../interfaces/directory';
import directoryReducer from '../reducers/directoryReducer';

const initialState: DirectoryContextState = {
  currentDirectory: '~',
};

type DirectoryStateProps = {
  children: React.ReactNode;
};

const DirectoryState = ({ children }: DirectoryStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(directoryReducer, initialState);

  const changeDirectory = (directory: string): void => {
    dispatch({
      type: 'directory/changeDirectory',
      directory,
    });
  };

  return (
    <DirectoryContext.Provider value={{ ...state, changeDirectory }}>
      {children}
    </DirectoryContext.Provider>
  );
};

export default DirectoryState;
