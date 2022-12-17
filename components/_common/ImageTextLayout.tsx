import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { breakpoints, misc } from '../../styles';
import { Button } from './Button';

interface ImageTextLayoutProps {
  project: { cover_image: string; description: string; slug: string };
}

const ImageTextLayoutRoot = styled.div`
  display: grid;
  gap: 1rem;

  .profile {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 20px;
    box-shadow: ${misc.shadow};
    right: 1rem;
    bottom: 1.1rem;
    background-color: ${(props) => props.theme.colors.grayScale.white};
    min-width: 270px;

    h4 {
      margin-bottom: 0.25rem;
      line-height: 1;
      font-size: 16px;
    }

    p {
      margin: 0;
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    align-items: center;
    grid-template-areas: 'image content';
    grid-template-columns: 2.5fr 1fr;
    gap: 94px;

    &:nth-of-type(even) {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 2.5fr;
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    grid-template-columns: 880px auto;

    .profile {
      bottom: unset;
      top: 27px;
      right: -200px;
    }

    &:nth-of-type(even) {
      .profile {
        bottom: unset;
        top: 27px;
        left: -200px;
        right: unset;
      }
    }
  }
`;

const ImageRoot = styled.div`
  position: relative;
  grid-area: image;

  .img {
    height: 300px;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    .img {
      height: 100%;
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
  }
`;

const TextContent = styled.div`
  grid-area: content;

  p {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding-top: 80px;

    p {
      margin-bottom: 40px;
    }
  }
`;

export const ImageTextLayout: React.FC<ImageTextLayoutProps> = ({
  project,
}) => {
  return (
    <ImageTextLayoutRoot>
      <ImageRoot>
        <Image
          src='/assets/home_about.png'
          alt='ABout'
          width={883}
          height={525}
          className='img'
        />
        <div className='profile'>
          <Image
            src='/assets/arga_danaan.png'
            alt='ABout'
            width={51}
            height={51}
          />
          <span>
            <h4>Arga Danaan</h4>
            <p>CEO of Dananz</p>
            <p></p>
          </span>
        </div>
      </ImageRoot>
      <TextContent>
        <p>{project.description}</p>

        <Link href={`/${routes.portfolio}/${project.slug}`} passHref>
          <Button variant='button'>Learn More</Button>
        </Link>
      </TextContent>
    </ImageTextLayoutRoot>
  );
};
