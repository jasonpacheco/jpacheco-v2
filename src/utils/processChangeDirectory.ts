import getDirectoryChildren from './getDirectoryChildren';
import sitemap from './sitemap';

const getFile = (dir: string): string => {
  const result = getDirectoryChildren(sitemap, dir, true);

  if (result.length === 0 || result[0] === undefined) {
    return 'open: file does not exist';
  }
  return result[0].fullPath;
};

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
    if (commandName === 'open') {
      return 'open: must specify a filename';
    }

    if (changeDirectory) {
      changeDirectory('~', getChildDirectories('~'));
    }
    return '';
  }

  if (commandName !== 'open' && commandArguments.length > 1)
    return `${commandName}: Too many arguments for ${commandName} command`;
  let dir = commandArguments[0];
  if (dir.endsWith('/')) dir = dir.slice(0, dir.lastIndexOf('/'));

  if (dir.startsWith('~')) {
    if (commandName === 'open') {
      return getFile(dir);
    }

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
    if (commandName === 'open') {
      return getFile(newDirectory);
    }
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
    if (!(dir[2] === undefined || dir[2] === '/')) {
      return `${commandName}: ${dir} is not a valid ${
        commandName === 'open' ? 'file' : 'directory'
      }`;
    }
    if (currentDirectory === '~') {
      if (commandName === 'open') return 'open: not a valid file';
      return '';
    }
    let dirCopy = dir.slice();
    let firstIndexOfDirCopy = dirCopy.indexOf('/');
    dirCopy = dirCopy.slice(firstIndexOfDirCopy + 1);
    let lastIndexOfSlash = currentDirectory.lastIndexOf('/');
    let upDirectory = currentDirectory.slice(0, lastIndexOfSlash);
    let i = 0;
    while (firstIndexOfDirCopy !== -1 && upDirectory !== '' && i < 10) {
      if (dirCopy.startsWith('..')) {
        if (!(dir[2] === undefined || dir[2] === '/')) {
          return `${commandName}: ${dir} is not a valid ${
            commandName === 'open' ? 'file' : 'directory'
          }`;
        }
        lastIndexOfSlash = upDirectory.lastIndexOf('/');
        upDirectory = upDirectory.slice(0, lastIndexOfSlash);
        firstIndexOfDirCopy = dirCopy.indexOf('/');
        dirCopy = dirCopy.slice(firstIndexOfDirCopy + 1);
      } else {
        firstIndexOfDirCopy = dirCopy.indexOf('/');

        const dirCopyCopy = dirCopy.slice(
          0,
          firstIndexOfDirCopy === -1 ? dirCopy.length : firstIndexOfDirCopy,
        );

        upDirectory = `${upDirectory}/${dirCopyCopy}`;
        dirCopy = dirCopy.slice(firstIndexOfDirCopy + 1);
      }
      i += 1;
    }

    if (upDirectory === '') {
      return `${commandName}: ${dir} is not a valid ${
        commandName === 'open' ? 'file' : 'directory'
      }`;
    }

    if (commandName === 'open') {
      return getFile(upDirectory);
    }

    const result = getChildDirectories(upDirectory);
    if (result.length === 0)
      return `${commandName}: ${dir} is not a valid directory`;

    if (commandName === 'ls') {
      return result;
    }

    if (changeDirectory) {
      changeDirectory(upDirectory, result);
    }
  } else if (dir === '.') {
    if (commandName === 'open') {
      return 'open: unknown file';
    }
    return '';
  } else {
    const firstSlash = dir.indexOf('/');
    const firstDir = dir.slice(0, firstSlash);
    if (childDirectories.includes(firstDir)) {
      const newDirectory = `${currentDirectory}/${dir}`;
      const result = getChildDirectories(newDirectory);
      if (commandName === 'open') {
        return getFile(newDirectory);
      }

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

    if (commandName === 'open') {
      return 'open: unknown file';
    }

    return `${commandName}: ${dir} is not a valid directory`;
  }

  if (commandName === 'open') {
    return 'open: unknown file';
  }

  return '';
}
