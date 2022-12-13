import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { Button, Container } from '../_common';
import Link from 'next/link';
import { breakpoints } from '../../styles';

const CTARoot = styled.div`
  padding: 50px 0;
  background-color: ${(props) => props.theme.colors.main.primary100};

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 75px 0;
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
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1.5fr 1fr;
    gap: 5rem;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 18px;
      margin-bottom: 1.5rem;
    }
  }
`;

export const CallToAction = (): React.ReactElement => {
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
