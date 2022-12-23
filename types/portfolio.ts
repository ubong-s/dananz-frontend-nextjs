import { ImageProps, PageHeaderProps, SeoProps } from './global';

export interface ProjectProps {
  id: number;
  attributes: {
    title: string;
    project_overview: string;
    design_process: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    gallery: {
      data: ImageProps[];
    };
    project_header: PageHeaderProps;
    project_banner: {
      data: ImageProps;
    };
    seo: SeoProps;
  };
}
