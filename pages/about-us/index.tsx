import { Achievement } from '../../components/about/Achievement';
import { PageHeader, Seo, WhyChooseUs } from '../../components/_common';
import strapiService from '../../lib/api/strapiService';
import { AboutpageProps } from '../../types/about';

export default function AboutUsPage({ data }: { data: AboutpageProps }) {
  return (
    <>
      <Seo
        metaTitle={data.attributes.seo.metaTitle}
        metaDescription={data.attributes.seo.metaDescription}
      />
      <PageHeader
        title={data.attributes.page_header.title}
        description={data.attributes.page_header.description}
        imageURL={data.attributes.banner_image.data.attributes.url}
      />
      <Achievement
        stats={data.attributes.stats}
        title={data.attributes.achievement_title}
        image={data.attributes.achievement_image.data}
      />
      <WhyChooseUs />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await strapiService.getAboutpageData();

  return {
    props: {
      data: response.data,
    },
  };
};
