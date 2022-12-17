interface ProjectProps {
  id: number;
  name: string;
  slug: string;
  cover_image: string;
  description: string;
  project_overview: string;
  design_process: string;
  date: string;
  gallery: {
    id: number;
    url: string;
  }[];
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: 'Minimalist Room',
    slug: 'minimalist-room',
    cover_image: '/assets/portfolio/cover',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    project_overview:
      'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. ',
    design_process: `<p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p> <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>`,
    date: 'July 22 - 2022',
    gallery: [
      {
        id: 1,
        url: '/assets/portfolio/image-1.png',
      },
      {
        id: 2,
        url: '/assets/portfolio/image-2.png',
      },
      {
        id: 3,
        url: '/assets/portfolio/image-2.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Vintage Room',
    slug: 'vintage-room',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    cover_image: '/assets/portfolio/cover',
    project_overview:
      'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. ',
    design_process: `<p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p> <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>`,
    date: 'July 22 - 2022',
    gallery: [
      {
        id: 1,
        url: '/assets/portfolio/image-1.png',
      },
      {
        id: 2,
        url: '/assets/portfolio/image-2.png',
      },
      {
        id: 3,
        url: '/assets/portfolio/image-2.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Mordern Room',
    slug: 'mordern-room',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    cover_image: '/assets/portfolio/cover',
    project_overview:
      'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. ',
    design_process: `<p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p> <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>`,
    date: 'July 22 - 2022',
    gallery: [
      {
        id: 1,
        url: '/assets/portfolio/image-1.png',
      },
      {
        id: 2,
        url: '/assets/portfolio/image-2.png',
      },
      {
        id: 3,
        url: '/assets/portfolio/image-2.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Transitional Room',
    slug: 'transitional-room',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    cover_image: '/assets/portfolio/cover',
    project_overview:
      'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. ',
    design_process: `<p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p> <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>`,
    date: 'July 22 - 2022',
    gallery: [
      {
        id: 1,
        url: '/assets/portfolio/image-1.png',
      },
      {
        id: 2,
        url: '/assets/portfolio/image-2.png',
      },
      {
        id: 3,
        url: '/assets/portfolio/image-2.png',
      },
    ],
  },
];
