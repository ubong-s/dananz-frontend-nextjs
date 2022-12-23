import {
  ImageProps,
  ProductProps,
  SectionHeadingProps,
  SeoProps,
  ServiceProps,
  StatProps,
} from './global';

export interface HomepageProps {
  id: number;
  attributes: {
    hero_image: { data: ImageProps };
    hero_title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    about_text: string;
    about_image: { data: ImageProps };
    about_heading: SectionHeadingProps;
    services_heading: SectionHeadingProps;
    services: ServiceProps[];
    service_image: { data: ImageProps };
    product_heading: SectionHeadingProps;
    products: ProductProps[];
    materials_heading: SectionHeadingProps;
    material_images: {
      data: ImageProps[];
    };
    stats: StatProps[];
    seo: SeoProps;
  };
}
