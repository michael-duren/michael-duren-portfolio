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

export const SongImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  /* margin-right: 5rem; */
`;

export const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin: 0.5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin: 0;
  }
`;
