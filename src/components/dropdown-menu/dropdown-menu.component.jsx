import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { v4 as uuidv4 } from 'uuid';

import {
  DropDownContainer,
  DropDownItem,
  DropDownItemButton,
} from './dropdown-menu.component.styles';

import { Toggle } from '../toggle-switch/theme-toggle-switch.component';
import { Link } from 'react-router-dom';

const DropDownMenu = (props) => {
  const { items } = props;
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <DropDownContainer>
      {items.map((item) => {
        const [name, location, type] = item;
        switch (type) {
          case 'external-link':
            return (
              <DropDownItem key={uuidv4()}>
                <DropDownItemButton>
                  <a href={location} target="_blank" rel="noreferrer noopener">
                    {name}
                  </a>
                </DropDownItemButton>
              </DropDownItem>
            );
          case 'internal-link':
            return (
              <DropDownItem key={uuidv4()}>
                <DropDownItemButton>
                  <Link to={location}>{name}</Link>
                </DropDownItemButton>
              </DropDownItem>
            );
          case 'button':
            return (
              <DropDownItem key={uuidv4()}>
                <DropDownItemButton>
                  <Toggle isActive={id === 'dark'} onToggle={setTheme} />
                </DropDownItemButton>
              </DropDownItem>
            );
          default:
            throw new Error(`${type} is not a valid element`);
        }
      })}
    </DropDownContainer>
  );
};

export default DropDownMenu;
