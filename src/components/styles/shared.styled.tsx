import styled from 'styled-components';

export const RoundedImage = styled.img`
  border-radius: 5px;
`;

export const StyledLink = styled.a`
  color: ${(props): string => props.theme.colors.site.link};
  transition-property: color;
  transition-duration: ${({ theme: { variables } }): string =>
    `${variables.transitionSpeed}`};
  transition-timing-function: ${({ theme: { variables } }): string =>
    `${variables.transitionFn}`};

  &:hover {
    color: ${(props): string => props.theme.colors.site.linkHover};
    text-decoration: none;
  }
`;

export const StyledInnerLink = styled.span`
  a {
    color: ${(props): string => props.theme.colors.site.link};
    transition-property: color;
    transition-duration: ${({ theme: { variables } }): string =>
      `${variables.transitionSpeed}`};
    transition-timing-function: ${({ theme: { variables } }): string =>
      `${variables.transitionFn}`};

    &:hover {
      color: ${(props): string => props.theme.colors.site.linkHover};
      text-decoration: none;
    }
  }
`;
