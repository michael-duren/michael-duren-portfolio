import { Outlet } from 'react-router-dom';

// Components
import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';
import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';
import DropDownToggle from '../../components/dropdown-toggle/dropdown-toggle.component';
import NavItem from '../../components/nav-item/nav-item.component';
import ReactLogoMenu from '../../components/react-logo-item/react-logo-item.component';

// Styoles
import {
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
} from './navigation.component.styles';

// import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';

// import { darkTheme, lightTheme } from '../../Themes';

const reactMenu = [['About This Michael', '/about', 'internal-link']];

const fileMenu = [
  [
    'Crwn-Clothing',
    'https://github.com/michaeldit/crwn-clothing',
    'external-link',
  ],
  [
    'Michael Duren',
    'https://github.com/michaeldit/michael-duren-portfolio',
    'external-link',
  ],
  [
    'Password Generator',
    'https://github.com/michaeldit/passwordGenerator',
    'external-link',
  ],
  [
    'To Do App',
    'https://github.com/michaeldit/passwordGenerator',
    'external-link',
  ],
];

const goMenu = [
  ['Home', '/', 'internal-link'],
  ['About', 'About', 'internal-link'],
  ['LinkedIn', 'https://www.linkedin.com/in/michael-duren/', 'external-link'],
  ['Github', 'https://github.com/michaeldit', 'external-link'],
  ['Contact', 'mailto:michaeld@michaelduren.com', 'external-link'],
];

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
          <NavItem name="View"></NavItem>

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
