import styled from 'styled-components';
import { breakpoints } from '../../styles';

const ProjectIntroRoot = styled.section`
  padding: 50px 0;
  display: grid;
  gap: 1rem;

  h2,
  h3 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0;
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
      font-size: 24px;
    }
  }
`;

export const ProjectIntro = () => {
  return (
    <ProjectIntroRoot>
      <div className='project_overview'>
        <div>
          <h2>Project Overview</h2>
          <p>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere. Online learning with us does not
            interfere with your daily life. because learning can be done anytime
            and anywhere.
          </p>
        </div>

        <p className='date'>July 22 - 2022</p>
      </div>

      <div className='project_process'>
        <h3>Design Process</h3>
        <p>
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere. Online learning
          with us does not interfere with your daily life. because learning can
          be done anytime and anywhere.
        </p>
        <p>
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere. Online learning
          with us does not interfere with your daily life. because learning can
          be done anytime and anywhere.
        </p>
      </div>
    </ProjectIntroRoot>
  );
};
