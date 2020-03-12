export const KEY_ENTER = 13;

export interface QueryState {
  commandName: string;
  inputValue: string;
  isValidCommand: boolean;
  remainingQuery: string;
}

export interface QueryDispatchers {
  setCommandName: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsValidCommand: React.Dispatch<React.SetStateAction<boolean>>;
  setRemainingQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface QueryProps {
  queryTime: string;
}

export interface PreviousQueryProps {
  directory: string;
  query: string;
  time: string;
}
