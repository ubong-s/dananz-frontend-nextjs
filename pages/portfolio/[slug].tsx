import type {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from 'next';
import React from 'react';
import { ProjectGallery } from '../../components/portfolio/ProjectGallery';
import { ProjectIntro } from '../../components/portfolio/ProjectIntro';
import { PageHeader, Seo } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { ProjectProps } from '../../types/portfolio';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function SinglePortfolio({
  project,
}: {
  project: ProjectProps;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle={project.attributes.seo.metaTitle}
        metaDescription={project.attributes.seo.metaDescription}
      />
      <PageHeader
        title={project.attributes.project_header.title}
        description={project.attributes.project_header.description}
        imageURL={project.attributes.project_banner.data.attributes.url}
      />
      <ProjectIntro
        projectOverview={project.attributes.project_overview}
        designProcess={project.attributes.design_process}
      />
      <ProjectGallery gallery={project.attributes.gallery.data} />
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
