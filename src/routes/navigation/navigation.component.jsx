import { Outlet } from 'react-router-dom';

// Components
import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';
import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';

import NavItem from '../../components/nav-item/nav-item.component';
import ReactLogoMenu from '../../components/react-logo-item/react-logo-item.component';

// Styoles
import {
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
} from './navigation.component.styles';

const reactMenu = [['About This Michael', '/about', 'internal-link', '1a']];

const fileMenu = [
  [
    'Crwn-Clothing',
    'https://github.com/michael-duren/crwn-clothing',
    'external-link',
    '1b',
  ],
  [
    'Michael Duren',
    'https://github.com/michael-duren/michael-duren-portfolio',
    'external-link',
    '2b',
  ],
  [
    'Password Generator',
    'https://github.com/michael-duren/passwordGenerator',
    'external-link',
    '3b',
  ],
  [
    'To Do App',
    'https://github.com/michael-duren/passwordGenerator',
    'external-link',
    '4b',
  ],
];

const goMenu = [
  ['Home', '/', 'internal-link', '1c'],
  ['About', 'About', 'internal-link', '2c'],
  [
    'LinkedIn',
    'https://www.linkedin.com/in/michael-duren/',
    'external-link',
    '3c',
  ],
  ['Github', 'https://github.com/michael-duren', 'external-link', '4c'],
  ['Contact', 'mailto:michaeld@michaelduren.com', 'external-link', '5c'],
];

const viewMenu = [[null, null, 'button', '1d']];

const Navigation = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <NavigationContainer>
        <ReactLogoMenu>
          <DropDownMenu items={reactMenu} />
        </ReactLogoMenu>
        <NavLinks>
          <NavItem name="File">
            <DropDownMenu items={fileMenu} />
          </NavItem>
          <NavItem name="View">
            <DropDownMenu items={viewMenu} />
          </NavItem>
          <NavItem name="Go">
            <DropDownMenu items={goMenu} />
          </NavItem>
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
