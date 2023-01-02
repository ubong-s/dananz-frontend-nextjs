import { useRouter } from 'next/router';
import { CallToAction, SubscribeAndSocial } from '.';

export const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      {router.asPath !== '/contact-us' && <CallToAction />}
      <SubscribeAndSocial />
    </footer>
  );
};
