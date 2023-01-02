import { PageHeaderRoot, PageHeaderTop } from '../../styles/components/_common';
import { CloudinaryImage } from './CloudinaryImage';

export const PageHeader: React.FC<{
  title: string;
  description: string;
  imageURL?: string;
}> = ({ title, description, imageURL }) => {
  return (
    <PageHeaderRoot>
      <PageHeaderTop>
        <h1>{title}</h1>
        <p>{description}</p>
      </PageHeaderTop>

      {imageURL && (
        <CloudinaryImage src={imageURL} alt={title} height={513} width={1200} />
      )}
    </PageHeaderRoot>
  );
};
