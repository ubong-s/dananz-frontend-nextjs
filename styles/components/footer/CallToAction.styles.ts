import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const CallToActionRoot = styled.div`
  padding: 3.125rem 0;
  background-color: ${(props) => props.theme.colors.main.primary100};

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

export const CallToActionInner = styled.div`
  display: grid;

  gap: 1.5rem;

  h2 {
    color: ${(props) => props.theme.colors.grayScale.white};
  }

  p {
    color: ${(props) => props.theme.colors.grayScale.lightGray};
    margin-bottom: 2rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 1.5fr 1fr;
    align-items: flex-start;
    gap: 5rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;
