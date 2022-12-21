import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';

const ProjectGalleryRoot = styled.section`
  padding: 1.6rem 0 3.125rem;
  display: grid;
  gap: 1rem;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    padding: 3.125rem 0 6.25rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:nth-child(3) {
        grid-column: 1 / 3;
      }
    }
  }
`;

export const ProjectGallery: React.FC = () => {
  return (
    <ProjectGalleryRoot>
      <Image
        src='/assets/gallery/gallery_1.png'
        alt='gallery_1'
        height={513}
        width={584}
      />
      <Image
        src='/assets/gallery/gallery_2.png'
        alt='gallery_2'
        height={513}
        width={584}
      />
      <Image
        src='/assets/gallery/gallery_3.png'
        alt='gallery_3'
        height={513}
        width={1200}
      />
      <Image
        src='/assets/gallery/gallery_4.png'
        alt='gallery_4'
        height={513}
        width={584}
      />
      <Image
        src='/assets/gallery/gallery_5.png'
        alt='gallery_5'
        height={513}
        width={584}
      />
    </ProjectGalleryRoot>
  );
};
