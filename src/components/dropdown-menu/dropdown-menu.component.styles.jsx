import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 9999;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  border: 0.5px solid ${(props) => props.theme.bodyFontColor};
  margin: 0.5rem;
`;

export const DropDownItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  white-space: nowrap;
`;

export const DropDownItemButton = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.primaryColor};
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
