import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import typography from '../../typography';

export const ProductRoot = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: flex-start;

  .content {
    max-width: 470px;
  }

  .number,
  h4 {
    line-height: 2.5rem;
    font-weight: ${typography.weight.semibold};
    color: ${(props) => props.theme.colors.grayScale.black};
    font-size: 1.25rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  ${mediaQueries.desktop} {
    gap: 5rem;

    .number,
    h4 {
      line-height: 2.8rem;
      font-size: 2rem;
    }
  }
`;
