import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { breakpoints, typography, misc } from '../../styles';
import { Button, SectionHeading } from '../_common';

const AboutRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0;
  }
`;

const AboutTop = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 32px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding-bottom: 60px;
  }
`;

const AboutBottom = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    align-items: center;
    grid-template-columns: 2.5fr 1fr;
    gap: 94px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    grid-template-columns: 880px auto;
  }
`;

const AboutImage = styled.div`
  position: relative;

  .img {
    height: 300px;
    object-fit: cover;
  }

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
    .img {
      height: 100%;
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    .profile {
      bottom: unset;
      top: 27px;
      right: -200px;
    }
  }
`;

const AboutContent = styled.div`
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

export const About = (): React.ReactElement => {
  return (
    <AboutRoot>
      <AboutTop>
        <SectionHeading title='About' />
        <h3>
          “{"We're"} one of the best furniture agency. Prioritizing customers
          and making purchases easy are the hallmarks of our agency.”
        </h3>
      </AboutTop>
      <AboutBottom>
        <AboutImage>
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
        </AboutImage>
        <AboutContent>
          <p>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </p>

          <Link href={`/${routes.aboutUs}`} passHref>
            <Button variant='button'>Learn More</Button>
          </Link>
        </AboutContent>
      </AboutBottom>
    </AboutRoot>
  );
};
