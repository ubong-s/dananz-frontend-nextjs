import { Dispatch, SetStateAction } from 'react';
import { myTheme } from '../../styles';
import { ServiceRoot } from '../../styles/components/home';
import { ServiceProps } from '../../types/global';
import { motion } from 'framer-motion';
import { collapse } from '../../lib/animations';

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
