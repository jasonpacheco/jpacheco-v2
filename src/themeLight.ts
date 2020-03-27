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
        header: '#454c41',
        text: '#414a4c',
        link: '#2770ff',
        linkHover: '#1357F5',
      },
      window: {
        background: '#fafafa',
        border: '#dfe0e1',
        commandError: '#ff413f',
        commandSuccess: '#1ac300',
        directory: '#3090a6',
        file: '#ff6382',
        options: {
          exit: '#ff4d49',
          minimize: '#ffdf41',
          maximize: '#00e162',
        },
        shellDirective: '#b30009',
        text: '#a7adba',
        time: '#bf7f00',
        titleBarPrimary: '#f4f6f7',
        titleBarSecondary: '#dfe0e1',
      },
    },
  };
}
