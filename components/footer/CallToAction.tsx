import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { Button, Container } from '../_common';
import Link from 'next/link';
import { mediaQueries } from '../../styles';

const CTARoot = styled.div`
  padding: 3.125rem 0;
  background-color: ${(props) => props.theme.colors.main.primary100};

  ${mediaQueries.desktop} {
    padding: 4.7rem 0;
  }
`;

const CTAInner = styled.div`
  display: grid;

  gap: 1.5rem;

  h2 {
    color: ${(props) => props.theme.colors.grayScale.white};
  }

  p {
    color: ${(props) => props.theme.colors.grayScale.lightGray};
    margin-bottom: 2rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 1.5fr 1fr;
    align-items: flex-start;
    gap: 5rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;

export const CallToAction: React.FC = () => {
  return (
    <CTARoot>
      <Container>
        <CTAInner>
          <h2>{"Let's"} discuss making your interior like a dream place!</h2>
          <div>
            <p>
              Contact us below to work together to build your amazing interior
            </p>
            <Link href={`/${routes.contactUs}`} passHref>
              <Button variant='button-alt'>Contact Us</Button>
            </Link>
          </div>
        </CTAInner>
      </Container>
    </CTARoot>
  );
};
