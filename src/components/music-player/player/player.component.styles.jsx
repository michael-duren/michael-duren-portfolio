import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.primaryColor};
  width: 75%;
  height: 50vh;
  max-height: 20rem;
  border-radius: 2rem;
  border: 0.5px solid ${(props) => props.theme.bodyFontColor};
`;
