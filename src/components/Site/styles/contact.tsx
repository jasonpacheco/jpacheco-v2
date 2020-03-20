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

export const GitColor = styled.span`
  & > svg {
    fill: ${(props): string => props.theme.colors.site.text};
    transition-property: fill;
    transition-duration: ${({ theme: { variables } }): string =>
      `${variables.transitionSpeed}`};
    transition-timing-function: ${({ theme: { variables } }): string =>
      `${variables.transitionFn}`};
  }
`;
