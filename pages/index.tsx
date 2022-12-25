import { motion } from 'framer-motion';
import { About, Hero, Materials, Services } from '../components/home';
import { Seo, ProductList } from '../components/_common';
import { HomepageProps } from '../types/home';
import { fadeIn } from '../lib/animations';
import strapiService from '../lib/api/strapiService';

export default function HomePage({ data }: { data: HomepageProps }) {
  const {
    pageData: {
      data: {
        attributes: {
          seo,
          hero_title,
          hero_image,
          about_heading,
          about_image,
          about_text,
          services_heading,
          service_image,
          product_heading,
          materials_heading,
          material_images,
        },
      },
    },
    milestones,
    projects,
    services,
  } = data;

  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo metaTitle={seo.metaTitle} metaDescription={seo.metaDescription} />
      <Hero
        title={hero_title}
        image={hero_image.data}
        stats={milestones.data}
      />
      <About
        title={about_heading}
        image={about_image.data}
        content={about_text}
      />
      <Services
        title={services_heading}
        image={service_image.data}
        services={services.data}
      />
      <ProductList title={product_heading} products={projects.data} />
      <Materials title={materials_heading} images={material_images.data} />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await strapiService.getHomepageData();

  return {
    props: {
      data,
    },
  };
};
