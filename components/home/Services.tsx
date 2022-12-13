import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { SectionHeading } from '../_common';
import Image from 'next/image';
import { Service } from './Service';

const ServicesRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0;
  }
`;

const ServicesTop = styled.div`
  position: relative;
  max-width: 880px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  z-index: 1;

  h3 {
    margin: 24px 0;
  }

  p {
    max-width: 470px;
  }

  .services {
    padding: 1rem 0;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
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

  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-top: -170px;
    img {
      height: 100%;
    }
  }
`;

export const Services = (): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleServiceClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const services = [
    {
      title: 'Interior Design',
      text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
    },
    {
      title: 'Construction',
      text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
    },
    {
      title: 'Construction Consultant',
      text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
    },
  ];

  return (
    <ServicesRoot>
      <ServicesTop>
        <SectionHeading title='Services' />
        <h3>Attractive furniture with the best quality.</h3>
        <p>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
        <div className='services'>
          {services.map((service, index) => {
            return (
              <Service
                index={index}
                key={service.title}
                service={service}
                activeIndex={activeIndex}
                handleService={handleServiceClick}
              />
            );
          })}
        </div>
      </ServicesTop>
      <ServicesBottom>
        <Image
          src='/assets/home_services.png'
          alt='Services'
          width={1076}
          height={680}
          className='img'
        />
      </ServicesBottom>
    </ServicesRoot>
  );
};
