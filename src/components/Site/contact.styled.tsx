import styled from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const InnerWrapper = styled(OuterWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type GitColorProps = {
  size?: string;
};

export const GitColor = styled.span<GitColorProps>`
  & > svg {
    fill: ${(props): string => props.theme.colors.site.text};
    transition-property: fill;
    transition-duration: ${({ theme: { variables } }): string =>
      `${variables.transitionSpeed}`};
    transition-timing-function: ${({ theme: { variables } }): string =>
      `${variables.transitionFn}`};

    ${({ size }): string =>
      size ? `width: ${size}em; height: ${size}em;` : ''};
  }
`;
