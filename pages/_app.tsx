import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/_common';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import { AnimatePresence, useScroll, motion, useSpring } from 'framer-motion';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(
    'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
      .length
  );

  return (
    <AnimatePresence mode='wait'>
      <Layout>
        <motion.div className='progress-bar' style={{ scaleX }} />
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  );
}
