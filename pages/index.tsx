import Head from 'next/head';
import { About } from '../components/home/About';
import { Hero } from '../components/home/Hero';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
