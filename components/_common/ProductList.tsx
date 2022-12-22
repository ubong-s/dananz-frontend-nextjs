import styled from 'styled-components';
import { SectionHeading } from '.';
import { mediaQueries } from '../../styles';
import { ProductProps, SectionHeadingProps } from '../../types/global';
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

interface ProductListProps {
  title: SectionHeadingProps;
  products: ProductProps[];
}

export const ProductList: React.FC<ProductListProps> = ({
  title,
  products,
}) => {
  return (
    <ProductListRoot>
      <SectionHeading
        heading={title.heading}
        subheading={title.subheading}
        description={title.description}
        type={title.type}
      />
      <ProductListBottom>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListBottom>
    </ProductListRoot>
  );
};
