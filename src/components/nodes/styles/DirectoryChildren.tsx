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
  -webkit-columns: ${(props): number => props.maxColumns}
    calc(1ch * ${(props): number => props.maxWidth});
  -moz-columns: ${(props): number => props.maxColumns}
    calc(1ch * ${(props): number => props.maxWidth});
  columns: ${(props): number => props.maxColumns}
    calc(2ch * ${(props): number => props.maxWidth});

  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    display: inline-block;
    columns: ${(props): number => props.maxColumns}
      calc(1ch * ${(props): number => props.maxWidth});
  }

  margin-bottom: 0;
  padding-bottom: 0;
`;

export const ListElement = styled.div`
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 0;
`;
