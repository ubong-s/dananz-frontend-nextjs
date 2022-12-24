import {
  ImageProps,
  PageHeaderProps,
  SectionHeadingProps,
  SeoProps,
} from './global';

export interface MemberProps {
  attributes: {
    createdAt: string;
    image: { data: ImageProps };
    index: number;
    name: string;
    position: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface OurTeamPageProps {
  pageData: {
    data: {
      attributes: {
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
        page_banner: { data: ImageProps };
        page_header: PageHeaderProps;
        experts_title: SectionHeadingProps;
        why_us_title: SectionHeadingProps;
        seo: SeoProps;
      };
      id: number;
    };
  };
  members: {
    data: MemberProps[];
  };
}
