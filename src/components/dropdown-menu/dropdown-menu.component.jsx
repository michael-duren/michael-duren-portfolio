import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-menu.component.styles';

import { Link } from 'react-router-dom';

const DropDownMenu = (props) => {
  const { items } = props;

  return (
    <DropDownContainer>
      <DropDownItems>
        {items.map((item, idx) => {
          const [name, location, type] = item;
          switch (type) {
            case 'external-link':
              return (
                <DropDownItemsButton key={idx}>
                  <a href={location} target="_blank" rel="noreferrer noopener">
                    {name}
                  </a>
                </DropDownItemsButton>
              );
            case 'internal-link':
              return (
                <DropDownItemsButton key={idx}>
                  <Link to={location}>{name}</Link>
                </DropDownItemsButton>
              );
            default:
              throw new Error(`${type} is not a valid element`);
          }
        })}
      </DropDownItems>
    </DropDownContainer>
  );
};

export default DropDownMenu;
