import styled from 'styled-components';
import { SectionHeading } from '.';
import { breakpoints } from '../../styles';
import { Product } from './Product';

const ProductListRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0;
  }
`;

const ProductListTop = styled.div`
  margin: 1.5rem 0 3rem;

  h3 {
    font-size: 22px;
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      font-size: 36px;
      max-width: 337px;
    }

    p {
      max-width: 475px;
    }
  }
`;

const ProductListBottom = styled.div`
  display: grid;
  gap: 45px;
`;

export const ProductList = (): React.ReactElement => {
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
      <SectionHeading title='Product' />
      <ProductListTop>
        <h3>Choose your product themes.</h3>
        <p>
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </ProductListTop>
      <ProductListBottom>
        {productThemes.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListBottom>
    </ProductListRoot>
  );
};
