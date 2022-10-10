import styled from 'styled-components';

export const FileDropDownContainer = styled.div`
  position: absolute;
  top: 3.2rem;
  right: 40px;
  z-index: 5;
  border-radius: 2rem;
  background-color: rgba(244, 244, 244, 0.5);
  justify-content: flex-start;
`;

export const FileItems = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;

export const FileButton = styled.button`
  margin: 1rem;
  border: none;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
`;
