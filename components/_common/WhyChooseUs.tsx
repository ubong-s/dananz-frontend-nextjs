import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';
import { SectionHeading } from '.';

const WhyChooseUsRoot = styled.section`
  padding: 25px 0 50px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 40px 0 90px;
  }
`;

const WhyChooseUsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 40px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WhyChooseUsGridItem = styled.div`
  text-align: center;
  padding: 27px;
  box-shadow: ${misc.shadowAlt};

  h4 {
    padding: 10px 0;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    h4 {
      font-size: 24px;
    }
  }
`;

export const WhyChooseUs = () => {
  const whyList = [
    {
      id: 1,
      title: 'High Quality',
      desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
      img: '',
    },
    {
      id: 2,
      title: 'Professional Designer',
      desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
      img: '',
    },
    {
      id: 3,
      title: 'The Best Services',
      desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
      img: '',
    },
  ];

  return (
    <WhyChooseUsRoot>
      <SectionHeading
        title='Service'
        subtitle='Why Choose Us'
        subtitleDesc='Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.'
        subtitleType='half'
      />
      <WhyChooseUsGrid>
        {whyList.map((item) => (
          <WhyChooseUsGridItem key={item.id}>
            <Image
              src='/assets/arga_danaan.png'
              alt={item.title}
              width={63}
              height={63}
            />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </WhyChooseUsGridItem>
        ))}
      </WhyChooseUsGrid>
    </WhyChooseUsRoot>
  );
};
