import Image from 'next/image';
import styled from 'styled-components';
import { services } from '../../lib/services';
import { mediaQueries } from '../../styles';
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

export const ServicesList: React.FC = () => {
  return (
    <ServicesListRoot>
      <SectionHeading title='What We Do' />
      <ServicesListing>
        {services.map((service) => {
          return (
            <ServicesListItem key={service.title}>
              <Image
                src={service.image}
                alt={service.title}
                width={746}
                height={365}
              />
              <div>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </ServicesListItem>
          );
        })}
      </ServicesListing>
    </ServicesListRoot>
  );
};
