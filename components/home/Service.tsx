import styled from 'styled-components';
import { mediaQueries, misc, myTheme } from '../../styles';
import { ServiceProps } from '../../types/global';

const ServiceRoot = styled.article`
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
  activeIndex: number | null;
  handleService: (index: number) => void;
}

export const Service: React.FC<ServiceComponentProps> = ({
  index,
  service,
  activeIndex,
  handleService,
}) => {
  return (
    <ServiceRoot key={index} onClick={() => handleService(index)}>
      <div className='heading_wrap'>
        <h4 className={activeIndex === index ? 'active' : ''}>
          {index < 9 ? `0${index + 1}` : index + 1}. {service.service_title}
        </h4>

        <button
          type='button'
          title={`View ${service.service_title}`}
          onClick={() => handleService(index)}
          className={activeIndex === index ? 'active' : ''}
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
                activeIndex === index
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
                activeIndex === index
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
      <p className={activeIndex === index ? 'text active' : 'text'}>
        {service.service_desc}
      </p>
    </ServiceRoot>
  );
};
