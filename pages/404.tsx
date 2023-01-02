import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Seo } from '../components';
import { mediaQueries } from '../styles';
import { useRouter } from 'next/router';

const NotFoundRoot = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: auto;
  height: 80vh;
  text-align: center;

  ${mediaQueries.desktop} {
    h1 {
      font-size: 45px;
    }
  }
`;

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Seo metaTitle='Not Found' />
      <NotFoundRoot>
        <div>
          <h1>Oops.....The page does not exist</h1>
          <Link href='/' passHref>
            <Button variant='button'>Back to Home</Button>
          </Link>
        </div>
      </NotFoundRoot>
    </>
  );
};

export default NotFound;
