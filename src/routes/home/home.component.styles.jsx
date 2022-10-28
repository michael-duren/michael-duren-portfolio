import styled from 'styled-components';

import { ReactComponent as DarkMail } from '../../assets/dark-theme/email-dark-theme.svg';
import { ReactComponent as LightMail } from '../../assets/light-theme/email-light-theme.svg';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5rem;
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
      ${(p) => p.theme.bodyFontColor} 100%,
      rgba(3, 3, 40, 1) 11%,
      rgba(2, 0, 36, 1) 0%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const HomeWindowContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  width: 50vh;
  border-radius: 2rem;
  margin-top: 10rem;
  padding: 2rem;
`;
export const HomeWindowHeader = styled.h2`
  padding-bottom: 0.5rem;
`;
export const HomeWindowParagraph = styled.p`
  line-height: 1;
`;

export const DarkMailLink = styled(DarkMail)`
  padding-left: 1rem;
  text-align: center;
`;
export const LightMailLink = styled(LightMail)`
  padding-left: 1rem;
  text-align: center;
`;
