import Link from 'next/link';
import styled from 'styled-components';
import { typography, mediaQueries } from '../../styles';
import { ProductProps } from '../../types/global';
import { ProjectProps } from '../../types/portfolio';

// styles
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

// types
interface ProductCompProps {
  product: ProjectProps;
}

export const Product: React.FC<ProductCompProps> = ({ product }) => {
  const {
    project_header: { title, description },
    slug,
  } = product.attributes;

  return (
    <ProductRoot>
      <span className='number'>
        {product.id > 10 ? product.id : `0${product.id}`}
      </span>
      <div className='content'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Link href={`/portfolio/${slug}`}>
        <button type='button' title={`View ${title}`}>
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
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 6.66667L25.3333 16L16 25.3333'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </Link>
    </ProductRoot>
  );
};
