import styled from 'styled-components';
import { breakpoints } from '../../styles';
import { Container, Logo } from '../_common';

const SubscribeAndSocialRoot = styled.div`
  padding: 80px 0;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1.5fr 1fr;
    gap: 5rem;
  }
`;

const SubscribeAndSocialLeft = styled.div`
  h2 {
    color: ${(props) => props.theme.colors.grayScale.black};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    h2 {
      font-size: 36px;
    }
  }
`;

const SubscribeAndSocialRight = styled.div`
  display: grid;
  gap: 1.5rem;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${(props) => props.theme.colors.grayScale.black};

      .circle {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.grayScale.black};
      }
    }

    input {
      padding: 16px 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.black};
    }

    button {
      position: absolute;
      right: 0;
      top: 35%;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  .social {
    ul {
      display: flex;
      gap: 16px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      background-color: ${(props) => props.theme.colors.grayScale.lightGray};
      border-radius: 50px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    /* justify-self: flex-end; */

    form {
      gap: 1rem;

      label {
        .circle {
          height: 15px;
          width: 15px;
        }
      }
    }

    .social {
      justify-self: flex-end;

      ul {
        gap: 25px;
        justify-content: flex-end;
      }
    }
  }
`;

export const SubscribeAndSocial = (): React.ReactElement => {
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
