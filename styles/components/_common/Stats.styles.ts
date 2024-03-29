import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const StatRoot = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  font-size: 2rem;
  padding: 1rem 2rem 1.5rem;
  border-bottom: dashed 1px ${(props) => props.theme.colors.grayScale.lightGray};
  margin-bottom: 0;

  span {
    display: block;
    font-size: 1rem;
  }

  &:last-of-type {
    border-bottom: none;
  }

  ${mediaQueries.tablet} {
    font-size: 2.5rem;
    border-right: dashed 1px
      ${(props) => props.theme.colors.grayScale.lightGray};
    border-bottom: none;

    &:last-of-type {
      border-right: none;
    }
  }

  ${mediaQueries.large} {
    text-align: center;
    font-size: 3.25rem;
    border: none;
    padding: 1.6rem 3.125rem;
  }
`;

export const StatsRoot = styled.div`
  background-color: ${(props) => props.theme.colors.main.primary100};

  ${mediaQueries.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.large} {
    grid-template-columns: 1fr;
    padding: 1.6rem 0;
  }
`;
