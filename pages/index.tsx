import { About, Hero, Materials, Services } from '../components/home';
import { Seo, ProductList } from '../components/_common';
import { HomepageProps } from '../types/global';
import strapiService from '../lib/api/strapiService';

export default function HomePage({ data }: { data: HomepageProps }) {
  return (
    <>
      <Seo
        metaTitle={data.attributes.meta_title}
        metaDescription={data.attributes.meta_description}
      />
      <Hero
        title={data.attributes?.hero_title}
        image={data.attributes?.hero_image.data.attributes.url}
      />
      <About
        title={data.attributes.about_heading}
        image={data.attributes.about_image.data}
        content={data.attributes.about_text}
      />
      <Services
        title={data.attributes.services_heading}
        image={data.attributes.service_image.data}
        services={data.attributes.services}
      />
      <ProductList
        title={data.attributes.product_heading}
        products={data.attributes.products}
      />
      <Materials
        title={data.attributes.materials_heading}
        images={data.attributes.material_images.data}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getHomepage();

  return {
    props: {
      data: response.data,
    },
  };
};
