import styled from 'styled-components';

export const QueryContainer = styled.div`
  margin: 1rem 0;
  & > p {
    margin: 0.25rem 0;
    outline: none;
  }

  & {
    .query__input {
      display: flex;
    }
  }
`;

export const QueryTime = styled.span`
  color: ${(props): string => props.theme.colors.window.time};
`;

export const QueryDirectory = styled.span`
  color: ${(props): string => props.theme.colors.window.directory};
`;

export const QueryShellDirective = styled.span`
  color: ${(props): string => props.theme.colors.window.shellDirective};
`;

type QueryInputProps = {
  isValidCommand: boolean;
};

export const QueryInput = styled.input.attrs(() => ({
  autoFocus: true,
  spellCheck: false,
  type: 'text',
}))<QueryInputProps>`
  background-color: ${(props): string => props.theme.colors.window.background};
  border: none;
  color: ${(props): string =>
    props.isValidCommand
      ? props.theme.colors.window.commandSuccess
      : props.theme.colors.window.commandError};
  flex: 2;
  margin: 0;
  outline: none;
  padding: 0;
`;
