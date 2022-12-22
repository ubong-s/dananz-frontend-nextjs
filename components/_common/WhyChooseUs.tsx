import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries, misc } from '../../styles';
import { SectionHeading } from '.';

// styles
const WhyChooseUsRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5.6rem 0;
  }
`;

const WhyChooseUsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WhyChooseUsGridItem = styled.div`
  text-align: center;
  padding: 1.7rem;
  box-shadow: ${misc.shadowAlt};

  h4 {
    padding: 0.625rem 0;
  }

  ${mediaQueries.desktop} {
    h4 {
      font-size: 1rem;
    }
  }
`;

// types
export const WhyChooseUs: React.FC = () => {
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
        heading='Service'
        subheading='Why Choose Us'
        description='Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.'
        type='half'
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
