import Image from 'next/image';
import Link from 'next/link';
import { routes } from '../../lib/routes/routes';
import {
  AboutBottom,
  AboutContent,
  AboutImage,
  AboutRoot,
} from '../../styles/components';
import { SectionHeadingProps, ImageProps } from '../../types/global';
import { Button, SectionHeading, CloudinaryImage } from '../_common';

interface AboutProps {
  title: SectionHeadingProps;
  image: ImageProps;
  content: string;
}

export const About: React.FC<AboutProps> = ({ title, image, content }) => {
  return (
    <AboutRoot>
      <SectionHeading
        heading={title.heading}
        subheading={title.subheading}
        type={title.type}
      />

      <AboutBottom>
        <AboutImage>
          <CloudinaryImage
            src={image.attributes.url}
            alt={image.attributes.name}
            width={image.attributes.width}
            height={image.attributes.height}
            className='img'
          />
          <div className='profile'>
            <img
              src='/assets/arga_danaan.png'
              alt='About'
              width={51}
              height={51}
            />
            <span>
              <h4>Arga Danaan</h4>
              <p>CEO of Dananz</p>
              <p></p>
            </span>
          </div>
        </AboutImage>
        <AboutContent>
          <p>{content}</p>

          <Link href={`/${routes.aboutUs}`} passHref>
            <Button variant='button'>Learn More</Button>
          </Link>
        </AboutContent>
      </AboutBottom>
    </AboutRoot>
  );
};
