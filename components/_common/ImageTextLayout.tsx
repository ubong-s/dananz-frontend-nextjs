import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { mediaQueries, misc } from '../../styles';
import { Button } from './Button';

// styles
const ImageTextLayoutRoot = styled.div`
  display: grid;
  gap: 1rem;

  .profile {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    box-shadow: ${misc.shadow};
    right: 1rem;
    bottom: 1.1rem;
    background-color: ${(props) => props.theme.colors.grayScale.white};
    min-width: 270px;

    h4 {
      margin-bottom: 0.25rem;
      line-height: 1;
      font-size: 1rem;
    }

    p {
      margin: 0;
    }
  }

  ${mediaQueries.desktop} {
    align-items: center;
    grid-template-areas: 'image content';
    grid-template-columns: 2.5fr 1fr;
    gap: 5.9rem;

    &:nth-of-type(even) {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 2.5fr;
    }
  }

  ${mediaQueries.large} {
    grid-template-columns: 880px auto;

    .profile {
      bottom: unset;
      top: 1.69rem;
      right: -200px;
    }

    &:nth-of-type(even) {
      .profile {
        bottom: unset;
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

  ${mediaQueries.desktop} {
    .img {
      height: 100%;
    }
  }
`;

const TextContent = styled.div`
  grid-area: content;

  p {
    margin-bottom: 1.875rem;
  }

  ${mediaQueries.large} {
    padding-top: 5rem;

    p {
      margin-bottom: 2.5rem;
    }
  }
`;
// types
interface ImageTextLayoutProps {
  project: { cover_image: string; description: string; slug: string };
}

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
