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
