import { ImageProps, PageHeaderProps, ProjectProps, SeoProps } from './global';

export interface PortfolioPageProps {
  pageData: {
    data: {
      attributes: {
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
        page_banner: { data: ImageProps };
        page_header: PageHeaderProps;
        seo: SeoProps;
      };
      id: number;
    };
  };
  projects: {
    data: ProjectProps[];
  };
}
