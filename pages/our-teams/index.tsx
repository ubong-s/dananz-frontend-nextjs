import { TeamMembers } from '../../components/our-teams/TeamMembers';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function OurTeamsPage() {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <Seo
        metaTitle='Our Team'
        metaDescription='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      />
      <PageHeader
        title='Our Team'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        imageURL='/assets/headers/team-header.png'
      />
      <TeamMembers />
      <WhyChooseUs />
    </motion.div>
  );
}
