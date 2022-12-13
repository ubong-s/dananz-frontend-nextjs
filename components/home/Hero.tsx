import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

const HeroRoot = styled.div`
  padding: 50px 0;

  img {
    height: 300px;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
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
    font-size: 36px;
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

  @media screen and (min-width: ${breakpoints.tablet}) {
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    h1 {
      font-size: 72px;
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

  @media screen and (min-width: ${breakpoints.large}) {
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
  background-color: ${(props) => props.theme.colors.main.primary100};

  p {
    color: ${(props) => props.theme.colors.grayScale.white};
    font-size: 32px;
    padding: 1rem 2rem 1.5rem;
    border-bottom: dashed 1px
      ${(props) => props.theme.colors.grayScale.lightGray};
    margin-bottom: 0;

    span {
      display: block;
      font-size: 16px;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    p {
      font-size: 40px;
      border-right: dashed 1px
        ${(props) => props.theme.colors.grayScale.lightGray};
      border-bottom: none;

      &:last-of-type {
        border-right: none;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    position: absolute;
    grid-template-columns: 1fr;
    left: 65%;
    top: 50%;
    padding: 25px 0;

    p {
      text-align: center;
      font-size: 52px;
      border: none;
      padding: 25px 50px;
    }
  }
`;

export const Hero = (): React.ReactElement => {
  return (
    <HeroRoot>
      <HeroTop>
        <h1>Design your interor with high quality.</h1>
        <div className='line'></div>
        <p className='copyright'>
          2022 <span>ALL RIGHT RESERVED</span>
        </p>

        <HeroStats>
          <p>
            350+ <span>Project Completed</span>
          </p>
          <p>
            23+ <span>Professional Teams</span>
          </p>
          <p>
            15+ <span>Years Experience</span>
          </p>
        </HeroStats>
      </HeroTop>
      <Image src='/assets/hero_img.png' alt='Hero' width={1200} height={513} />
    </HeroRoot>
  );
};
