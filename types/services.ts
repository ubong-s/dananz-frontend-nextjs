import {
  ImageProps,
  PageHeaderProps,
  ProjectProps,
  SectionHeadingProps,
  SeoProps,
  ServiceProps,
} from './global';

export interface ServicesPageProps {
  pageData: {
    data: {
      id: number;
      attributes: {
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
        page_header: PageHeaderProps;
        page_banner: { data: ImageProps };
        services_heading: SectionHeadingProps;
        product_heading: SectionHeadingProps;
        seo: SeoProps;
      };
    };
  };
  projects: {
    data: ProjectProps[];
  };
  services: {
    data: ServiceProps[];
  };
}
