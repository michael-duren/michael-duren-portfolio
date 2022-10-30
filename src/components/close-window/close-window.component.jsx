import {
  CloseWindowLight,
  CloseWindowDark,
  IconButton,
} from './close-window.component.styles';

const CloseWindowButton = ({ id }) => {
  return (
    <IconButton to="/">
      {id === 'light' ? <CloseWindowLight /> : <CloseWindowDark />}
    </IconButton>
  );
};

export default CloseWindowButton;
