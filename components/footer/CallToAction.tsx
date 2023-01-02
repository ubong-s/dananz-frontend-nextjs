import { routes } from '../../lib/routes/routes';
import { Button, Container } from '../_common';
import Link from 'next/link';
import {
  CallToActionInner,
  CallToActionRoot,
} from '../../styles/components/footer';

export const CallToAction: React.FC = () => {
  return (
    <CallToActionRoot>
      <Container>
        <CallToActionInner>
          <h2>{"Let's"} discuss making your interior like a dream place!</h2>
          <div>
            <p>
              Contact us below to work together to build your amazing interior
            </p>
            <Link href={`/${routes.contactUs}`} passHref>
              <Button variant='button-alt'>Contact Us</Button>
            </Link>
          </div>
        </CallToActionInner>
      </Container>
    </CallToActionRoot>
  );
};
