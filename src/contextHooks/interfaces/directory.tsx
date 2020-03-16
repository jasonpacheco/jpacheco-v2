export type DirectoryContextState = {
  currentDirectory: string;
};

interface ChangeDirectoryAction {
  type: 'directory/changeDirectory';
  directory: string;
}

export type DirectoryActions = ChangeDirectoryAction;

export interface DirectoryContextInterface extends DirectoryContextState {
  changeDirectory: (directory: string) => void;
}
