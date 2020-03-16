import React, { useEffect, useState } from 'react';

import {
  DirectoryColor,
  FileColor,
  ListContainer,
  ListElement,
} from '../styles/DirectoryChildren';

interface DirectoryChildrenProps {
  parentDirectory: string;
  childDirectories: string[];
}

let keyID = 0;
const getID = (): number => {
  keyID += 1;
  return keyID;
};

interface FormattedDirectory {
  directoriesCount: number;
  filesCount: number;
  formattedDirectory: string[];
  longestString: number;
}

const formatDirectory = (childDirectories: string[]): FormattedDirectory => {
  const formattedDirectory: string[] = [];
  let directoriesCount = 0;
  let filesCount = 0;
  let longestString = 0;
  childDirectories.map(node => {
    if (node.includes('.')) {
      filesCount += 1;
      formattedDirectory.push(node);
    } else {
      directoriesCount += 1;
      formattedDirectory.push(`${node}/`);
    }

    longestString = Math.max(longestString, node.length);

    return node;
  });

  return {
    directoriesCount,
    filesCount,
    formattedDirectory,
    longestString,
  };
};

export default function DirectoryChildren({
  parentDirectory,
  childDirectories,
}: DirectoryChildrenProps): JSX.Element {
  const [directory, setDirectory] = useState<FormattedDirectory>({
    filesCount: 0,
    directoriesCount: 0,
    formattedDirectory: [],
    longestString: 0,
  });

  useEffect(() => {
    setDirectory(formatDirectory(childDirectories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div>
        <p>
          {parentDirectory} contains{' '}
          {directory.directoriesCount > 0 ? (
            <>
              <DirectoryColor>{directory.directoriesCount}</DirectoryColor>{' '}
              {directory.directoriesCount === 1 ? 'directory' : 'directories'}
              {directory.filesCount > 0 ? ' and ' : ''}
            </>
          ) : (
            <></>
          )}
          {directory.filesCount > 0 ? (
            <>
              <FileColor>{directory.filesCount}</FileColor>{' '}
              {directory.filesCount === 1 ? 'file' : 'files'}
            </>
          ) : (
            <></>
          )}
        </p>
      </div>
      <ListContainer
        maxColumns={directory.directoriesCount + directory.filesCount}
        maxWidth={directory.longestString}
      >
        {directory.formattedDirectory.map(child => {
          return (
            <ListElement key={getID()}>
              {child.endsWith('/') ? (
                <DirectoryColor>{child}</DirectoryColor>
              ) : (
                <FileColor>{child}</FileColor>
              )}
            </ListElement>
          );
        })}
      </ListContainer>
    </div>
  );
}
