import { ReactComponent as GitHub } from '../../assets/github-white.svg';
import { ReactComponent as Music } from '../../assets/music-white.svg';

import {
  DockButton,
  DockItem,
  DockContainer,
  DockItemContainer,
} from './dock.componet.styles';

const Dock = () => {
  return (
    <DockContainer>
      <DockButton>
        <DockItem href="https://github.com/michaeldit">
          <GitHub />
        </DockItem>
        <DockItem href="/">
          <Music />
        </DockItem>
      </DockButton>
    </DockContainer>
  );
};

export default Dock;
