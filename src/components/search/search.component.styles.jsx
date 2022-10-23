import styled from 'styled-components';

import { ReactComponent as SearchLight } from '../../assets/light-theme/search-bar-light.svg';
import { ReactComponent as SearchDark } from '../../assets/dark-theme/search-bar-dark-theme.svg';

export const SearchBarIconLight = styled(SearchLight)`
  width: 20px;
  height: 100%;
  /* padding-left: 1rem; */
  cursor: pointer;
  /* height: 80%; */
`;

export const SearchBarIconDark = styled(SearchDark)`
  width: 20px;
  height: 100%;
  /* padding-left: 1rem; */
  cursor: pointer;
  /* height: 80%; */
`;
