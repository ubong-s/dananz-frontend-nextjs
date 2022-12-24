import {
  ImageProps,
  PageHeaderProps,
  SectionHeadingProps,
  SeoProps,
  StatProps,
} from './global';

export interface AboutpageProps {
  pageData: {
    data: {
      id: number;
      attributes: {
        banner_image: { data: ImageProps };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        page_header: PageHeaderProps;
        achievement_title: SectionHeadingProps;
        achievement_image: {
          data: ImageProps;
        };

        seo: SeoProps;
      };
    };
  };
  milestones: { data: StatProps[] };
}
