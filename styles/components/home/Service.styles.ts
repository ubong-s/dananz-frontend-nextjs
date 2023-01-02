import { motion } from 'framer-motion';
import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import misc from '../../misc';

export const ServiceRoot = styled(motion.article)`
  padding: 0.25rem 0;
  cursor: pointer;

  .heading_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: ${(props) => props.theme.colors.grayScale.gray50};
      font-size: 18px;
      transition: ${misc.transition.ease};

      &.active {
        color: ${(props) => props.theme.colors.main.primary100};
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    transition: ${misc.transition.ease};

    &.active {
      transform: rotate(90deg);
    }
  }

  .text {
    position: relative;
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    z-index: -2;
    transition: ${misc.transition.ease};
    transform: translateY(-50%);

    &.active {
      max-height: 200px;
      opacity: 1;
      visibility: visible;
      z-index: 1;
      transform: translateY(0);
    }
  }

  ${mediaQueries.desktop} {
    .heading_wrap {
      h4 {
        font-size: 1.5rem;
      }
    }
  }
`;
