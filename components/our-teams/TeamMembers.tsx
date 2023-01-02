import { CloudinaryImage, SectionHeading } from '../_common';
import { MemberProps } from '../../types/our-team';
import { SectionHeadingProps } from '../../types/global';
import {
  TeamMember,
  TeamMembersGrid,
  TeamMembersRoot,
} from '../../styles/components/our-teams';

export const TeamMembers: React.FC<{
  members: MemberProps[];
  title: SectionHeadingProps;
}> = ({ members, title }) => {
  return (
    <TeamMembersRoot>
      <SectionHeading
        heading={title.heading}
        subheading={title.subheading}
        description={title.description}
        type={title.type}
      />
      <TeamMembersGrid>
        {members
          ?.sort((a, b) => a.attributes.index - b.attributes.index)
          .map((member) => {
            const {
              id,
              attributes: { image, name, position },
            } = member;

            return (
              <TeamMember key={id}>
                <CloudinaryImage
                  src={image.data.attributes.url}
                  alt={name}
                  height={image.data.attributes.height}
                  width={image.data.attributes.width}
                />
                <div className='content'>
                  <h4>{name}</h4>
                  <p>{position}</p>
                </div>
              </TeamMember>
            );
          })}
      </TeamMembersGrid>
    </TeamMembersRoot>
  );
};
