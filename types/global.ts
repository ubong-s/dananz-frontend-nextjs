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

export interface ServiceProps {
  id: number;
  attributes: {
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    title: string;
    description: string;
    image: { data: ImageProps };
  };
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
  id: number;
  attributes: {
    text: string;
    count: number;
  };
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
