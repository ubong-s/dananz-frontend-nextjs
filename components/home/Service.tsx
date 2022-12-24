import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { mediaQueries, misc, myTheme } from '../../styles';
import { ServiceProps } from '../../types/global';
import { motion, AnimatePresence } from 'framer-motion';
import { collapse } from '../../lib/animations';

const ServiceRoot = styled(motion.article)`
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

interface ServiceComponentProps {
  index: number;
  service: ServiceProps;
  expanded: number | false;
  setExpanded: Dispatch<SetStateAction<number | false>>;
}

export const Service: React.FC<ServiceComponentProps> = ({
  index,
  service,
  expanded,
  setExpanded,
}) => {
  const isOpen = index === expanded;

  const {
    attributes: { title, description },
  } = service;

  return (
    <ServiceRoot onClick={() => setExpanded(isOpen ? false : index)}>
      <div className='heading_wrap'>
        <h4 className={expanded === index ? 'active' : ''}>
          {index < 9 ? `0${index + 1}` : index + 1}. {title}
        </h4>

        <button
          type='button'
          title={`View ${title}`}
          onClick={() => setExpanded(isOpen ? false : index)}
          className={expanded === index ? 'active' : ''}
        >
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.66699 16H25.3337'
              stroke={
                expanded === index
                  ? myTheme.colors.main.primary100
                  : myTheme.colors.grayScale.black
              }
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 6.66667L25.3333 16L16 25.3333'
              stroke={
                expanded === index
                  ? myTheme.colors.main.primary100
                  : myTheme.colors.grayScale.black
              }
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.p
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={collapse}
        >
          {description}
        </motion.p>
      )}
    </ServiceRoot>
  );
};
