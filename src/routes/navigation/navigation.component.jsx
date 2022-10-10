import { Outlet, Link } from 'react-router-dom';

import SearchBar from '../../components/search/search.component';

import Dock from '../../components/dock/dock.component';

import {
  ReactLogo,
  NavigationContainer,
  NavLinks,
  NavLink,
  TimeContainer,
  SearchBarContainer,
} from './navigation.component.styles';

const Navigation = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <NavigationContainer>
        <Link to="/">
          <ReactLogo className="logo" />
        </Link>
        <NavLinks>
          <NavLink href="https://github.com/michaeldit">File</NavLink>
          <NavLink href="https://github.com/michaeldit">View</NavLink>
          <NavLink href="https://github.com/michaeldit">Go</NavLink>
          <SearchBar />
          <NavLink></NavLink>
        </NavLinks>
        <TimeContainer>{`${currentDate}`}</TimeContainer>
      </NavigationContainer>

      <Outlet />
      <Dock />
    </>
  );
};

export default Navigation;
