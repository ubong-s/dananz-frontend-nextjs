import { Button, CloudinaryImage, SectionHeading } from '../_common';
import { ImageProps, SectionHeadingProps } from '../../types/global';
import {
  MaterialsContent,
  MaterialsContentLeft,
  MaterialsContentRight,
  MaterialsRoot,
} from '../../styles/components/home';

interface MaterialsProps {
  title: SectionHeadingProps;
  images: ImageProps[];
}

export const Materials: React.FC<MaterialsProps> = ({ title, images }) => {
  return (
    <MaterialsRoot>
      <SectionHeading heading={title.heading} />
      <MaterialsContent>
        <MaterialsContentLeft>
          <h3>{title.subheading}</h3>
          <p>{title.description}</p>
          <Button variant='button-alt'>Materials</Button>
        </MaterialsContentLeft>
        <MaterialsContentRight>
          {images.map((image) => (
            <CloudinaryImage
              key={image.id}
              src={image.attributes.url}
              alt={image.attributes.name}
              width={image.attributes.width}
              height={image.attributes.height}
            />
          ))}
        </MaterialsContentRight>
      </MaterialsContent>
    </MaterialsRoot>
  );
};

export default Materials;
