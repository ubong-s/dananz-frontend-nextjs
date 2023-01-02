import {
  SectionHeadingRoot,
  SectionHeadingTop,
  SectionHeadingBottom,
} from '../../styles/components/_common';
import { SectionHeadingProps } from '../../types/global';

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subheading,
  description,
  type,
}) => {
  return (
    <SectionHeadingRoot>
      <SectionHeadingTop>
        <h2>{heading}</h2>
        <span className='line'></span>
      </SectionHeadingTop>
      {subheading && (
        <SectionHeadingBottom className={type}>
          <h3>{subheading}</h3>
          {description && <p>{description}</p>}
        </SectionHeadingBottom>
      )}
    </SectionHeadingRoot>
  );
};
