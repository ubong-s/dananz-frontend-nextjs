import styled from 'styled-components';
import { mediaQueries } from '../../styles';

const ContactFormRoot = styled.section``;
const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 840px;
  margin: auto;
  margin-bottom: 3rem;

  .two_columns {
    display: grid;
    gap: 1rem;
  }

  .formgroup {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: ${(props) => props.theme.colors.grayScale.black};
    }

    input,
    textarea {
      padding: 1.25rem 2rem;
    }
  }

  button {
    justify-self: center;
    margin-top: 2rem;
  }

  ${mediaQueries.tablet} {
    .two_columns {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const ContactForm: React.FC = () => {
  return (
    <ContactFormRoot>
      <Form>
        <div className='two_columns'>
          <div className='formgroup'>
            <label htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' placeholder='First Name' />
          </div>
          <div className='formgroup'>
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' placeholder='Last Name' />
          </div>
        </div>
        <div className='formgroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Email' />
        </div>
        <div className='formgroup'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' placeholder='Phone Number' />
        </div>
        <div className='formgroup'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Your Message' rows={6} />
        </div>

        <button type='submit'>Send Message</button>
      </Form>
    </ContactFormRoot>
  );
};
