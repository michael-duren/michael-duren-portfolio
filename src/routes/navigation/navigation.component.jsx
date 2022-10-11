import { Outlet } from 'react-router-dom';

import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';

import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';

import NavItem from '../../components/nav-item/nav-item.component';
import ReactLogoMenu from '../../components/react-logo-item/react-logo-item.component';

import {
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
} from './navigation.component.styles';

const reactMenu = [['About This Michael', '/about']];

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
        <ReactLogoMenu>
          <DropDownMenu items={reactMenu} scope="internal" />
        </ReactLogoMenu>
        <NavLinks>
          <NavItem name="File">
            <DropDownMenu items={fileMenu} scope="external" />
          </NavItem>
          <NavItem link="/" name="View" />
          <NavItem name="Go" />
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
