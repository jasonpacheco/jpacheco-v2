import styled from 'styled-components';

export const QueryContainer = styled.div`
  margin: 1rem 0;
  & > p {
    margin: 0.25rem 0;
    outline: none;
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

export const QueryInput = styled.input.attrs(() => ({
  autoFocus: true,
  spellCheck: false,
  type: 'text',
}))`
  background-color: ${(props): string => props.theme.colors.window.background};
  border: none;
  color: ${(props): string => props.theme.colors.site.text};
  margin: 0;
  outline: none;
  padding: 0;
`;
