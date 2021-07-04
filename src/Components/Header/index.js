import * as S from './styles'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <div>
            <S.Header>
                <S.HeaderButton><FontAwesomeIcon icon={faArrowLeft} size="lg" />Back</S.HeaderButton>
                <S.HeaderTitle>Sneakers</S.HeaderTitle>
                <S.PictureAvatar>img</S.PictureAvatar>
            </S.Header>
        </div>
    )
}

export default Header