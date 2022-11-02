import styled from 'styled-components';

import { ReactComponent as DarkPlay } from '../../../assets/dark-theme/music-player-dark-theme/play-dark-theme.svg';
import { ReactComponent as DarkPause } from '../../../assets/dark-theme/music-player-dark-theme/pause-dark-theme.svg';
import { ReactComponent as DarkForwards } from '../../../assets/dark-theme/music-player-dark-theme/forwards-dark-theme.svg';
import { ReactComponent as DarkBackwards } from '../../../assets/dark-theme/music-player-dark-theme/backwards-dark-theme.svg';

export const ControlsContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

export const DarkPlayButton = styled(DarkPlay)`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
export const DarkPauseButton = styled(DarkPause)`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
export const DarkForwardsButton = styled(DarkForwards)`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
export const DarkBackwardsButton = styled(DarkBackwards)`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
