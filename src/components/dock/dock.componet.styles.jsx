import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DockButton = styled.button`
  background-color: ${(p) => p.theme.primaryColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition-duration: 3s;
  margin-bottom: 1rem;
  border: 0.5px solid ${(props) => props.theme.bodyFontColor};
  @keyframes fadeInAnimation {
    0% {
      margin-bottom: 0rem;
      filter: drop-shadow(
        5px 5px 10px ${(props) => props.theme.dropShadowColor}
      );
    }
    100% {
      margin-bottom: 1rem;
    }
  }
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    filter: drop-shadow(1px 1px 5px ${(props) => props.theme.dropShadowColor});
  }

  animation: fadeInAnimation ease 3s;
`;

export const DockItem = styled.a`
  margin: 0 0.25rem;
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    border-radius: 2rem;
    height: 100%;
  }
`;

export const DockInternalItem = styled(Link)`
  margin: 0 0.25rem;
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    border-radius: 2rem;
    height: 100%;
  }
`;

export const DockContainer = styled.div`
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  color: ${(p) => p.theme.primaryColor};
  text-align: center;
  margin-top: 50vh;
  position: fixed;
`;
