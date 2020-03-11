import commandList from './commandList';
import jumpSearch from './jumpSearch';

export interface ValidationResult {
  isValidCommand: boolean;
  commandName: string;
  remainingQuery: string;
}

export default function validateInput(rawQuery: string): ValidationResult {
  const query = rawQuery.slice().trim();
  const firstSpace = query.indexOf(' ');

  if (firstSpace === -1) {
    const isQueryCommand = jumpSearch(commandList, query);
    return {
      isValidCommand: !!isQueryCommand,
      commandName: query,
      remainingQuery: '',
    };
  }

  const commandName = query.slice(0, firstSpace);
  const isValidCommand = jumpSearch(commandList, commandName);
  const remainingQuery = query.slice(firstSpace + 1);
  return {
    isValidCommand,
    commandName,
    remainingQuery,
  };
}
