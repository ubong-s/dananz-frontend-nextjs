import {
  SubscribeAndSocialLeft,
  SubscribeAndSocialRight,
  SubscribeAndSocialRoot,
} from '../../styles/components/footer';
import { Container, Logo } from '../_common';

export const SubscribeAndSocial: React.FC = () => {
  return (
    <Container>
      <SubscribeAndSocialRoot>
        <SubscribeAndSocialLeft>
          <Logo />
          <h2>One of the best furniture agency.</h2>
        </SubscribeAndSocialLeft>
        <SubscribeAndSocialRight>
          <form>
            <label htmlFor='email'>
              <span className='circle'></span>{' '}
              <span>Enter your email to get the latest news</span>
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
            />
            <button title='submit' type='submit'>
              <svg
                width='26'
                height='12'
                viewBox='0 0 26 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 10.2479H23.5L16 1.23633'
                  stroke='#141414'
                  strokeWidth='2'
                />
              </svg>
            </button>
          </form>
          <div className='social'>
            <p>Follow us on</p>
            <ul>
              <li>
                <a href='#'>
                  <img src='/assets/facebook.svg' alt='facebook' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/assets/instagram.svg' alt='instagram' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/assets/tiktok.svg' alt='tiktok' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/assets/youtube.svg' alt='youtube' />
                </a>
              </li>
            </ul>
          </div>
        </SubscribeAndSocialRight>
      </SubscribeAndSocialRoot>
    </Container>
  );
};
