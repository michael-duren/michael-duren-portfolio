import { NavLinkContainer, NavLink } from './nav-item.component.styles';

import { useState } from 'react';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavLinkContainer>
      <NavLink href={props.link} onClick={() => setOpen(!open)}>
        {props.name}
      </NavLink>
      {open && props.children}
    </NavLinkContainer>
  );
};

export default NavItem;
