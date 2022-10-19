import { func, string } from 'prop-types';

import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from './toggle-switch.component.styles';

const ToggleSwitch = ({ theme, toggleTheme }) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
};

ToggleSwitch.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ToggleSwitch;
