import styled from 'styled-components';
import { SectionHeading } from '.';
import { mediaQueries } from '../../styles';
import { Product } from './Product';

const ProductListRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

const ProductListBottom = styled.div`
  display: grid;
  gap: 2.8rem;
`;

export const ProductList: React.FC = () => {
  const productThemes = [
    {
      id: 1,
      theme: 'Vintage',
      description:
        'the use of simple and limited elements to get the best effect or impression.',
    },
    {
      id: 2,
      theme: 'Minimalist',
      description:
        'the use of simple and limited elements to get the best effect or impression.',
    },
    {
      id: 3,
      theme: 'Modern',
      description:
        'the use of simple and limited elements to get the best effect or impression.',
    },
    {
      id: 4,
      theme: 'Transitional',
      description:
        'the use of simple and limited elements to get the best effect or impression.',
    },
  ];

  return (
    <ProductListRoot>
      <SectionHeading
        title='Product'
        subtitle='Choose your product themes.'
        subtitleDesc='Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.'
        subtitleType='grid'
      />
      <ProductListBottom>
        {productThemes.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListBottom>
    </ProductListRoot>
  );
};
