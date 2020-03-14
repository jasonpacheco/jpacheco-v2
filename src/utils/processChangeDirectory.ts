import getDirectoryChildren from './getDirectoryChildren';
import sitemap from './sitemap';

const getChildDirectories = (dir: string): string[] =>
  getDirectoryChildren(sitemap, dir).map(node => node.relativePath);

export default function processChangeDirectory(
  commandName: string,
  childDirectories: string[],
  commandArguments: string[],
  currentDirectory: string,
  changeDirectory?: (directory: string, childDirectories: string[]) => void,
): string | string[] {
  if (commandArguments[0] === '') {
    if (changeDirectory) {
      changeDirectory('~', getChildDirectories('~'));
    }
    return '';
  }

  if (commandArguments.length > 1)
    return `${commandName}: Too many arguments for ${commandName} command`;
  let dir = commandArguments[0];
  if (dir.endsWith('/')) dir = dir.slice(0, dir.lastIndexOf('/'));

  if (dir.startsWith('~')) {
    const result = getChildDirectories(dir);
    if (result.length === 0)
      return `${commandName}: ${dir} is not a valid directory`;
    if (commandName === 'ls') {
      return result;
    }
    if (changeDirectory) {
      changeDirectory(dir, result);
    }
  } else if (childDirectories.includes(dir)) {
    const newDirectory = `${currentDirectory}/${dir}`;
    const result = getChildDirectories(newDirectory);
    if (result.length === 0)
      return `${commandName}: ${dir} is not a valid directory`;
    if (commandName === 'ls') {
      return result;
    }
    if (changeDirectory) {
      changeDirectory(newDirectory, result);
    }
  } else if (dir.startsWith('..')) {
    if (dir.slice(0, 3) === '...')
      return `${commandName}: ${dir} is not a valid directory`;
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
    if (upDirectory === '')
      return `${commandName}: ${dir} is not a valid directory`;

    if (commandName === 'ls') {
      return getChildDirectories(upDirectory);
    }

    if (changeDirectory) {
      changeDirectory(upDirectory, getChildDirectories(upDirectory));
    }
  } else if (dir === '.') {
    return '';
  } else {
    const firstSlash = dir.indexOf('/');
    const firstDir = dir.slice(0, firstSlash);
    if (childDirectories.includes(firstDir)) {
      const newDirectory = `${currentDirectory}/${dir}`;
      const result = getChildDirectories(newDirectory);
      if (result.length === 0)
        return `${commandName}: ${dir} is not a valid directory`;

      if (commandName === 'ls') {
        return result;
      }
      if (changeDirectory) {
        changeDirectory(newDirectory, result);
      }
      return '';
    }

    return `${commandName}: ${dir} is not a valid directory`;
  }
  return '';
}
