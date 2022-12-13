import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { Button, SectionHeading } from '../_common';
import Image from 'next/image';

const MaterialsRoot = styled.section`
  padding: 50px 0 8px;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0 125px;
  }
`;

const MaterialsContent = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 0.8fr 1fr;
    align-items: center;
    gap: 82px;
  }
`;

const MaterialsContentLeft = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    h3 {
      max-width: 348px;
    }
  }
`;

const MaterialsContentRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.1fr;
  grid-template-rows: 95px 130px 180px 45px;
  gap: 2rem;
  margin-top: -3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:nth-of-type(1) {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
    }

    &:nth-of-type(2) {
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }
    &:nth-of-type(3) {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }
  }
`;

export const Mateials = (): React.ReactElement => {
  return (
    <MaterialsRoot>
      <SectionHeading title='Material' />
      <MaterialsContent>
        <MaterialsContentLeft>
          <h3>Choice of materials for quality furniture.</h3>
          <p>
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </p>
          <Button variant='button-alt'>Materials</Button>
        </MaterialsContentLeft>
        <MaterialsContentRight>
          <Image
            src='/assets/material_img_1.png'
            alt='material img 1'
            width={315}
            height={392}
          />
          <Image
            src='/assets/material_img_2.png'
            alt='material img 2'
            width={241}
            height={225}
          />
          <Image
            src='/assets/material_img_3.png'
            alt='material img 3'
            width={194}
            height={178}
          />
        </MaterialsContentRight>
      </MaterialsContent>
    </MaterialsRoot>
  );
};
