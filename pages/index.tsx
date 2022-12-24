import { About, Hero, Materials, Services } from '../components/home';
import { Seo, ProductList } from '../components/_common';
import { HomepageProps } from '../types/home';
import strapiService from '../lib/api/strapiService';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/animations';

export default function HomePage({ data }: { data: HomepageProps }) {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle={data.attributes.seo.metaTitle}
        metaDescription={data.attributes.seo.metaDescription}
      />
      <Hero
        title={data.attributes?.hero_title}
        image={data.attributes?.hero_image.data}
        stats={data.attributes.stats}
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
      {/* <ProductList
        title={data.attributes.product_heading}
        products={data.attributes.products}
      /> */}
      <Materials
        title={data.attributes.materials_heading}
        images={data.attributes.material_images.data}
      />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getHomepageData();

  return {
    props: {
      data: response.data,
    },
  };
};
