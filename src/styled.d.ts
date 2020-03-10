import 'styled-components';

declare module 'styled-components' {
  export interface ThemeVariables {
    variables: {
      window: {
        titleBarHeight: string;
        optionsCircleDiameter: string;
        titleIconSize: string;
      };
    };
  }

  export interface DefaultTheme extends ThemeVariables {
    colors: {
      site: {
        background: string;
        text: string;
      };

      window: {
        background: string;
        commandError: string;
        commandSuccess: string;
        directory: string;
        options: {
          exit: string;
          minimize: string;
          maximize: string;
        };
        shellDirective: string;
        result: string;
        text: string;
        time: string;
        titleBarPrimary: string;
        titleBarSecondary: string;
      };
    };
  }
}
