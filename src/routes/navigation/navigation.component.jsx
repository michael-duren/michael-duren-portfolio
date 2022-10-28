import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

// Components
import SearchBar from '../../components/search/search.component';
import Dock from '../../components/dock/dock.component';
import DropDownMenu from '../../components/dropdown-menu/dropdown-menu.component';
import Footer from '../../components/footer/footer.component';
import NavItem from '../../components/nav-item/nav-item.component';
import ReactLogoMenu from '../../components/react-logo-item/react-logo-item.component';
import Initials from '../../components/initials/initials.component';
// Styoles
import {
  NavigationContainer,
  NavLinks,
  TimeContainer,
  SearchBarContainer,
} from './navigation.component.styles';
// images
import lightInitials from '../../images/initials-light-theme.png';
import darkInitials from '../../images/initials-dark-theme.png';

const reactMenu = [['About This Michael', '/about', 'internal-link']];

const fileMenu = [
  [
    'Crwn-Clothing',
    'https://github.com/michael-duren/crwn-clothing',
    'external-link',
  ],
  [
    'Michael Duren',
    'https://github.com/michael-duren/michael-duren-portfolio',
    'external-link',
  ],
  [
    'Password Generator',
    'https://github.com/michael-duren/passwordGenerator',
    'external-link',
  ],
  [
    'To Do App',
    'https://github.com/michael-duren/passwordGenerator',
    'external-link',
  ],
];

const goMenu = [
  ['Home', '/', 'internal-link'],
  ['About', 'About', 'internal-link'],
  ['Contact', 'Contact', 'internal-link'],
  ['LinkedIn', 'https://www.linkedin.com/in/michael-duren/', 'external-link'],
  ['Github', 'https://github.com/michael-duren', 'external-link'],
];

const viewMenu = [[null, null, 'button']];

const Navigation = () => {
  const currentDate = new Date().toLocaleDateString();
  const { id } = useContext(ThemeContext);

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
      <Initials
        src={id === 'light' ? lightInitials : darkInitials}
        alt="Michael Duren initials"
      />
      <Dock />
      <Footer />
    </>
  );
};

export default Navigation;
