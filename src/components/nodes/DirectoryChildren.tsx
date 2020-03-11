import React from 'react';

import sitemap, { DirectoryNode } from '../../utils/sitemap';

interface DirectoryChildrenProps {
  currentFullPath: string;
}

const getDirectoryChildren = (
  siteMap: DirectoryNode,
  currentFullPath: string,
): DirectoryNode[] => {
  const relativePaths = currentFullPath.split('/');
  const relativePathsCount = relativePaths.length;
  if (currentFullPath === '~') return siteMap.children;

  let currentDirectoryNode: DirectoryNode = siteMap;
  let currentDirectoryNodeChildren: DirectoryNode[] = [];
  let relativePathIndex = 0;

  while (relativePathIndex < relativePathsCount) {
    const currentRelativePath = relativePaths[relativePathIndex];

    if (currentDirectoryNode.fullPath === currentFullPath) {
      currentDirectoryNodeChildren = currentDirectoryNode.children;
      break;
    } else if (currentDirectoryNode.relativePath === currentRelativePath) {
      currentDirectoryNodeChildren = currentDirectoryNode.children;
      relativePathIndex += 1;
    } else {
      const findDirectoryResult = currentDirectoryNodeChildren.find(
        directoryNode => {
          return directoryNode.relativePath === currentRelativePath;
        },
      );

      if (findDirectoryResult) {
        currentDirectoryNode = findDirectoryResult;
      } else {
        currentDirectoryNodeChildren = [];
        break;
      }
    }
  }

  return currentDirectoryNodeChildren;
};

const DirectoryChildren = ({
  currentFullPath,
}: DirectoryChildrenProps): JSX.Element => {
  const directoryChildren = getDirectoryChildren(sitemap, currentFullPath);
  let keyID = 0;
  const getID = (): number => {
    keyID += 1;
    return keyID;
  };

  return (
    <>
      <span>In directory: {currentFullPath}</span>
      <ul>
        {directoryChildren.map(childNode => (
          <li key={getID()}>{childNode.relativePath}</li>
        ))}
      </ul>
    </>
  );
};

export default DirectoryChildren;
