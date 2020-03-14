import React from 'react';
import { v4 as uuid } from 'uuid';

import DirectoryChildren from './DirectoryChildren';

interface ListDirectoriesProps {
  currentFullPath: string;
  childDirectories: string[];
  commandArguments: string[];
}

export default function ListDirectories({
  currentFullPath,
  childDirectories,
  commandArguments,
}: ListDirectoriesProps): JSX.Element {
  return (
    <div>
      {commandArguments.map(
        (argument: string): JSX.Element => (
          <DirectoryChildren
            key={uuid()}
            currentFullPath={currentFullPath}
            childDirectories={childDirectories}
            commandArguments={[argument]}
          />
        ),
      )}
    </div>
  );
}
