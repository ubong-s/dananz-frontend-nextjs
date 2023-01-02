import Link from 'next/link';
import { routes } from '../../lib/routes/routes';
import {
  ImageRoot,
  ProjectRoot,
  TextContent,
} from '../../styles/components/_common';
import { ProjectProps } from '../../types/global';
import { Button, CloudinaryImage } from '.';

export const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const {
    attributes: { project_banner, project_header, slug },
  } = project;

  return (
    <ProjectRoot>
      <ImageRoot>
        <CloudinaryImage
          src={project_banner.data.attributes.url}
          alt={project_banner.data.attributes.name}
          width={883}
          height={525}
          className='img'
        />
        <div className='profile'>
          <img src='/assets/arga_danaan.png' alt='ABout' />
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
