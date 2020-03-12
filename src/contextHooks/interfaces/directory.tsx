export type DirectoryContextState = {
  currentDirectory: string;
  childDirectories: string[];
};

interface ChangeDirectoryAction {
  type: 'directory/changeDirectory';
  directory: string;
  childDirectories: string[];
}

export type DirectoryActions = ChangeDirectoryAction;

export interface DirectoryContextInterface extends DirectoryContextState {
  changeDirectory: (directory: string, childDirectories: string[]) => void;
}
