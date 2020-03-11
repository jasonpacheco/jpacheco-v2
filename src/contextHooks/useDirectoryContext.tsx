import { useContext } from 'react';

import directoryContext from './context/directoryContext';
import { DirectoryContextInterface } from './interfaces/directory';

const useDirectoryContext = (): DirectoryContextInterface => {
  const ctx = useContext(directoryContext);

  if (ctx === undefined) {
    throw new Error('useDirectoryContext is undefined');
  }

  return ctx;
};

export default useDirectoryContext;
