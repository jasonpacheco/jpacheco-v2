import { CommandInterface } from './commandList';

export default function jumpSearch(
  commands: CommandInterface[],
  commandToSearch: string,
): boolean {
  const totalCommands = commands.length;
  const stepInterval = Math.floor(Math.sqrt(totalCommands));

  let step = stepInterval;
  let prevStep = 0;

  while (
    commands[Math.min(step, totalCommands) - 1].commandName < commandToSearch
  ) {
    prevStep = step;
    step += stepInterval;
    // console.log(commands[])
    if (prevStep >= totalCommands) return false;
  }

  while (commands[prevStep].commandName < commandToSearch) {
    if (prevStep === Math.min(step, totalCommands)) return false;
    prevStep += 1;
  }

  if (commands[prevStep].commandName === commandToSearch) return true;

  return false;
}
