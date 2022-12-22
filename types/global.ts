interface ImageFormatProps {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width?: number;
  height?: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

export interface ProductProps {
  id: number;
  product_heading: string;
  product_desc: string;
}

export interface ServiceProps {
  id: number;
  service_title: string;
  service_desc: string;
}

export interface SectionHeadingProps {
  id?: number;
  heading: string;
  subheading?: string;
  description?: string | null;
  type?: 'full' | 'half' | 'grid';
}

export interface ImageProps {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      small?: ImageFormatProps;
      medium?: ImageFormatProps;
      thumbnail: ImageFormatProps;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface HomepageProps {
  id: number;
  attributes: {
    meta_title: string;
    meta_description: string;
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
    hero_image: { data: ImageProps };
  };
}
