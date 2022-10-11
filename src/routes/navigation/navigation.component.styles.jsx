import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/React-icon.svg';

export const NavigationContainer = styled.div`
  margin-top: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2rem;
  width: 100%;
  transition-duration: 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.1rem 0 0 0;
  }
`;

export const ReactLogo = styled(Logo)`
  /* height: 100%; */
  width: 2rem;
  /* padding: 2rem; */
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  transition: filter 300ms;
  /* justify-content: flex-start; */
`;

export const TimeContainer = styled.div`
  /* padding: 10px 15px; */
  color: white;
  font-size: 1.5rem;
  justify-items: flex-end;
  flex: 1 1 10rem;
  text-align: end;
  padding-right: 4rem;
`;

export const SearchBarContainer = styled.div`
  margin-left: 1rem;
  &:hover {
    height: 100%;
    background-color: var(--bg);
    border-radius: 2rem;
    padding: 0.3rem;
  }
`;

export const ReactLogoContainer = styled.div`
  padding: 0 0.5rem 0;
  margin: 0 1rem;

  &:hover {
    background-color: var(--bg);
    border-radius: 2rem;
  }
`;
