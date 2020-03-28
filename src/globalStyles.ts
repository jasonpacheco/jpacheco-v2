import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background-color: ${(props): string => props.theme.colors.site.background};
    color: ${(props): string => props.theme.colors.site.text};
    font-family: 'Muli';

    font-size: 0.9rem;
    font-weight: 400;
    @media (min-width: 768px) {
      font-size: 1.1rem;
      }
    transition-property: background-color, color;
    transition-duration: ${({ theme: { variables } }): string =>
      `${variables.transitionSpeed}`};
    transition-timing-function: ${({ theme: { variables } }): string =>
      `${variables.transitionFn}`};
      width: 100%;
  }

  main {
    display: block;
  }

  h1, h2, h3, h4, h5 {
    color: ${(props): string => props.theme.colors.site.header};
  }

  h1 {
    font-weight: 800;
    margin:.67em 0;
  }

  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}

  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}

  code,kbd,samp {
    background-color: ${(props): string =>
      props.theme.colors.site.codeBackground};
    color: ${(props): string => props.theme.colors.site.code};
    transition-property: background-color, color;
    transition-duration: ${({ theme: { variables } }): string =>
      `${variables.transitionSpeed}`};
    transition-timing-function: ${({ theme: { variables } }): string =>
      `${variables.transitionFn}`};
    font-family: monospace;
    font-size: 1.1rem;
  }

  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}
`;

export default GlobalStyles;
