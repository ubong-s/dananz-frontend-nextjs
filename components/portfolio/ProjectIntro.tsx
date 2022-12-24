import styled from 'styled-components';
import { mediaQueries } from '../../styles';

const ProjectIntroRoot = styled.section`
  padding: 3.125rem 0;
  display: grid;
  gap: 1rem;

  h2,
  h3 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .project_overview {
      display: grid;

      .date {
        margin-bottom: 0;
      }
    }

    h2,
    h3 {
      font-size: 1.5rem;
    }
  }
`;

interface ProjectIntroProps {
  projectOverview: string;
  designProcess: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  projectOverview,
  designProcess,
}) => {
  return (
    <ProjectIntroRoot>
      <div className='project_overview'>
        <div>
          <h2>Project Overview</h2>
          <p>{projectOverview}</p>
        </div>

        {/* <p className='date'>July 22 - 2022</p> */}
      </div>

      <div className='project_process'>
        <h3>Design Process</h3>
        <div dangerouslySetInnerHTML={{ __html: designProcess }} />
      </div>
    </ProjectIntroRoot>
  );
};
