import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CallToAction } from './CallToAction';
import { SubscribeAndSocial } from './SubscribeAndSocial';

const FooterRoot = styled.footer``;

export const Footer = () => {
  const router = useRouter();

  return (
    <FooterRoot>
      {router.asPath !== '/contact-us' && <CallToAction />}
      <SubscribeAndSocial />
    </FooterRoot>
  );
};
