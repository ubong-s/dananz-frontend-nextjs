import { ImageProps } from '../../types/global';
import { containerVariants, itemVariants } from '../../lib/animations';
import {
  GalleryImage,
  ProjectGalleryRoot,
} from '../../styles/components/portfolio';
import { CloudinaryImage } from '../_common';

export const ProjectGallery: React.FC<{ gallery: ImageProps[] }> = ({
  gallery,
}) => {
  return (
    <ProjectGalleryRoot
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {gallery.map((image, i) => {
        const {
          id,
          attributes: { url, name, width, height },
        } = image;

        return (
          <GalleryImage
            variants={itemVariants}
            key={id}
            initial='hidden'
            whileInView='visible'
          >
            <CloudinaryImage
              src={url}
              alt={name}
              width={width}
              height={height}
            />
          </GalleryImage>
        );
      })}
    </ProjectGalleryRoot>
  );
};
