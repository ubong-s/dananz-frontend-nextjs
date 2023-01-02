import Head from 'next/head';

export const Seo: React.FC<{
  metaTitle: string;
  metaDescription: string;
}> = ({ metaTitle, metaDescription }) => {
  return (
    <Head>
      <title>{`${metaTitle} - Dananz Interior`}</title>
      <meta name='description' content={metaDescription} />
    </Head>
  );
};
