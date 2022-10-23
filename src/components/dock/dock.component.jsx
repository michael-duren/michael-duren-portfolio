import { ReactComponent as GitHub } from '../../assets/github-dock-white.svg';
import { ReactComponent as Music } from '../../assets/music-white.svg';

import { DockButton, DockItem, DockContainer } from './dock.componet.styles';

const Dock = () => {
  return (
    <DockContainer>
      <DockButton>
        <DockItem href="https://github.com/michael-duren">
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
