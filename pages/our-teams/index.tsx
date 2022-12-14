import { PageHeader, WhyChooseUs } from '../../components/_common';

export default function OurTeamsPage() {
  return (
    <>
      <PageHeader
        title='Our Teams'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/team-header.png'
      />
      <WhyChooseUs />
    </>
  );
}
