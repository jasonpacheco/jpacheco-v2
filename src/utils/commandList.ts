export interface CommandInterface {
  id: number;
  commandName: string;
  helpDescription: string;
}

const commandList: CommandInterface[] = [
  {
    id: 0,
    commandName: 'cd',
    helpDescription: 'change the current directory',
  },
  { id: 1, commandName: 'clear', helpDescription: 'clear the shell' },
  { id: 2, commandName: 'help', helpDescription: 'opens the help module' },
  {
    id: 3,
    commandName: 'lights',
    helpDescription: 'switch between dark/light mode',
  },
  {
    id: 4,
    commandName: 'ls',
    helpDescription: 'list all files and directories',
  },
  { id: 5, commandName: 'man', helpDescription: 'display a manual page' },
  {
    id: 6,
    commandName: 'noshell',
    helpDescription: 'terminates shell gui and opens a default html webpage',
  },
  {
    id: 7,
    commandName: 'whoareyou',
    helpDescription: 'a brief description of the developer',
  },
];

export default commandList;
