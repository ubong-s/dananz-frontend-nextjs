import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import { ImageProps, StatProps } from '../../types/global';
import { Stats } from '../_common';

const HeroRoot = styled.div`
  padding: 3.125rem 0;

  img {
    height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.tablet} {
    img {
      height: 100%;
    }
  }
`;

const HeroTop = styled.div`
  display: grid;
  position: relative;
  padding-bottom: 30px;

  h1 {
    font-size: 40px;
    color: ${(props) => props.theme.colors.grayScale.gray50};

    margin-bottom: 1rem;
  }

  .line {
    height: 2px;
    background-color: ${(props) => props.theme.colors.grayScale.black};
    margin: 1rem 0;
  }

  .copyright {
    color: ${(props) => props.theme.colors.grayScale.gray50};
    margin-bottom: 2rem;
  }

  ${mediaQueries.tablet} {
    h1 {
      font-size: 3.125rem;
    }
  }

  ${mediaQueries.desktop} {
    h1 {
      font-size: 4.5rem;
      max-width: 680px;
    }

    .line {
      position: absolute;
      width: 683px;
      left: 50%;
      width: 50%;
      top: 10%;
    }

    .copyright {
      position: absolute;
      transform-origin: 100%;
      transform: rotate(270deg);
      right: 2%;
      top: 25%;
      margin-bottom: 0;

      span {
        display: block;
      }
    }
  }

  ${mediaQueries.large} {
    .line {
      left: 45%;
      width: 55%;
    }

    .copyright {
      top: 30%;
    }
  }
`;

const HeroStats = styled.div`
  ${mediaQueries.large} {
    position: absolute;
    left: 65%;
    top: 50%;
  }
`;

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
      <Image
        src={image.attributes.url}
        alt={image.attributes.name}
        width={image.attributes.width}
        height={image.attributes.height}
      />
    </HeroRoot>
  );
};
