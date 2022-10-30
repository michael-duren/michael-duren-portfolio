import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  width: 50%;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  margin: 10rem auto;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    box-sizing: border-box;
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    color: ${(props) => props.theme.bodyFontColor};
    border: none;
    margin: 1rem 0rem;
    font-family: 'Inter', sans-serif;
  }

  button {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    color: ${(props) => props.theme.bodyFontColor};
    margin-top: 1rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 1rem;
    transition-duration: 1s;

    &:hover {
      padding: 1.25rem;
      font-size: 1rem;
    }
  }

  p {
    margin-top: 2rem;
  }
`;

export const CloseWindowContainer = styled.div`
  width: 10%;
`;

export const SentReciept = styled.div`
  color: green;
  text-align: center;
  margin: 1rem 0;
`;
