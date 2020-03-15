import React, { useEffect, useState } from 'react';

import processChangeDirectory from '../../utils/processChangeDirectory';

interface OpenFileProps {
  childDirectories: string[];
  commandArguments: string[];
  currentDirectory: string;
}

export default function OpenFile({
  childDirectories,
  commandArguments,
  currentDirectory,
}: OpenFileProps): JSX.Element {
  const [Dynamic, setDynamic] = useState<JSX.Element | undefined>(undefined);
  useEffect(() => {
    (async (): Promise<void> => {
      const result = processChangeDirectory(
        'open',
        childDirectories,
        commandArguments,
        currentDirectory,
      );

      try {
        if (typeof result === 'string' && !result.startsWith('open')) {
          const DynamicComponent: JSX.Element = await import(
            `../Site${result.slice(1)}`
          );

          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          setDynamic(DynamicComponent.default);
        } else {
          setDynamic(<div>{result}</div>);
        }
      } catch (error) {
        setDynamic(<div>open: ERROR: could not open {result}</div>);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return Dynamic || <div>Opening file...</div>;
}
