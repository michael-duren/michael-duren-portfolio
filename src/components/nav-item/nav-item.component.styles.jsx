import styled from 'styled-components';

export const NavLinkContainer = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    border-radius: 2rem;
    height: 100%;
  }
`;

export const NavLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.bodyFontColor};
  font-size: 1.5rem;
  justify-items: flex-start;

  /* width: calc((var(--nav-size) * 0.8)); */
`;
