import {
  ReactLogo,
  ReactLogoContainer,
} from './react-logo-item.component.styles';

import { useState } from 'react';

const ReactLogoLink = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <ReactLogoContainer href={props.link} onClick={() => setOpen(!open)}>
      <ReactLogo />
      {open && props.children}
    </ReactLogoContainer>
  );
};

export default ReactLogoLink;
