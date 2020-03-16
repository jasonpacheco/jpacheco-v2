export interface CommandInterface {
  id: number;
  commandName: string;
  helpDescription: string;
  briefDescription: string;
  usage: string;
  fullDescription: string;
  examples?: {
    commandUsage: string;
    usageDescription: string;
  }[];
}

const commandList: CommandInterface[] = [
  {
    id: 0,
    commandName: 'cd',
    helpDescription: 'change the current directory',
    briefDescription: 'change directory',
    usage: '[DIRECTORY]',
    fullDescription:
      '{cmd} changes the current working directory. If DIRECTORY is supplied, it will become the new directory. If no argument is given, the root directory (~) will be be used.',
    examples: [
      {
        commandUsage: '~/directory/subdirectory',
        usageDescription:
          'changes the directory to the full path ~/directory/subdirectory',
      },
      {
        commandUsage: 'subdirectory',
        usageDescription:
          "changes to folder 'subdirectory' inside the current working directory",
      },
      {
        commandUsage: '../..',
        usageDescription:
          'changes to the folder two levels above the current working directory',
      },
      {
        commandUsage: '',
        usageDescription: 'changes to the root folder ~',
      },
    ],
  },
  {
    id: 1,
    commandName: 'clear',
    helpDescription: 'clear the shell',
    briefDescription: 'clears the shell window',
    usage: '',
    fullDescription:
      '{cmd} clears the window of all prior shell output and restarts with a clean working shell',
  },
  {
    id: 2,
    commandName: 'help',
    helpDescription: 'opens the help module',
    briefDescription: 'displays the shell help page',
    usage: '',
    fullDescription:
      '{cmd} opens the help page which contains information about how to use the shell and a list of valid shell commands.',
  },
  {
    id: 3,
    commandName: 'lights',
    helpDescription: 'switch between dark/light mode',
    briefDescription: 'switch between the dark and the light theme',
    usage: '',
    fullDescription:
      '{cmd} changes the current shell theme. If the current theme is dark, then {cmd} will change to the light theme and vice-versa.',
  },
  {
    id: 4,
    commandName: 'ls',
    helpDescription: 'list all files and directories',
    briefDescription: 'list directory contents',
    usage: '[directory1[, directory2[, ...directoryN]]]',
    fullDescription:
      'For each argument of {cmd} that names a file of type directory, {cmd} displays the names of files contained within that directory. If no arguments are given, the contents of the current directory are displayed. If multiple arguments are given, the contents of each argument of type directory are listed in the order the arguments were given.',
    examples: [
      {
        commandUsage: '~/about',
        usageDescription:
          'lists the directory contents for the full path ~/about',
      },
      {
        commandUsage: 'about',
        usageDescription:
          "lists the directory contents for the relative path 'about' in the current directory",
      },
      {
        commandUsage: '..',
        usageDescription:
          'lists the directory contents for one folder above the current directory',
      },
    ],
  },
  {
    id: 5,
    commandName: 'man',
    helpDescription: 'display a manual page',
    briefDescription: 'documentation for command',
    usage: 'command1[, command2[, ...commandN]]',
    fullDescription:
      '{cmd} opens a manual page for the provided command. If multiple arguments are specified, {cmd} will open the manual pages for each command.',
    examples: [
      {
        commandUsage: 'ls',
        usageDescription: 'opens the manual page for ls',
      },
      {
        commandUsage: 'cd help',
        usageDescription: 'opens the manual pages for cd and help',
      },
    ],
  },
  {
    id: 6,
    commandName: 'noshell',
    helpDescription: 'terminates shell gui and opens a default html webpage',
    briefDescription: 'displays jpacheco.dev as a normal webpage',
    usage: '',
    fullDescription:
      '{cmd} closes the shell application and displays the user a basic website',
  },
  {
    id: 7,
    commandName: 'open',
    helpDescription: 'opens a file',
    briefDescription: 'opens a file inside a directory',
    usage: 'file1[, file2[, ...fileN]]',
    fullDescription: '{cmd} will open the provided file',
  },
  {
    id: 8,
    commandName: 'whoareyou',
    helpDescription: 'a brief description of the developer',
    briefDescription: 'tells you a little about me',
    usage: '',
    fullDescription: '{cmd} gives you a brief description of the developer.',
  },
];

export default commandList;
