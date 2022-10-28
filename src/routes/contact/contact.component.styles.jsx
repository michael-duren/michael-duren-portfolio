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
    align-items: center;
    flex-direction: column;
  }
`;
