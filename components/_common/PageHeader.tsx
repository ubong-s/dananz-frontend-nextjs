import Image from 'next/image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';
import cloudinaryImageLoader from './CloudinaryImage';

// styles
const PageHeaderRoot = styled.section`
  text-align: center;

  img {
    max-height: 300px;
    object-fit: cover;
  }

  ${mediaQueries.desktop} {
    img {
      max-height: 100%;
    }
  }
`;

const PageHeaderTop = styled.div`
  padding: 3.125rem 0;
  max-width: 650px;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  p {
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  ${mediaQueries.desktop} {
    padding: 5rem 0;

    h1 {
      font-size: 3.5rem;
    }
  }
`;

// types
interface PageHeaderProps {
  title: string;
  description: string;
  imageURL?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  imageURL,
}) => {
  return (
    <PageHeaderRoot>
      <PageHeaderTop>
        <h1>{title}</h1>
        <p>{description}</p>
      </PageHeaderTop>

      {imageURL && (
        <Image src={imageURL} alt={title} height={513} width={1200} />
      )}
    </PageHeaderRoot>
  );
};
