import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { SectionHeading } from '../_common';

const LocationsRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 80px 0;
  }
`;

const LocationsBody = styled.div`
  display: grid;
  align-items: flex-start;

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
`;

const LocationsInfo = styled.div`
  display: grid;

  h4 {
    font-size: 18px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: 2rem;

    h4 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  gap: 1rem;

  h4 {
    font-size: 18px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: -5.5rem;

    h4 {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
`;

export const Locations = () => {
  return (
    <LocationsRoot>
      <SectionHeading
        title='Locations'
        subtitle='Visit Our Stores'
        subtitleType='half'
      />
      <LocationsBody>
        <LocationsInfo>
          <p>Find us at these locations.</p>

          <div>
            <h4>Email</h4>
            <p>dananz@gmail.com</p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>+62 815 002 1000</p>
          </div>
        </LocationsInfo>

        <LocationsGrid>
          <div>
            <h4>Jakarta</h4>
            <p>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div>
            <h4>Surakarta</h4>
            <p>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div>
            <h4>Yogyakarta</h4>
            <p>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
          <div>
            <h4>Bandung</h4>
            <p>
              Customize your interior design into a dream place with the best
              designers and quality furniture. We try our best to fulfill your
              expectations.
            </p>
          </div>
        </LocationsGrid>
      </LocationsBody>
    </LocationsRoot>
  );
};
