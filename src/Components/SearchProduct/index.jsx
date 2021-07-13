import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../Contexts/filter';
import * as S from './styles';

const SearchProduct = () => {
  const { filter, setFilter } = useContext(UserContext);
  return (
    <S.SearchBox>
      <FontAwesomeIcon icon={faSearch} size="sm" />
      <S.SearchText
        placeholder="Search for your sneaker"
        name="filterTextArea"
        type="text"
        id="textAreaFilterField"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </S.SearchBox>
  );
};

export default SearchProduct;
