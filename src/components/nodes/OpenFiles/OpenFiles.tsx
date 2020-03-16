import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { processOpen } from '../../../utils/processDirectory';
import OpenFile from './OpenFile';

interface OpenFilesProps {
  commandArguments: string[];
  currentDirectory: string;
}
export default function OpenFiles({
  commandArguments,
  currentDirectory,
}: OpenFilesProps): JSX.Element {
  const [files, setFiles] = useState<string[] | undefined>(undefined);
  useEffect(() => {
    setFiles(processOpen(commandArguments, currentDirectory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return files ? (
    <div>
      {files.map(result => {
        if (result.startsWith('open')) {
          return <p key={uuid()}>{result}</p>;
        }
        return <OpenFile key={uuid()} filename={result} />;
      })}
    </div>
  ) : (
    <div>
      <p>Fetching files...</p>
    </div>
  );
}
