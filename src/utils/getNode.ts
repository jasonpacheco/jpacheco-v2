import sitemap, { DirectoryNode } from './sitemap';

export const trimStartEnd = (pathToGet: string): string => {
  const sanitized = pathToGet.slice();
  const regex = /(\/)\/+/gm;
  let duplicatesRemoved = sanitized.replace(regex, '/');
  if (duplicatesRemoved.endsWith('/'))
    duplicatesRemoved = duplicatesRemoved.slice(
      0,
      duplicatesRemoved.length - 1,
    );

  if (sanitized.startsWith('/')) {
    duplicatesRemoved = `~${duplicatesRemoved}`;
  }

  return duplicatesRemoved;
};

export const isOnlyAlphanumeric = (tokens: string[]): boolean => {
  const regex = /[^A-Za-z0-9.~]+/;
  return tokens.every(token => !regex.test(token));
};

const parseDot = (path: string): number => {
  switch (path) {
    case '.':
      return 0;
    case '..':
      return 1;
    default:
      return -1;
  }
};

export const checkEachRelativePath = (
  relativePaths: string[],
): string | false => {
  const pathToReturn: string[] = [...relativePaths];
  let currentPathIndex = 0;
  const parser = relativePaths.every(path => {
    if (path.startsWith('.')) {
      const parseResult = parseDot(path);
      if (parseResult === -1) {
        return false;
      }
      if (parseResult === 0) {
        pathToReturn.splice(currentPathIndex, 1);
      } else if (parseResult === 1) {
        const position = currentPathIndex - 2;
        pathToReturn.splice(
          position < 0 ? 1 : position + 1,
          position < 0 ? 1 : 2,
        );
        currentPathIndex = position < 0 ? 1 : position + 1;
      }
    } else {
      currentPathIndex += 1;
    }
    return true;
  });
  return parser ? pathToReturn.join('/') : false;
};

export const formatPathRequest = (
  currentDirectoryPath: string,
  pathToGet: string,
): string | false => {
  let pathSanitized = trimStartEnd(pathToGet);

  if (!pathSanitized.startsWith('~')) {
    pathSanitized = `${currentDirectoryPath}/${pathSanitized}`;
  }

  const pathTokens = pathSanitized.split('/').filter(ch => ch !== '');

  return isOnlyAlphanumeric(pathTokens)
    ? checkEachRelativePath(pathTokens)
    : false;
};

const recurseDirectory = (
  node: DirectoryNode,
  relativePaths: string[],
): DirectoryNode | undefined => {
  if (relativePaths[0] === undefined) {
    return node;
  }

  for (let i = 0; i < node.children.length; i += 1) {
    if (node.children[i].relativePath === relativePaths[0]) {
      return recurseDirectory({ ...node.children[i] }, relativePaths.slice(1));
    }
  }

  return undefined;
};

/**
 * Function that gets the DirectoryNode for a user request. Returns undefined if no such request is found in the sitemap.
 * @param currentDirectoryPath Full path of the current directory
 * @param pathToGet user input path to retrieve node
 */
export default function getNode(
  currentDirectoryPath: string,
  pathToGet: string,
): DirectoryNode | undefined {
  const getPath = formatPathRequest(currentDirectoryPath, pathToGet);
  if (getPath === false) return undefined;

  const relativePaths = getPath.split('/');

  const currentNode: DirectoryNode = { ...sitemap };

  if (currentNode.relativePath === relativePaths[0]) {
    return recurseDirectory({ ...currentNode }, relativePaths.slice(1));
  }

  return undefined;
}
