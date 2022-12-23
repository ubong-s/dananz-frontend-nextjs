import { Projects } from '../../components/portfolio/Projects';
import { PageHeader, WhyChooseUs } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { ProjectProps } from '../../types/portfolio';

export default function PortfolioPage({ data }: { data: ProjectProps[] }) {
  console.log(data);

  return (
    <>
      <PageHeader
        title='Portofolio'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/portfolio-header.png'
      />
      <Projects projects={data} />
      <WhyChooseUs />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getProjects();

  return {
    props: {
      data: response.data,
    },
  };
};
