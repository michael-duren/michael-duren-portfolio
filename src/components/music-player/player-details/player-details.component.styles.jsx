import { SongImage, PlayerDetailsStyle } from './player-details.component';
import albumImage from '../../../images/darknight.jpg';

import Controls from '../controls/controls.component';

const PlayerDetails = (props) => {
  return (
    <>
      <SongImage src={albumImage} alt="stary sky" />
      <PlayerDetailsStyle>
        <h2>Dream</h2>
        <h3>Duren</h3>
        <Controls
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
        />
      </PlayerDetailsStyle>
    </>
  );
};

export default PlayerDetails;
