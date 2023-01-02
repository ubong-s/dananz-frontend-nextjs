import { ImageProps, SectionHeadingProps, StatProps } from '../../types/global';
import { SectionHeading, Stats, CloudinaryImage } from '../_common';
import {
  AchievementBottom,
  AchievementRoot,
} from '../../styles/components/about';

export const Achievement: React.FC<{
  stats: StatProps[];
  title: SectionHeadingProps;
  image: ImageProps;
}> = ({ stats, title, image }) => {
  return (
    <AchievementRoot>
      <SectionHeading
        heading={title.heading}
        subheading={title.subheading}
        type={title.type}
      />
      <AchievementBottom>
        <CloudinaryImage
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
