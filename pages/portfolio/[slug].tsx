import type { GetServerSidePropsContext } from 'next';
import { ProjectGallery, ProjectIntro } from '../../components/portfolio';
import { PageHeader, Seo } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { ProjectProps } from '../../types/global';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function SinglePortfolio({
  project,
}: {
  project: ProjectProps;
}) {
  const {
    attributes: {
      seo,
      project_header,
      project_banner,
      project_overview,
      design_process,
      gallery,
    },
  } = project;

  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo metaTitle={seo.metaTitle} metaDescription={seo.metaDescription} />
      <PageHeader
        title={project_header.title}
        description={project_header.description}
        imageURL={project_banner.data.attributes.url}
      />
      <ProjectIntro
        projectOverview={project_overview}
        designProcess={design_process}
      />
      <ProjectGallery gallery={gallery.data} />
    </motion.div>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const { slug } = params as { slug: string };
  const response = await strapiService.getSingleProject(slug);

  return {
    props: {
      project: response.data,
    },
  };
};
