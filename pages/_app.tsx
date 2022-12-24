import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/_common';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import { AnimatePresence, useScroll, motion } from 'framer-motion';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <Layout style={{ scaleX: scrollYProgress }}>
        <Component {...pageProps} key={router.pathname} />
      </Layout>
    </AnimatePresence>
  );
}
