import * as S from './styles'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchProduct = () => {
    return(
        <S.SearchBox><FontAwesomeIcon icon={faSearch} size="sm" />
            <S.SearchText>
                Search for your sneaker
            </S.SearchText>
        </S.SearchBox>
    )
}

export default SearchProduct