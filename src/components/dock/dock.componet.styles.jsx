import styled from 'styled-components';

export const DockButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition-duration: 3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const DockItem = styled.a`
  margin: 0 0.25rem;
`;

export const DockContainer = styled.div`
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 70vh;
  position: fixed;
`;
