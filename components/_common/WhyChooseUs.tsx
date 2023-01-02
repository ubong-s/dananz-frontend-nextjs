import { SectionHeading } from '.';
import {
  WhyChooseUsGrid,
  WhyChooseUsGridItem,
  WhyChooseUsRoot,
} from '../../styles/components/_common';

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
            <img src='/assets/arga_danaan.png' alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </WhyChooseUsGridItem>
        ))}
      </WhyChooseUsGrid>
    </WhyChooseUsRoot>
  );
};
