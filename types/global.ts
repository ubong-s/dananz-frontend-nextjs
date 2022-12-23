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
  subheading?: string | null;
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

export interface StatProps {
  id?: number;
  text: string;
  count: number;
}

export interface SeoProps {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string | null;
  metaRobots?: string | null;
  structuredData?: string | null;
  metaViewport?: string | null;
  canonicalURL?: string | null;
}

export interface PageHeaderProps {
  id: number;
  title: string;
  description: string;
}
