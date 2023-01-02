import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ServicesRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

export const ServicesTop = styled.div`
  position: relative;
  max-width: 880px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  z-index: 1;

  .services {
    padding: 1rem 0;
  }

  ${mediaQueries.desktop} {
    .services {
      padding: 1.5rem 2.5rem 1.5rem 0;
    }
  }
`;

export const ServicesBottom = styled.div`
  text-align: right;
  margin-top: 1.5rem;

  img {
    height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    margin-top: -10.7rem;
    img {
      height: 100%;
    }
  }
`;
