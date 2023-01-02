import Link from 'next/link';
import { ProductRoot } from '../../styles/components/_common';
import { ProjectProps } from '../../types/global';

export const Product: React.FC<{ product: ProjectProps }> = ({ product }) => {
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
