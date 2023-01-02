import { Projects } from '../../components/portfolio/';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import { PortfolioPageProps } from '../../types/portfolio';

export default function PortfolioPage({ data }: { data: PortfolioPageProps }) {
  console.log(data);

  const {
    pageData: {
      data: {
        attributes: { seo, page_header, page_banner },
      },
    },
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
      <Projects projects={projects.data} />
      <WhyChooseUs />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await strapiService.getProjectspageData();

  return {
    props: {
      data,
    },
  };
};
