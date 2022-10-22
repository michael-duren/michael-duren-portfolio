import { useContext } from 'react';

import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-toggle.styles';

import ToggleSwitch from '../toggle-switch/toggle-switch.component';
import { useLightMode } from '../use-light-mode/useLightMode';
import { ThemeContext } from 'styled-components';

const DropDownToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <DropDownContainer>
      <DropDownItems>
        {/* <DropDownItemsButton> */}
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        {/* </DropDownItemsButton> */}
      </DropDownItems>
    </DropDownContainer>
  );
};

export default DropDownToggle;
