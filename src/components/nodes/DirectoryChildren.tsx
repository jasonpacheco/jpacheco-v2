import React from 'react';

interface DirectoryChildrenProps {
  currentFullPath: string;
  childDirectories: string[];
}

let keyID = 0;
const getID = (): number => {
  keyID += 1;
  return keyID;
};

export default function DirectoryChildren({
  currentFullPath,
  childDirectories,
}: DirectoryChildrenProps): JSX.Element {
  return (
    <>
      <span>In directory: {currentFullPath}</span>
      <ul>
        {childDirectories.map(child => (
          <li key={getID()}>{child}</li>
        ))}
      </ul>
    </>
  );
}
