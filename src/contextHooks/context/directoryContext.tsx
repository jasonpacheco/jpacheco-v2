import { createContext } from 'react';

import { DirectoryContextInterface } from '../interfaces/directory';

const directoryContext = createContext<DirectoryContextInterface | undefined>(
  undefined,
);

export default directoryContext;
