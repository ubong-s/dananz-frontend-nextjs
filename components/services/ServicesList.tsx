import Image from 'next/image';
import styled from 'styled-components';
import { services } from '../../lib/services';
import { breakpoints } from '../../styles';
import { SectionHeading } from '../_common';

const ServicesListRoot = styled.section`
  padding: 50px 0 25px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 90px 0 40px;
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
    font-size: 18px;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    img {
      width: 100%;
      height: 300px;
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr;
    gap: 120px;

    img {
      height: 100%;
    }

    h4 {
      font-size: 24px;
      margin-bottom: 1rem;
    }
  }
`;

export const ServicesList = () => {
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
