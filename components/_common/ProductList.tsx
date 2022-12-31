import styled from 'styled-components';
import { SectionHeading } from '.';
import { mediaQueries } from '../../styles';
import { SectionHeadingProps, ProjectProps } from '../../types/global';
import { Product } from './Product';

// styles
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

// types
interface ProductListProps {
  title: SectionHeadingProps;
  products: ProjectProps[];
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
        {products
          ?.sort((a, b) => a.id - b.id)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ProductListBottom>
    </ProductListRoot>
  );
};
