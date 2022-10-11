import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: absolute;
  top: 2.3rem;
  /* right: 40px; */
  z-index: 5;
  border-radius: 2rem;
  background-color: rgba(244, 244, 244, 0.5);
  justify-content: flex-start;
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
    background-color: rgba(97, 218, 251, 0.5);
    cursor: pointer;
    border-radius: 4rem;

    a {
      color: white;
    }
  }
`;
