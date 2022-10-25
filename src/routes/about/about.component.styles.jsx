import styled from 'styled-components';

import { ReactComponent as LightCloseWindow } from '../../assets/light-theme/close-window-light-theme.svg';
import { ReactComponent as DarkCloseWindow } from '../../assets/dark-theme/close-window-dark-theme.svg';

import { Link } from 'react-router-dom';

export const AboutContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  flex-grow: 1;
  height: 50vh;
  min-height: 20rem;
  align-items: center;
  background-color: ${(p) => p.theme.primaryColor};
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
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.bodyFontColor};

  &:hover {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
  }
`;

export const IconButton = styled(Link)`
  border-radius: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
  }

  /* position: fixed; */
`;

export const CloseWindowLight = styled(LightCloseWindow)`
  height: 1.5rem;
`;
export const CloseWindowDark = styled(DarkCloseWindow)`
  height: 1.5rem;
`;

export const MichaelImage = styled.img`
  width: 10rem;
  border-radius: 50%;
  opacity: 75%;
`;
