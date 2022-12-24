import { TeamMembers } from '../../components/our-teams/TeamMembers';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import strapiService from '../../lib/api/strapiService';
import { OurTeamPageProps } from '../../types/our-team';

export default function OurTeamsPage({ data }: { data: OurTeamPageProps }) {
  const { pageData, members } = data;

  console.log(data);

  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle={pageData.data.attributes.seo.metaTitle}
        metaDescription={pageData.data.attributes.seo.metaDescription}
      />
      <PageHeader
        title={pageData.data.attributes.page_header.title}
        description={pageData.data.attributes.page_header.description}
        imageURL={pageData.data.attributes.page_banner.data.attributes.url}
      />
      <TeamMembers
        members={members.data}
        header={pageData.data.attributes.experts_title}
      />
      <WhyChooseUs />
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const data = await strapiService.getTeampageData();

  return {
    props: {
      data,
    },
  };
};
