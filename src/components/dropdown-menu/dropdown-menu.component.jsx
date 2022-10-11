import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-menu.component.styles';

const DropDownMenu = (props) => {
  const { items, popup } = props;

  return (
    <DropDownContainer>
      <DropDownItems>
        {items.map((item, idx) => {
          if (popup) {
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
                <a href={item[1]}>{item[0]}</a>
              </DropDownItemsButton>
            );
          }
        })}
      </DropDownItems>
    </DropDownContainer>
  );
};

export default DropDownMenu;

{
  /* <DropDownItemsButton>
          <a>Crwn-Clothing</a>
        </DropDownItemsButton>
        <DropDownItemsButton>
          <a>Michael Duren</a>
        </DropDownItemsButton>
        <DropDownItemsButton>
          <a>Password Generator</a>
        </DropDownItemsButton>
        <DropDownItemsButton>
          <a>To Do (Coming soon)</a>
        </DropDownItemsButton> */
}
