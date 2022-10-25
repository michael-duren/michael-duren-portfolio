import styled from 'styled-components';

export const NavigationContainer = styled.div`
  margin-top: 0.2rem;
  background-color: ${(p) => p.theme.primaryColor};
  min-height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2rem;
  width: 100%;
  transition-duration: 500ms;

  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    padding: 0.1rem 0 0 0;
  }
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
  color: ${(p) => p.theme.bodyFontColor};
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
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    border-radius: 2rem;
    padding: 0.3rem;
    filter: drop-shadow(1px 1px 5px ${(props) => props.theme.dropShadowColor});
  }
`;
