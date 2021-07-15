/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const Header = (params) => {
  const history = useHistory();
  return (
    <div>
      <S.Header>
        <S.HeaderButton onClick={() => history.goBack()} showButton={params.showButton}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          <span>Back</span>
        </S.HeaderButton>
        <S.HeaderTitle>{params.title}</S.HeaderTitle>
        <S.PictureAvatar>img</S.PictureAvatar>
      </S.Header>
    </div>
  );
};

export default Header;
