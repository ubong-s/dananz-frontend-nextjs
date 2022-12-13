import styled from 'styled-components';
import { typography, breakpoints } from '../../styles/globalStyles';

interface ProductProps {
  product: { id: number; theme: string; description: string };
}

const ProductRoot = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: flex-start;

  .content {
    max-width: 470px;
  }

  .number,
  h4 {
    line-height: 40px;
    font-weight: ${typography.weight.semibold};
    color: ${(props) => props.theme.colors.grayScale.black};
    font-size: 18px;
  }

  h4 {
    margin-bottom: 1rem;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: 80px;

    .number,
    h4 {
      line-height: 45px;
      font-size: 32px;
    }
  }
`;

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <ProductRoot>
      <span className='number'>
        {product.id > 10 ? product.id : `0${product.id}`}
      </span>
      <div className='content'>
        <h4>{product.theme}</h4>
        <p>{product.description}</p>
      </div>
      <button type='button' title={`View ${product.theme}`}>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.66699 16H25.3337'
            stroke='black'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M16 6.66667L25.3333 16L16 25.3333'
            stroke='black'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    </ProductRoot>
  );
};
