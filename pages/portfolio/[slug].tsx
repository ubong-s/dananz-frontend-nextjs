import React from 'react';
import { ProjectGallery } from '../../components/portfolio/ProjectGallery';
import { ProjectIntro } from '../../components/portfolio/ProjectIntro';
import { PageHeader } from '../../components/_common';

export default function SinglePortfolio() {
  return (
    <div>
      <PageHeader
        title='Minimalist Room'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/portfolio-page-header.png'
      />
      <ProjectIntro />
      <ProjectGallery />
    </div>
  );
}
