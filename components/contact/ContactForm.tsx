import { ContactFormRoot, Form } from '../../styles/components/contact';

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
