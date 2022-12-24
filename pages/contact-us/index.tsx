import { ContactForm } from '../../components/contact/ContactForm';
import { Locations } from '../../components/contact/Locations';
import { PageHeader } from '../../components/_common';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export default function ContactUsPage() {
  return (
    <motion.div
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='initial'
    >
      <PageHeader
        title='Contact Us'
        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      />
      <ContactForm />
      <Locations />
    </motion.div>
  );
}
