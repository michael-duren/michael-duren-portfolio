import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-menu.component.styles';

import { Toggle } from '../toggle-switch/theme-toggle-switch.component';

import { Link } from 'react-router-dom';

const DropDownMenu = (props) => {
  const { items } = props;
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <DropDownContainer>
      <DropDownItems>
        {items.map((item) => {
          const [name, location, type, key] = item;
          switch (type) {
            case 'external-link':
              return (
                <DropDownItemsButton key={key}>
                  <a href={location} target="_blank" rel="noreferrer noopener">
                    {name}
                  </a>
                </DropDownItemsButton>
              );
            case 'internal-link':
              return (
                <DropDownItemsButton key={key}>
                  <Link to={location}>{name}</Link>
                </DropDownItemsButton>
              );
            case 'button':
              return (
                <DropDownItemsButton key={key}>
                  <Toggle isActive={id === 'dark'} onToggle={setTheme} />
                </DropDownItemsButton>
              );
            default:
              throw new Error(`${type} is not a valid element`);
          }
        })}
      </DropDownItems>
    </DropDownContainer>
  );
};

export default DropDownMenu;
