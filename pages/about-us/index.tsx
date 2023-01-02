import { Achievement } from '../../components/about';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import { fadeIn } from '../../lib/animations';
import strapiService from '../../lib/api/strapiService';
import { AboutpageProps } from '../../types/about';
import { motion } from 'framer-motion';

export default function AboutUsPage({ data }: { data: AboutpageProps }) {
  const {
    pageData: {
      data: {
        attributes: {
          seo,
          page_header,
          banner_image,
          achievement_title,
          achievement_image,
        },
      },
    },
    milestones,
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
        imageURL={banner_image.data.attributes.url}
      />
      <Achievement
        stats={milestones.data}
        title={achievement_title}
        image={achievement_image.data}
      />
      <WhyChooseUs />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await strapiService.getAboutpageData();

  return {
    props: {
      data,
    },
  };
};
