import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

const ProjectGalleryRoot = styled.section`
  padding: 25px 0 50px;
  display: grid;
  gap: 1rem;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 50px 0 100px;
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

export const ProjectGallery = () => {
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
