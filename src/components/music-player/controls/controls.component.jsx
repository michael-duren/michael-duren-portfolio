import { ControlsContainer } from './controls.component.styles';

import {
  DarkPlayButton,
  DarkPauseButton,
  DarkForwardsButton,
  DarkBackwardsButton,
} from './controls.component.styles';

const Controls = (props) => {
  return (
    <ControlsContainer>
      <DarkBackwardsButton onClick={() => props.SkipSong(false)} />
      {props.isPlaying ? (
        <DarkPauseButton onClick={() => props.setIsPlaying(!props.isPlaying)} />
      ) : (
        <DarkPlayButton onClick={() => props.setIsPlaying(!props.isPlaying)} />
      )}
      <DarkForwardsButton onClick={() => props.SkipSong()} />
    </ControlsContainer>
  );
};

export default Controls;
