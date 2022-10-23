import { ToggleWrapper, Notch } from './theme-toggle-switch.component.styles';

export const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};
