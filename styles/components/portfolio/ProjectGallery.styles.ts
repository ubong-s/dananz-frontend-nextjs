import { motion } from 'framer-motion';
import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ProjectGalleryRoot = styled(motion.section)`
  padding: 1.6rem 0 3.125rem;
  display: grid;
  gap: 1rem;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    padding: 3.125rem 0 6.25rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      /* &:nth-child(3) {
        grid-column: 1 / 3;
      } */
    }
  }
`;

export const GalleryImage = styled(motion.div)`
  ${mediaQueries.desktop} {
    &:nth-child(3) {
      grid-column: 1 / 3;
    }
  }
`;
