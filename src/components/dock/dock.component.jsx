import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ReactComponent as GitHubLight } from '../../assets/light-theme/github-light.svg';
import { ReactComponent as GitHubDark } from '../../assets/dark-theme/github-dark-theme.svg';
import { ReactComponent as MusicLight } from '../../assets/light-theme/music-light.svg';
import { ReactComponent as MusicDark } from '../../assets/dark-theme/music-dark-theme.svg';

import { DockButton, DockItem, DockContainer } from './dock.componet.styles';

const Dock = () => {
  const { id } = useContext(ThemeContext);

  return (
    <DockContainer>
      <DockButton>
        <DockItem href="https://github.com/michael-duren">
          {id === 'light' ? <GitHubLight /> : <GitHubDark />}
        </DockItem>
        <DockItem href="/">
          {id === 'light' ? <MusicLight /> : <MusicDark />}
        </DockItem>
      </DockButton>
    </DockContainer>
  );
};

export default Dock;
