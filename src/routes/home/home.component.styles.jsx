import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50vh;
  margin-bottom: 10rem;
  padding-left: 2rem;
  text-shadow: 1px 1px 7px white;
  font-family: 'Gemunu Libre', sans-serif;
  font-weight: 200;

  h1 {
    font-size: 6rem;
    margin-bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(169, 240, 255, 1) 100%,
      rgba(3, 3, 40, 1) 11%,
      rgba(2, 0, 36, 1) 0%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  p {
    margin-top: 0;
    font-size: 3rem;
    align-self: flex-end;
    margin-right: 2rem;
    color: white;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
  }

  /* display: inline-block; */
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  position: fixed;
  text-shadow: 1px 1px 7px white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.4rem;
  font-family: 'Gemunu Libre', sans-serif;
  font-weight: 200;
  background: linear-gradient(
    90deg,
    rgba(169, 240, 255, 1) 100%,
    rgba(3, 3, 40, 1) 11%,
    rgba(2, 0, 36, 1) 0%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;