import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from '../../styles';

interface PageHeaderProps {
  title: string;
  description: string;
  imageURL?: string;
}

const PageHeaderRoot = styled.section`
  text-align: center;

  img {
    max-height: 300px;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    img {
      max-height: 100%;
    }
  }
`;

const PageHeaderTop = styled.div`
  padding: 50px 0;
  max-width: 520px;
  margin: auto;

  h1 {
    font-size: 40px;
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  p {
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 80px 0;

    h1 {
      font-size: 56px;
    }
  }
`;

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
