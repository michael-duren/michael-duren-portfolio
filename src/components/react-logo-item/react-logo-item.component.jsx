import {
  ReactLogoLight,
  ReactLogoDark,
  ReactLogoContainer,
} from './react-logo-item.component.styles';

import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

const ReactLogoMenu = (props) => {
  const [open, setOpen] = useState(false);
  const { id } = useContext(ThemeContext);

  return id === 'light' ? (
    <ReactLogoContainer href={props.link} onClick={() => setOpen(!open)}>
      <ReactLogoLight />
      {open && props.children}
    </ReactLogoContainer>
  ) : (
    <ReactLogoContainer href={props.link} onClick={() => setOpen(!open)}>
      <ReactLogoDark />
      {open && props.children}
    </ReactLogoContainer>
  );
};

export default ReactLogoMenu;
