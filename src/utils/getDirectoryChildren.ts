import { DirectoryNode } from './sitemap';

export default function getDirectoryChildren(
  siteMap: DirectoryNode,
  currentFullPath: string,
  returnFile = false,
): DirectoryNode[] {
  const relativePaths = currentFullPath.split('/');
  const relativePathsCount = relativePaths.length;

  let currentDirectoryNode: DirectoryNode = { ...siteMap };
  let currentDirectoryNodeChildren: DirectoryNode[] = [];
  let relativePathIndex = 0;

  while (relativePathIndex < relativePathsCount) {
    const currentRelativePath = relativePaths[relativePathIndex];
    if (
      !returnFile &&
      currentDirectoryNode.fullPath === currentFullPath &&
      currentDirectoryNode.type === 'directory'
    ) {
      return currentDirectoryNode.children;
    }

    if (currentDirectoryNode.relativePath === currentRelativePath) {
      if (
        returnFile &&
        currentDirectoryNode.fullPath === currentFullPath &&
        currentDirectoryNode.type === 'node'
      ) {
        return [currentDirectoryNode];
      }

      currentDirectoryNodeChildren = currentDirectoryNode.children;
      [currentDirectoryNode] = currentDirectoryNodeChildren;
      relativePathIndex += 1;
    } else {
      const findDirectoryResult = currentDirectoryNodeChildren.find(
        directoryNode => {
          return directoryNode.relativePath === currentRelativePath;
        },
      );

      if (findDirectoryResult) {
        currentDirectoryNode = { ...findDirectoryResult };
      } else {
        return [];
      }
    }
  }

  return [];
}
