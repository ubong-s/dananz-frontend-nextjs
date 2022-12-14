import { PageHeader, ProductList } from '../../components/_common';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title='Services'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/services-header.png'
      />
      <ProductList />
    </>
  );
}
