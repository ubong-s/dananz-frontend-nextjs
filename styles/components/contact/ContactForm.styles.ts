import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';

export const ContactFormRoot = styled.section``;
export const Form = styled.form`
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
