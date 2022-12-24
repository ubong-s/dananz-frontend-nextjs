import { Achievement } from '../../components/about/Achievement';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import { fadeIn } from '../../lib/animations';
import strapiService from '../../lib/api/strapiService';
import { AboutpageProps } from '../../types/about';
import { motion } from 'framer-motion';

export default function AboutUsPage({ data }: { data: AboutpageProps }) {
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
      <PageHeader
        title={data.attributes.page_header.title}
        description={data.attributes.page_header.description}
        imageURL={data.attributes.banner_image.data.attributes.url}
      />
      <Achievement
        stats={data.attributes.stats}
        title={data.attributes.achievement_title}
        image={data.attributes.achievement_image.data}
      />
      <WhyChooseUs />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getAboutpageData();

  return {
    props: {
      data: response.data,
    },
  };
};
