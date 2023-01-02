import { ProjectIntroRoot } from '../../styles/components/portfolio';

export const ProjectIntro: React.FC<{
  projectOverview: string;
  designProcess: string;
}> = ({ projectOverview, designProcess }) => {
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
