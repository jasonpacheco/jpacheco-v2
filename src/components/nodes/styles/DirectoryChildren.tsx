import styled from 'styled-components';

export const FileColor = styled.span`
  color: ${(props): string => props.theme.colors.window.file};
`;

export const DirectoryColor = styled.span`
  color: ${(props): string => props.theme.colors.window.directory};
`;

interface ListContainerProps {
  maxColumns: number;
  maxWidth: number;
}
export const ListContainer = styled.div<ListContainerProps>`
  display: inline-block;
  columns: ${(props): number => props.maxColumns} calc(1ch * 9);
  margin-bottom: 0;
  padding-bottom: 0;
  & > p {
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
