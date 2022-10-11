import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-menu.component.styles';

import { Link } from 'react-router-dom';

const DropDownMenu = (props) => {
  const { items, scope } = props;

  return (
    <DropDownContainer>
      <DropDownItems>
        {items.map((item, idx) => {
          if (scope === 'external') {
            return (
              <DropDownItemsButton key={idx}>
                <a href={item[1]} target="_blank" rel="noreferrer noopener">
                  {item[0]}
                </a>
              </DropDownItemsButton>
            );
          } else {
            return (
              <DropDownItemsButton key={idx}>
                <Link to={item[1]}>{item[0]}</Link>
              </DropDownItemsButton>
            );
          }
        })}
      </DropDownItems>
    </DropDownContainer>
  );
};

export default DropDownMenu;
