import { ServicesList } from '../../components/services/ServicesList';
import { PageHeader, ProductList, Seo } from '../../components/_common';

import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function ServicesPage() {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle='Services'
        metaDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      />
      <PageHeader
        title='Services'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/services-header.png'
      />
      <ServicesList />
      {/* <ProductList /> */}
    </motion.div>
  );
}
