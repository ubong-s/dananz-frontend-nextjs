import { useState } from 'react';
import {
  ServicesRoot,
  ServicesTop,
  ServicesBottom,
} from '../../styles/components';
import { CloudinaryImage, SectionHeading } from '../_common';
import { Service } from './Service';
import {
  ImageProps,
  SectionHeadingProps,
  ServiceProps,
} from '../../types/global';

interface ServicesProps {
  title: SectionHeadingProps;
  image: ImageProps;
  services: ServiceProps[];
}

export const Services: React.FC<ServicesProps> = ({
  title,
  image,
  services,
}) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <ServicesRoot>
      <ServicesTop>
        <SectionHeading
          heading={title.heading}
          subheading={title.subheading}
          description={title.description}
          type={title.type}
        />

        <div className='services'>
          {services
            ?.sort((a, b) => a.id - b.id)
            .map((service, index) => {
              return (
                <Service
                  index={index}
                  key={service.id}
                  service={service}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              );
            })}
        </div>
      </ServicesTop>
      <ServicesBottom>
        <CloudinaryImage
          src={image.attributes.url}
          alt={image.attributes.name}
          width={image.attributes.width}
          height={image.attributes.height}
          className='img'
        />
      </ServicesBottom>
    </ServicesRoot>
  );
};
