import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { mediaQueries, misc } from '../../styles';
import { Button, SectionHeading } from '../_common';

const AboutRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 4.68rem 0;
  }
`;

const AboutBottom = styled.div`
  display: grid;
  gap: 1rem;

  ${mediaQueries.desktop} {
    align-items: center;
    grid-template-columns: 2.5fr 1fr;
    gap: 5.875rem;
  }

  ${mediaQueries.large} {
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
    padding: 1.25rem;
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

  ${mediaQueries.desktop} {
    .img {
      height: 100%;
    }
  }

  ${mediaQueries.large} {
    .profile {
      bottom: unset;
      top: 1.7rem;
      right: -200px;
    }
  }
`;

const AboutContent = styled.div`
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

export const About: React.FC = () => {
  return (
    <AboutRoot>
      <SectionHeading
        title='About'
        subtitle={`“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”`}
      />

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
