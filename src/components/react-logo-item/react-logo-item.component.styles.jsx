import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/React-icon.svg';
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

export const ReactLogo = styled(Logo)`
  /* height: 100%; */
  width: 2rem;
  /* padding: 2rem; */
`;
