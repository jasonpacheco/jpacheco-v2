import { DefaultTheme } from 'styled-components';

import themeVariables from './themeVariables';

export default function themeLight(): DefaultTheme {
  return {
    ...themeVariables,
    colors: {
      site: {
        background: '#f3f3f3',
        code: '#1ac300',
        codeBackground: '#ffffff',
        text: '#333333',
      },
      window: {
        background: '#fafafa',
        border: '#dfe0e1',
        commandError: '#ff413f',
        commandSuccess: '#1ac300',
        directory: '#0e48d5',
        options: {
          exit: '#ff4d49',
          minimize: '#ffdf41',
          maximize: '#00e162',
        },
        result: '',
        shellDirective: '#ff413f',
        text: '#a7adba',
        time: '#6395fa',
        titleBarPrimary: '#f4f6f7',
        titleBarSecondary: '#dfe0e1',
      },
    },
  };
}
