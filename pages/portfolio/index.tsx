import { Projects } from '../../components/portfolio/Projects';
import { PageHeader, WhyChooseUs } from '../../components/_common';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title='Portofolio'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/portfolio-header.png'
      />
      <Projects />
      <WhyChooseUs />
    </>
  );
}
