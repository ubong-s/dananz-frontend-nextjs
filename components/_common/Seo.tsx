import Head from 'next/head';

// types
interface SeoProps {
  metaTitle: string;
  metaDescription: string;
}

export const Seo: React.FC<SeoProps> = ({ metaTitle, metaDescription }) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
    </Head>
  );
};
