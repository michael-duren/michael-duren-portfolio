import styled from 'styled-components';

export const NavLinkContainer = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    border-radius: 2rem;
    height: 100%;
    filter: drop-shadow(1px 1px 5px ${(props) => props.theme.dropShadowColor});
  }
`;

export const NavLink = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.bodyFontColor};
  font-size: 1.5rem;
  justify-items: flex-start;

  /* width: calc((var(--nav-size) * 0.8)); */
`;
