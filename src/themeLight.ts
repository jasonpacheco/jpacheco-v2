import { DefaultTheme } from 'styled-components';

import themeVariables from './themeVariables';

export default function themeLight(): DefaultTheme {
  return {
    ...themeVariables,
    colors: {
      site: {
        background: '',
        text: '',
      },
      window: {
        background: '',
        commandError: '',
        commandSuccess: '',
        options: {
          exit: '',
          minimize: '',
          maximize: '',
        },
        result: '',
        text: '',
        time: '',
        titleBarPrimary: '#dad9d9',
        titleBarSecondary: '',
      },
    },
  };
}
