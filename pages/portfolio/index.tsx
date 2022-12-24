import { Projects } from '../../components/portfolio/Projects';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { ProjectProps } from '../../types/portfolio';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function PortfolioPage({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle='Portofolio'
        metaDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      />
      <PageHeader
        title='Portofolio'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/portfolio-header.png'
      />
      <Projects projects={projects} />
      <WhyChooseUs />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getProjects();

  return {
    props: {
      projects: response.data,
    },
  };
};
