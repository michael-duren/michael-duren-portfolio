import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from './toggle-switch.component.styles';

const ToggleSwitch = () => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
};

export default ToggleSwitch;
