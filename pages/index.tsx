import Head from 'next/head';
import { About } from '../components/home/About';
import { Hero } from '../components/home/Hero';
import { ProductList } from '../components/_common/ProductList';
import { Services } from '../components/home/Services';
import { Mateials } from '../components/home/Mateials';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductList />
      <Mateials />
    </>
  );
}
