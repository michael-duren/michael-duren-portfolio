import {
  FileDropDownContainer,
  FileItems,
  FileButton,
} from './file-dropdown.component.styles';

const FileDropDown = () => {
  return (
    <FileDropDownContainer>
      <FileItems>
        <FileButton>
          <a>Crwn-Clothing</a>
        </FileButton>
        <FileButton>
          <a>Michael Duren</a>
        </FileButton>
        <FileButton>
          <a>Password Generator</a>
        </FileButton>
        <FileButton>
          <a>To Do (Coming soon)</a>
        </FileButton>
      </FileItems>
    </FileDropDownContainer>
  );
};

export default FileDropDown;
