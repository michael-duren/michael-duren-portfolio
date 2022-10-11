import {
  DropDownContainer,
  DropDownItems,
  DropDownItemsButton,
} from './dropdown-menu.component.styles';

const DropDownMenu = (props) => {
  const { items } = props;

  return (
    <DropDownContainer>
      <DropDownItems>
        {items.map((item) => {
          return (
            <DropDownItemsButton>
              <a>{item}</a>
            </DropDownItemsButton>
          );
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
