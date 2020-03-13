import React, { useEffect, useState } from 'react';

import processChangeDirectory from '../../utils/processChangeDirectory';
import {
  DirectoryColor,
  FileColor,
  ListContainer,
  ListElement,
} from './styles/DirectoryChildren';

interface DirectoryChildrenProps {
  currentFullPath: string;
  childDirectories: string[];
  commandArguments: string[];
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
  currentFullPath,
  childDirectories,
  commandArguments,
}: DirectoryChildrenProps): JSX.Element {
  const [directory, setDirectory] = useState<FormattedDirectory>({
    filesCount: 0,
    directoriesCount: 0,
    formattedDirectory: [],
    longestString: 0,
  });

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    let newDirectory: string[] = [];
    if (commandArguments[0] !== '') {
      const result = processChangeDirectory(
        'ls',
        childDirectories,
        commandArguments,
        currentFullPath,
      );

      if (typeof result === 'string') setErrorMessage(result);
      else newDirectory = result;
    }

    setDirectory(
      formatDirectory(
        commandArguments[0] !== '' && newDirectory.length > 0
          ? newDirectory
          : childDirectories,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return errorMessage ? (
    <>{errorMessage}</>
  ) : (
    <div>
      <div>
        <p>
          {commandArguments[0] !== ''
            ? `${currentFullPath}/${commandArguments}`
            : currentFullPath}{' '}
          contains{' '}
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
