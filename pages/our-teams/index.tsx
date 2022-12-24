import { TeamMembers } from '../../components/our-teams/TeamMembers';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';
import strapiService from '../../lib/api/strapiService';
import { OurTeamPageProps } from '../../types/our-team';

export default function OurTeamsPage({ data }: { data: OurTeamPageProps }) {
  const {
    pageData: {
      data: {
        attributes: { seo, page_header, page_banner, experts_title },
      },
    },
    members,
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
      <TeamMembers members={members.data} title={experts_title} />
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
