export const KEY_ENTER = 13;
export const KEY_UP = 38;
export const KEY_DOWN = 40;
export const DISPATCH_DELAY_MS = 25;

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
