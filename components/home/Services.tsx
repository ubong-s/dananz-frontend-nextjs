import { useState } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { SectionHeading } from '../_common';
import Image from 'next/image';
import { Service } from './Service';
import {
  ImageProps,
  SectionHeadingProps,
  ServiceProps,
} from '../../types/global';

const ServicesRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

const ServicesTop = styled.div`
  position: relative;
  max-width: 880px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  z-index: 1;

  .services {
    padding: 1rem 0;
  }

  ${mediaQueries.desktop} {
    .services {
      padding: 1.5rem 2.5rem 1.5rem 0;
    }
  }
`;

const ServicesBottom = styled.div`
  text-align: right;
  margin-top: 1.5rem;

  img {
    height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    margin-top: -10.7rem;
    img {
      height: 100%;
    }
  }
`;

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
          {services.map((service, index) => {
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
        <Image
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
