import {
  PlayerContainer,
  SongImage,
  PlayerDetails,
} from './player.component.styles';

import albumImage from '../../../images/darknight.jpg';

import Controls from '../controls/controls.component';

const Player = () => {
  return (
    <PlayerContainer>
      <SongImage src={albumImage} alt="stary sky" />
      <PlayerDetails>
        <h2>Title</h2>
        <h3>Artist</h3>
        <Controls />
      </PlayerDetails>
    </PlayerContainer>
  );
};

export default Player;
