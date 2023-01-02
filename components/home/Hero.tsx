import { HeroRoot, HeroStats, HeroTop } from '../../styles/components/home';
import { ImageProps, StatProps } from '../../types/global';
import { Stats, CloudinaryImage } from '../_common';

export interface HeroProps {
  title: string;
  image: ImageProps;
  stats: StatProps[];
}

export const Hero: React.FC<HeroProps> = ({ title, image, stats }) => {
  return (
    <HeroRoot>
      <HeroTop>
        <h1>{title}</h1>
        <div className='line'></div>
        <p className='copyright'>
          {new Date().getFullYear()} <span>ALL RIGHT RESERVED</span>
        </p>

        <HeroStats>
          <Stats stats={stats} />
        </HeroStats>
      </HeroTop>
      <CloudinaryImage
        src={image.attributes.url}
        alt={image.attributes.name}
        width={image.attributes.width}
        height={image.attributes.height}
      />
    </HeroRoot>
  );
};
