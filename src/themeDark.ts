import { DefaultTheme } from 'styled-components';

import themeVariables from './themeVariables';

export default function themeDark(): DefaultTheme {
  return {
    ...themeVariables,
    colors: {
      site: {
        background: '#202933',
        code: '#99c794',
        text: '#d8dee9',
      },
      window: {
        background: '#1b2b34',
        commandError: '#ec5f67',
        commandSuccess: '#99c794',
        directory: '#6699cc',
        options: {
          exit: '#ed655a',
          minimize: '#e1c04c',
          maximize: '#72be47',
        },
        result: '',
        shellDirective: '#ec5f67',
        text: '#a7adba',
        time: '#fac863',
        titleBarPrimary: '#202124',
        titleBarSecondary: '#35363a',
      },
    },
  };
}
