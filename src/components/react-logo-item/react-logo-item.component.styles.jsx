import styled from 'styled-components';
import { ReactComponent as LogoLight } from '../../assets/light-theme/react-icon-light.svg';
import { ReactComponent as LogoDark } from '../../assets/dark-theme/react-dark-theme.svg';
import { Link } from 'react-router-dom';

export const ReactLogoContainer = styled(Link)`
  padding: 0 0.5rem 0;
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--bg);
    border-radius: 2rem;
  }
`;

export const ReactLogoLight = styled(LogoLight)`
  /* height: 100%; */
  width: 2rem;
  /* padding: 2rem; */
`;

export const ReactLogoDark = styled(LogoDark)`
  /* height: 100%; */
  width: 2rem;
  /* padding: 2rem; */
`;
