import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { ImageProps } from '../../types/global';

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

export const ProjectGallery: React.FC<{ gallery: ImageProps[] }> = ({
  gallery,
}) => {
  return (
    <ProjectGalleryRoot>
      {gallery.map((image) => {
        const {
          id,
          attributes: { url, name, width, height },
        } = image;

        return (
          <Image key={id} src={url} alt={name} width={width} height={height} />
        );
      })}
    </ProjectGalleryRoot>
  );
};
