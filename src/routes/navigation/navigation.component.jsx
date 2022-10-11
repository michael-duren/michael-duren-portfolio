import { Outlet, Link } from 'react-router-dom';

import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';

import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';

import NavItem from '../../components/nav-item/nav-item.component';

import {
  ReactLogo,
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
  ReactLogoContainer,
} from './navigation.component.styles';

const fileMenu = [
  'Crwn-Clothing',
  'Michael Duren',
  'Password Generator',
  'To Do App',
];

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
          <NavItem name="File">
            <DropDownMenu items={fileMenu} Type="a" />
          </NavItem>
          <NavItem link="/" name="View" />
          <NavItem link="/" name="Go" />
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </NavLinks>
        <TimeContainer>{`${currentDate}`}</TimeContainer>
      </NavigationContainer>

      <Outlet />
      <Dock />
    </>
  );
};

export default Navigation;
