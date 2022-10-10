import { Outlet, Link } from 'react-router-dom';

import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';

import FileDropDown from '../../components/file-dropdown/file-dropdown.component';

import {
  ReactLogo,
  NavigationContainer,
  NavLinks,
  NavLink,
  TimeContainer,
  SearchBarContainer,
  NavLinkContainer,
  ReactLogoContainer,
} from './navigation.component.styles';
import React from 'react';

const Navigation = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <NavigationContainer>
        <Link to="/">
          <ReactLogoContainer>
            <ReactLogo className="logo" />
          </ReactLogoContainer>
        </Link>
        <NavLinks>
          <NavLinkContainer>
            <NavLink href="https://github.com/michaeldit">File</NavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="https://github.com/michaeldit">View</NavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="https://github.com/michaeldit">Go</NavLink>
          </NavLinkContainer>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </NavLinks>
        <TimeContainer>{`${currentDate}`}</TimeContainer>
      </NavigationContainer>
      <FileDropDown />

      <Outlet />
      <Dock />
    </>
  );
};

export default Navigation;
