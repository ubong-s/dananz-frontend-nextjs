import Image from 'next/image';
import styled from 'styled-components';
import { services } from '../../lib/services';
import { mediaQueries } from '../../styles';
import { SectionHeadingProps } from '../../types/global';
import { ServiceProps } from '../../types/services';
import { SectionHeading } from '../_common';

const ServicesListRoot = styled.section`
  padding: 3.125rem 0 1.6rem;

  ${mediaQueries.desktop} {
    padding: 5.6rem 0 3.5rem;
  }
`;

const ServicesListing = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;

const ServicesListItem = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;

  img {
    height: 200px;
    object-fit: cover;
  }

  h4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  ${mediaQueries.tablet} {
    img {
      width: 100%;
      height: 300px;
    }
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 2fr 1fr;
    gap: 7.5rem;

    img {
      height: 100%;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

// types

interface ServicesListProps {
  title: SectionHeadingProps;
  services: ServiceProps[];
}

export const ServicesList: React.FC<ServicesListProps> = ({
  title,
  services,
}) => {
  return (
    <ServicesListRoot>
      <SectionHeading heading={title.heading} />
      <ServicesListing>
        {services.map((service) => {
          const {
            id,
            attributes: { image, title, description },
          } = service;

          return (
            <ServicesListItem key={id}>
              <Image
                src={image.data.attributes.url}
                alt={title}
                height={image.data.attributes.height}
                width={image.data.attributes.width}
              />
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </ServicesListItem>
          );
        })}
      </ServicesListing>
    </ServicesListRoot>
  );
};
