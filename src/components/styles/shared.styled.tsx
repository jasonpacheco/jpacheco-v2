import styled from 'styled-components';

export const RoundedImage = styled.img`
  border-radius: 5px;
`;

export const StyledLink = styled.a`
  color: ${(props): string => props.theme.colors.site.link};
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  outline: none; */

  &:hover {
    color: ${(props): string => props.theme.colors.site.linkHover};
    text-decoration: none;
  }
`;
