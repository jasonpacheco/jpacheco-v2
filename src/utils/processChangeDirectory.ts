import getDirectoryChildren from './getDirectoryChildren';
import sitemap from './sitemap';

const getChildDirectories = (dir: string): string[] =>
  getDirectoryChildren(sitemap, dir).map(node => node.relativePath);

export default function processChangeDirectory(
  changeDirectory: (directory: string, childDirectories: string[]) => void,
  childDirectories: string[],
  commandArguments: string[],
  currentDirectory: string,
): string {
  if (commandArguments.length > 1) return 'Too many arguments for cd command';
  const dir = commandArguments[0];

  if (dir.startsWith('~')) {
    changeDirectory(dir, getChildDirectories(dir));
  } else if (childDirectories.includes(dir)) {
    const newDirectory = `${currentDirectory}/${dir}`;
    changeDirectory(newDirectory, getChildDirectories(newDirectory));
  }
  return '';
}
