import styled from 'styled-components';

type IsShellProp = {
  isShell?: boolean;
};

export const WindowContainer = styled.div<IsShellProp>`
  ${({ isShell }): string =>
    isShell
      ? `
      font-family: "Fira Code", monospace;
      min-height: 70vh;
      overflow: hidden;
    `
      : ''};
  background-color: ${(props): string => props.theme.colors.window.background};
  border: 1px solid ${(props): string => props.theme.colors.window.border};
  transition-property: background-color, border;
  transition-duration: ${({ theme: { variables } }): string =>
    `${variables.transitionSpeed}`};
  transition-timing-function: ${({ theme: { variables } }): string =>
    `${variables.transitionFn}`};
  border-radius: 0.4rem;
  margin: 1rem auto;
  width: 95%;
  @media (min-width: 768px) {
    width: 729px;
  }
`;

export const WindowTitleBarContainer = styled.div`
  background-color: ${(props): string =>
    props.theme.colors.window.titleBarPrimary};
  border-bottom: 1px solid
    ${(props): string => props.theme.colors.window.border};
  box-sizing: border-box;
  display: flex;
  font-family: -apple-system, Helvetica, Arial, sans-serif;
  justify-content: space-between;
  padding: 0.5rem;
  height: ${(props): string => props.theme.variables.window.titleBarHeight};
  transition-property: background-color, border-bottom;
  transition-duration: ${({ theme: { variables } }): string =>
    `${variables.transitionSpeed}`};
  transition-timing-function: ${({ theme: { variables } }): string =>
    `${variables.transitionFn}`};
`;

export const WindowOptionsContainer = styled.div`
  align-self: center;
  flex: 1;
`;

interface WindowOptionCircleProps {
  optionFor: 'exit' | 'minimize' | 'maximize';
}

export const WindowOptionCircle = styled.span<WindowOptionCircleProps>`
  background-color: ${(props): string =>
    props.theme.colors.window.options[props.optionFor]};
  border-radius: 50%;
  display: inline-block;
  height: ${(props): string =>
    props.theme.variables.window.optionsCircleDiameter};
  margin-right: 0.5rem;
  width: ${(props): string =>
    props.theme.variables.window.optionsCircleDiameter};
  transition-property: background-color;
  transition-duration: ${({ theme: { variables } }): string =>
    `${variables.transitionSpeed}`};
  transition-timing-function: ${({ theme: { variables } }): string =>
    `${variables.transitionFn}`};
`;

export const WindowTitleContainer = styled.div`
  align-self: center;
  flex: 2;
  text-align: center;

  div {
    align-self: center;
    display: flex;
    justify-content: center;

    span:first-child {
      margin-right: 0.2rem;
      svg {
        height: ${(props): string =>
          props.theme.variables.window.titleIconSize};
        width: ${(props): string => props.theme.variables.window.titleIconSize};
      }
    }
  }
`;

export const WindowTitleBarSpacer = styled.div`
  flex: 1;
  text-align: right;
  & > span {
    cursor: pointer;
    outline: none;
  }
`;

export const WindowContent = styled.div<IsShellProp>`
  padding: 0.5rem 1rem;
  ${({ isShell }): string =>
    isShell
      ? `
      max-height: 70vh;
      overflow: scroll;
    `
      : ''};
`;
