import { DefaultTheme } from 'styled-components';

import themeVariables from './themeVariables';

export default function themeLight(): DefaultTheme {
  return {
    ...themeVariables,
    colors: {
      site: {
        background: '',
        code: '',
        text: '',
      },
      window: {
        background: '',
        commandError: '',
        commandSuccess: '',
        directory: '',
        options: {
          exit: '',
          minimize: '',
          maximize: '',
        },
        result: '',
        shellDirective: '',
        text: '',
        time: '',
        titleBarPrimary: '#dad9d9',
        titleBarSecondary: '',
      },
    },
  };
}
