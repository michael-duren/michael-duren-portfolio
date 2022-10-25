import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: absolute;
  top: 3rem;
  /* right: 40px; */
  z-index: 5;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  filter: drop-shadow(1px 1px 5px ${(props) => props.theme.dropShadowColor});
  /* opacity: 0.7; */
  justify-content: flex-start;
  /* border: 1px solid black; */
`;

export const DropDownItems = styled.div`
  /* margin: 2rem auto; */
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const DropDownItemsButton = styled.button`
  /* margin: auto; */
  border: none;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  text-align: left;
  &:hover {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    cursor: pointer;
    border-radius: 4rem;

    a {
      color: ${(props) => props.theme.bodyFontColor};
    }
  }
`;
