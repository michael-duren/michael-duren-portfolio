import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as LightCloseWindow } from '../../assets/light-theme/close-window-light-theme.svg';
import { ReactComponent as DarkCloseWindow } from '../../assets/dark-theme/close-window-dark-theme.svg';

export const CloseWindowLight = styled(LightCloseWindow)`
  height: 1.5rem;
`;
export const CloseWindowDark = styled(DarkCloseWindow)`
  height: 1.5rem;
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
