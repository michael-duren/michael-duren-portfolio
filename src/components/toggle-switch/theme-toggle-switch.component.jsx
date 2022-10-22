import { func, string } from 'prop-types';

import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from './theme-toggle-switch.component.styles';

const ThemeToggleSwitch = ({ theme, toggleTheme }) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          theme={theme}
          type="checkbox"
          onClick={toggleTheme}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
};

ThemeToggleSwitch.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ThemeToggleSwitch;
