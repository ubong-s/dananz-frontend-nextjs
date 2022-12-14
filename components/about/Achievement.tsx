import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { SectionHeading, Stats } from '../_common';

const AchievementRoot = styled.section`
  padding: 50px 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 80px 0;
  }
`;
const AchievementTop = styled.div`
  h3 {
    max-width: 740px;
    margin: 1rem 0 2rem;
  }
`;

const AchievementBottom = styled.div`
  display: grid;
  gap: 1rem;

  img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 3.5fr 1fr;
    gap: 3rem;

    img {
      height: 100%;
    }
  }
`;

export const Achievement = () => {
  return (
    <AchievementRoot>
      <AchievementTop>
        <SectionHeading title='Achievement' />
        <h3>
          interior customization with Danaanz, best quality with professional
          workers
        </h3>
      </AchievementTop>
      <AchievementBottom>
        <Image
          src='/assets/achievement_img.png'
          alt='achievement'
          height={525}
          width={880}
        />
        <Stats />
      </AchievementBottom>
    </AchievementRoot>
  );
};
