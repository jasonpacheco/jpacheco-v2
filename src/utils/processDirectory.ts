import getNode from './getNode';
import { DirectoryNode } from './sitemap';

const getNodeDirectories = (node: DirectoryNode): string[] =>
  node.children.map(n => n.relativePath);

export const processCD = (
  commandArguments: string[],
  currentDirectory: string,
  changeDirectory: ChangeDirectoryAction | undefined,
): string => {
  if (commandArguments.length > 1) {
    return 'cd: Too many arguments for cd command';
  }

  if (changeDirectory) {
    const directoryToChange = commandArguments[0];
    if (directoryToChange === '') {
      changeDirectory('~');
      return ''; // return nothing for success
    }
    const node = getNode(currentDirectory, directoryToChange);
    if (!node) {
      return `cd: ${directoryToChange} is not a valid directory`;
    }
    changeDirectory(node.fullPath);
    return '';
  }

  return 'cd: error: unable to dispatch';
};

export type DirectoryInfo = { parent: string; children: string[] };

export const processLS = (
  commandArguments: string[],
  currentDirectory: string,
): (string | DirectoryInfo)[] => {
  const listResults: (string | DirectoryInfo)[] = [];
  commandArguments.forEach(directoryToChange => {
    const node = getNode(currentDirectory, directoryToChange);
    if (!node || node.type === 'node') {
      listResults.push(`ls: ${directoryToChange} is not a valid directory`);
    } else {
      listResults.push({
        parent: node.fullPath,
        children: getNodeDirectories(node),
      });
    }
  });

  return listResults;
};

export const processOpen = (
  commandArguments: string[],
  currentDirectory: string,
): string[] => {
  const openResults: string[] = [];
  commandArguments.forEach(fileToOpen => {
    if (fileToOpen === '') {
      openResults.push('open: must specify a filename');
    } else {
      const node = getNode(currentDirectory, fileToOpen);
      if (!node || node.type === 'directory') {
        openResults.push(`open: ${fileToOpen} is not a valid file`);
      } else {
        openResults.push(node.fullPath);
      }
    }
  });

  return openResults;
};

type ChangeDirectoryAction = (directory: string) => void;
