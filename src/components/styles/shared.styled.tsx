import styled from 'styled-components';

export const RoundedImage = styled.img`
  border-radius: 5px;
`;

export const StyledLink = styled.a`
  color: ${(props): string => props.theme.colors.site.link};

  outline: none;

  &:hover {
    color: ${(props): string => props.theme.colors.site.linkHover};
    text-decoration: none;
  }
`;
