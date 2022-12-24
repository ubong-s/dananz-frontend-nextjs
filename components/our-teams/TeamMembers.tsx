import styled from 'styled-components';
import { SectionHeading } from '../_common';
import { mediaQueries } from '../../styles';
import { members } from '../../lib/our-teams/members';
import Image from 'next/image';
import { MemberProps } from '../../types/our-team';
import { SectionHeadingProps } from '../../types/global';

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

interface TeamMemberProps {
  members: MemberProps[];
  header: SectionHeadingProps;
}

export const TeamMembers: React.FC<TeamMemberProps> = ({ members, header }) => {
  return (
    <TeamMembersRoot>
      <SectionHeading
        heading={header.heading}
        subheading={header.subheading}
        description={header.description}
        type={header.type}
      />
      <TeamMembersGrid>
        {members
          .sort((a, b) => a.attributes.index - b.attributes.index)
          .map((member) => (
            <TeamMember key={member.attributes.name}>
              <Image
                src={member.attributes.image.data.attributes.url}
                alt={member.attributes.name}
                height={member.attributes.image.data.attributes.height}
                width={member.attributes.image.data.attributes.width}
              />
              <div className='content'>
                <h4>{member.attributes.name}</h4>
                <p>{member.attributes.position}</p>
              </div>
            </TeamMember>
          ))}
      </TeamMembersGrid>
    </TeamMembersRoot>
  );
};
