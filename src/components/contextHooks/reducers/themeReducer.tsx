import { ThemeActions, ThemeContextState } from '../interfaces/theme';

export default (
  state: ThemeContextState,
  action: ThemeActions,
): ThemeContextState => {
  switch (action.type) {
    case 'theme/switch':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};
