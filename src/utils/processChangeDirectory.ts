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
  if (commandArguments.length > 1)
    return 'cd: Too many arguments for cd command';
  let dir = commandArguments[0];
  if (dir.endsWith('/')) dir = dir.slice(0, dir.lastIndexOf('/'));

  if (dir.startsWith('~')) {
    const result = getChildDirectories(dir);
    if (result.length === 0) return `cd: ${dir} is not a valid directory`;
    changeDirectory(dir, result);
  } else if (childDirectories.includes(dir)) {
    const newDirectory = `${currentDirectory}/${dir}`;
    const result = getChildDirectories(newDirectory);
    if (result.length === 0) return `cd: ${dir} is not a valid directory`;
    changeDirectory(newDirectory, result);
  } else if (dir.startsWith('..')) {
    if (dir.slice(0, 3) === '...') return `cd: ${dir} is not a valid directory`;
    if (currentDirectory === '~') return '';
    let dirCopy = dir.slice();
    let lastIndexOfDirCopy = dirCopy.lastIndexOf('/');
    let lastIndexOfSlash = currentDirectory.lastIndexOf('/');
    let upDirectory = currentDirectory.slice(0, lastIndexOfSlash);
    while (lastIndexOfDirCopy !== -1) {
      lastIndexOfSlash = upDirectory.lastIndexOf('/');
      upDirectory = upDirectory.slice(0, lastIndexOfSlash);
      dirCopy = dirCopy.slice(0, lastIndexOfDirCopy);
      lastIndexOfDirCopy = dirCopy.lastIndexOf('/');
    }
    if (upDirectory === '') return `cd: ${dir} is not a valid directory`;
    changeDirectory(upDirectory, getChildDirectories(upDirectory));
  } else if (dir === '.') {
    return '';
  } else {
    return `cd: ${dir} is not a valid directory`;
  }
  return '';
}
