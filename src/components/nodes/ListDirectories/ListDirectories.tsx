import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { DirectoryInfo, processLS } from '../../../utils/processDirectory';
import DirectoryChildren from './DirectoryChildren';

interface ListDirectoriesProps {
  currentFullPath: string;
  commandArguments: string[];
}

export default function ListDirectories({
  currentFullPath,
  commandArguments,
}: ListDirectoriesProps): JSX.Element {
  const [directories, setDirectories] = useState<
    (string | DirectoryInfo)[] | undefined
  >(undefined);
  useEffect(() => {
    setDirectories(processLS(commandArguments, currentFullPath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return directories ? (
    <div>
      {directories.map(
        (result: string | DirectoryInfo): JSX.Element => {
          if (typeof result === 'string') {
            return <p key={uuid()}>{result}</p>;
          }

          return (
            <DirectoryChildren
              key={uuid()}
              parentDirectory={result.parent}
              childDirectories={result.children}
            />
          );
        },
      )}
    </div>
  ) : (
    <div>Fetching directories...</div>
  );
}
