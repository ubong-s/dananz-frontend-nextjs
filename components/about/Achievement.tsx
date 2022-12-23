import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { ImageProps, SectionHeadingProps, StatProps } from '../../types/global';
import { SectionHeading, Stats } from '../_common';

const AchievementRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

const AchievementBottom = styled.div`
  display: grid;
  gap: 1rem;

  img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 3.5fr 1fr;
    gap: 3rem;

    img {
      height: 100%;
    }
  }
`;

// types
interface AchievementProps {
  stats: StatProps[];
  title: SectionHeadingProps;
  image: ImageProps;
}

export const Achievement: React.FC<AchievementProps> = ({
  stats,
  title,
  image,
}) => {
  return (
    <AchievementRoot>
      <SectionHeading
        heading={title.heading}
        subheading={title.subheading}
        type={title.type}
      />
      <AchievementBottom>
        <Image
          src={image.attributes.url}
          alt={image.attributes.name}
          width={image.attributes.width}
          height={image.attributes.height}
        />
        <Stats stats={stats} />
      </AchievementBottom>
    </AchievementRoot>
  );
};
