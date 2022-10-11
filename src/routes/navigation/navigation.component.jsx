import { Outlet, Link } from 'react-router-dom';

import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';

import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';

import NavItem from '../../components/nav-item/nav-item.component';
import ReactLogoLink from '../../components/react-logo-item/react-logo-item.component';

import {
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
  ReactLogoContainer,
} from './navigation.component.styles';

const reactMenu = [['About This Michael', 'about']];

const fileMenu = [
  ['Crwn-Clothing', 'https://github.com/michaeldit/crwn-clothing'],
  ['Michael Duren', 'https://github.com/michaeldit/michael-duren-portfolio'],
  ['Password Generator', 'https://github.com/michaeldit/passwordGenerator'],
  ['To Do App', 'https://github.com/michaeldit/passwordGenerator'],
];

const Navigation = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <NavigationContainer>
        <ReactLogoLink>
          <DropDownMenu items={reactMenu} />
        </ReactLogoLink>
        <NavLinks>
          <NavItem name="File">
            <DropDownMenu items={fileMenu} popup="true" />
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
