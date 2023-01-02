import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ProductListRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

export const ProductListBottom = styled.div`
  display: grid;
  gap: 2.8rem;
`;
