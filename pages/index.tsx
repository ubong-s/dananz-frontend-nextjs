import { useState } from 'react';
import Head from 'next/head';
import { About } from '../components/home/About';
import { Hero } from '../components/home/Hero';
import { ProductList } from '../components/_common/ProductList';
import { Services } from '../components/home/Services';
import { Materials } from '../components/home/Materials';
import strapiService from '../lib/api/strapiService';
import { HomepageProps } from '../types/global';
import useSWR from 'swr';

export default function HomePage({ data }: { data: HomepageProps }) {
  return (
    <>
      <Hero
        title={data.attributes?.hero_title}
        image={data.attributes?.hero_image.data.attributes.url}
      />
      <About
        title={data.attributes.about_heading}
        image={data.attributes.about_image.data}
        content={data.attributes.about_text}
      />
      <Services
        title={data.attributes.services_heading}
        image={data.attributes.service_image.data}
        services={data.attributes.services}
      />
      <ProductList
        title={data.attributes.product_heading}
        products={data.attributes.products}
      />
      <Materials
        title={data.attributes.materials_heading}
        images={data.attributes.material_images.data}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getHomepage();

  return {
    props: {
      data: response.data,
    },
  };
};
