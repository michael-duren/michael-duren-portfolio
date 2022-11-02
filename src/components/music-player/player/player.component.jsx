import { useEffect, useRef, useState } from 'react';

import mp3 from '../../../songs/Dream.mp3';

import { PlayerContainer } from './player.component.styles';

import PlayerDetails from '../player-details/player-details.component.styles';

const Player = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  // const SkipSong = (forwards = true) => {
  //   if (forwards) {
  //     props.setCurrentSongIndex(() => {
  //       let temp = props.currentSongIndex;
  //       temp++;

  //       if (temp > props.songs.length - 1) {
  //         temp = 0;
  //       }

  //       return temp;
  //     });
  //   } else {
  //     props.setCurrentSongIndex(() => {
  //       let temp = props.currentSongIndex;
  //       temp--;

  //       if (temp < 0) {
  //         temp = props.songs.length - 1;
  //       }

  //       return temp;
  //     });
  //   }
  // };

  return (
    <PlayerContainer>
      <audio src={mp3} ref={audioElement} />
      <PlayerDetails isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </PlayerContainer>
  );
};

export default Player;
