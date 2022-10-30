import styled from 'styled-components';

export const FooterParagraph = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.bodyFontColor};
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 7px white;
  font-family: 'Gemunu Libre', sans-serif;
  font-weight: 200;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1rem;
`;
