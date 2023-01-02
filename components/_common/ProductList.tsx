import { SectionHeading } from '.';
import {
  ProductListBottom,
  ProductListRoot,
} from '../../styles/components/_common';
import { SectionHeadingProps, ProjectProps } from '../../types/global';
import { Product } from '.';

export const ProductList: React.FC<{
  title: SectionHeadingProps;
  products: ProjectProps[];
}> = ({ title, products }) => {
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
