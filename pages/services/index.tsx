import { ServicesList } from '../../components/services/ServicesList';
import { PageHeader, ProductList, Seo } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import { ServicesPageProps } from '../../types/services';

export default function ServicesPage({ data }: { data: ServicesPageProps }) {
  const {
    pageData: {
      data: {
        attributes: {
          seo,
          page_header,
          page_banner,
          services_heading,
          product_heading,
        },
      },
    },
    services,
    projects,
  } = data;

  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo metaTitle={seo.metaTitle} metaDescription={seo.metaDescription} />
      <PageHeader
        title={page_header.title}
        description={page_header.description}
        imageURL={page_banner.data.attributes.url}
      />
      <ServicesList title={services_heading} services={services.data} />
      <ProductList title={product_heading} products={projects.data} />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await strapiService.getServicespageData();

  return {
    props: {
      data,
    },
  };
};
