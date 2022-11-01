import Player from '../../components/music-player/player/player.component';
import { MusicItemsContainer } from './music.component.styles';

const Music = () => {
  return (
    <MusicItemsContainer>
      <Player />
    </MusicItemsContainer>
  );
};

export default Music;
