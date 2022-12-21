import styled from 'styled-components';
import { SectionHeading } from '../_common';
import { mediaQueries } from '../../styles';
import { members } from '../../lib/our-teams/members';
import Image from 'next/image';

const TeamMembersRoot = styled.section`
  padding: 3.125rem 0;

  ${mediaQueries.desktop} {
    padding: 5rem 0;
  }
`;

const TeamMembersGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

const TeamMember = styled.div`
  background-color: ${(props) => props.theme.colors.main.primary100};
  position: relative;
  line-height: 0;
  padding-top: 0.875rem;

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    margin-bottom: 0;
  }

  .content {
    position: absolute;
    background-color: ${(props) => props.theme.colors.grayScale.white};
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 1.125rem 1rem;

    h4,
    p {
      line-height: 1;
    }

    h4 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  ${mediaQueries.tablet} {
    img {
      width: 100%;
      object-fit: contain;
      height: 350px;
    }
  }

  ${mediaQueries.desktop} {
    img {
      width: 100%;
      object-fit: unset;
      height: 100%;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

export const TeamMembers: React.FC = () => {
  return (
    <TeamMembersRoot>
      <SectionHeading
        title='Designers'
        subtitle='Our Experts'
        subtitleDesc='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
        subtitleType='half'
      />
      <TeamMembersGrid>
        {members.map((member) => (
          <TeamMember key={member.name}>
            <Image
              src={member.image}
              alt={member.name}
              height={386}
              width={282}
            />
            <div className='content'>
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          </TeamMember>
        ))}
      </TeamMembersGrid>
    </TeamMembersRoot>
  );
};
