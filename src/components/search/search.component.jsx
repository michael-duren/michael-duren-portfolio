import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  SearchBarIconDark,
  SearchBarIconLight,
} from './search.component.styles';

const SearchBar = () => {
  const { id } = useContext(ThemeContext);

  return <>{id === 'light' ? <SearchBarIconLight /> : <SearchBarIconDark />}</>;
};
export default SearchBar;
