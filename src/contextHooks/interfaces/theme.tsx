export type ThemeContextState = {
  isDarkTheme: boolean;
};

interface SwitchThemeAction {
  type: 'theme/switch';
}

export type ThemeActions = SwitchThemeAction;

export interface ThemeContextInterface extends ThemeContextState {
  switchTheme: () => void;
}
