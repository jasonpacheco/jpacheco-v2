import { DirectoryNode } from './sitemap';

export default function getDirectoryChildren(
  siteMap: DirectoryNode,
  currentFullPath: string,
): DirectoryNode[] {
  const relativePaths = currentFullPath.split('/');
  const relativePathsCount = relativePaths.length;

  let currentDirectoryNode: DirectoryNode = { ...siteMap };
  let currentDirectoryNodeChildren: DirectoryNode[] = [];
  let relativePathIndex = 0;

  while (relativePathIndex < relativePathsCount) {
    const currentRelativePath = relativePaths[relativePathIndex];

    if (currentDirectoryNode.fullPath === currentFullPath) {
      return currentDirectoryNode.children;
    }
    if (currentDirectoryNode.relativePath === currentRelativePath) {
      currentDirectoryNodeChildren = currentDirectoryNode.children;
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
        currentDirectoryNodeChildren = [];
        break;
      }
    }
  }

  return currentDirectoryNodeChildren;
}
