import styled from 'styled-components';

export const WindowContainer = styled.div`
  background-color: ${(props): string => props.theme.colors.window.background};
  border: 1px solid ${(props): string => props.theme.colors.window.border};
  border-radius: 0.4rem;
  /* font-size: 0.8rem; */
  margin: 1rem auto;
  min-height: 70vh;
  overflow: hidden;
  width: 95%;
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
`;

export const WindowTitleContainer = styled.div`
  align-self: center;
  flex: 2;
  text-align: center;
  & > p {
    margin: 0;
    & > svg {
      height: ${(props): string => props.theme.variables.window.titleIconSize};
      margin-right: 0.2rem;
      width: ${(props): string => props.theme.variables.window.titleIconSize};
    }
  }
`;

export const WindowTitleBarSpacer = styled.div`
  flex: 1;
`;

export const WindowContent = styled.div`
  max-height: 70vh;
  padding: 0.5rem;
  overflow: scroll;
`;
