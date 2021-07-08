import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const SearchProduct = () => {
  const [filterText, setFilterText] = useState('');
  return (
    <S.SearchBox>
      <FontAwesomeIcon icon={faSearch} size="sm" />
      <S.SearchText
        placeholder="Search for your sneaker"
        name="filterTextArea"
        type="text"
        id="textAreaFilterField"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </S.SearchBox>
  );
};

export default SearchProduct;
