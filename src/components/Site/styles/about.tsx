import styled from 'styled-components';

type ParagraphWImageProps = {
  flipRight?: boolean;
};

export const ParagraphWImage = styled.div<ParagraphWImageProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: ${(props): string =>
    props.flipRight ? 'row-reverse' : 'row'};
  div:first-child {
    h3 {
      padding: 0;
      margin: 0 0 1rem 0;
    }

    padding: ${(props): string =>
      props.flipRight ? '0 0 0 0.5rem' : '0 0.5rem 0 0'};
    p {
      margin: 0;
    }
  }
`;

export const AboutContainer = styled.div`
  font-size: 0.8rem;
`;
