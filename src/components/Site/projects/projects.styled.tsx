import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background-color: ${(props): string => props.theme.colors.site.background};
  border: 1px solid ${(props): string => props.theme.colors.window.border};
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    flex: 2;
  }
  div:last-child {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;
