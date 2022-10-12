import styled from 'styled-components';

import { ReactComponent as CloseWindow } from '../../assets/close-window.svg';

import { Link } from 'react-router-dom';

export const AboutContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  flex-grow: 1;
  height: 50vh;
  min-height: 20rem;
  align-items: center;
  background-color: rgba(244, 244, 244, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  border-radius: 2rem;
`;

export const NavContainer = styled.div`
  margin-top: 2rem;
`;

export const MenuButtons = styled.div`
  display: flex;
  /* align-items: flex-start; */
  justify-content: space-evenly;
`;

export const MenuButton = styled.button`
  background-color: rgba(244, 244, 244, 0.3);
  border-radius: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const IconButton = styled(Link)`
  border-radius: 2rem;
  background-color: rgba(244, 244, 244, 0.3);
  cursor: pointer;

  /* position: fixed; */
`;

export const CloseWindowX = styled(CloseWindow)`
  height: 1.5rem;
`;

export const MichaelImage = styled.img`
  width: 10rem;
  border-radius: 50%;
  opacity: 75%;
`;
