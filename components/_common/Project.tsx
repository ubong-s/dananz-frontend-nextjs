import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { mediaQueries, misc } from '../../styles';
import { ProjectProps } from '../../types/portfolio';
import { Button } from './Button';

// styles
const ProjectRoot = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;

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

  .img {
    height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    grid-area: image;
    .img {
      height: 525px;
    }
  }
`;

const TextContent = styled.div`
  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1.875rem;
  }

  ${mediaQueries.desktop} {
    grid-area: content;
    h3 {
      font-size: 1.5rem;
    }
  }

  ${mediaQueries.large} {
    padding-top: 5rem;

    p {
      margin-bottom: 2.5rem;
    }
  }
`;

export const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const {
    attributes: { project_banner, project_header, slug },
  } = project;

  return (
    <ProjectRoot>
      <ImageRoot>
        <Image
          src={project_banner.data.attributes.url}
          alt={project_banner.data.attributes.name}
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
        <h3>{project_header.title}</h3>
        <p>{project_header.description}</p>

        <Link href={`/${routes.portfolio}/${slug}`} passHref>
          <Button variant='button'>Learn More</Button>
        </Link>
      </TextContent>
    </ProjectRoot>
  );
};
