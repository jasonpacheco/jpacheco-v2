import React, { useEffect, useState } from 'react';

interface OpenFileProps {
  filename: string;
}

export default function OpenFile({ filename }: OpenFileProps): JSX.Element {
  const [Dynamic, setDynamic] = useState<JSX.Element | undefined>(undefined);
  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const DynamicComponent: JSX.Element = await import(
          `../../Site${filename.slice(1)}`
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        setDynamic(DynamicComponent.default);
      } catch (error) {
        setDynamic(<div>open: INTERNAL_ERROR: could not open {filename}</div>);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return Dynamic || <div>Opening file...</div>;
}
