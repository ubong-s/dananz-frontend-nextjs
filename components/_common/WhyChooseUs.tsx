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
      img: '/assets/high_quality.png',
    },
    {
      id: 2,
      title: 'Professional Designer',
      desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
      img: '/assets/professional_designer.png',
    },
    {
      id: 3,
      title: 'The Best Services',
      desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
      img: '/assets/best_services.png',
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
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </WhyChooseUsGridItem>
        ))}
      </WhyChooseUsGrid>
    </WhyChooseUsRoot>
  );
};
