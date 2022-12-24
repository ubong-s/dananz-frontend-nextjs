import {
  ImageProps,
  ProjectProps,
  SectionHeadingProps,
  SeoProps,
  ServiceProps,
  StatProps,
} from './global';

export interface HomepageProps {
  pageData: {
    data: {
      id: number;
      attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        hero_image: { data: ImageProps };
        hero_title: string;
        about_heading: SectionHeadingProps;
        about_text: string;
        about_image: { data: ImageProps };
        services_heading: SectionHeadingProps;
        service_image: { data: ImageProps };
        product_heading: SectionHeadingProps;
        materials_heading: SectionHeadingProps;
        material_images: {
          data: ImageProps[];
        };
        seo: SeoProps;
      };
    };
  };
  milestones: { data: StatProps[] };
  services: { data: ServiceProps[] };
  projects: { data: ProjectProps[] };
}
