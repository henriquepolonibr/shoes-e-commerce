import * as S from './styles'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useState } from 'react';

const SearchProduct = () => {
    const [ filterText , setFilterText ] = useState("")
    return(
        <S.SearchBox><FontAwesomeIcon icon={faSearch} size="sm" />
            <S.SearchText placeholder="Search for your sneaker" 
            name = "filterTextArea"
            type="text"
            id="textAreaFilterField"
            value = {filterText}
            onChange={e => setFilterText(e.target.value)}
            ></S.SearchText>
        </S.SearchBox>
    )
}

export default SearchProduct