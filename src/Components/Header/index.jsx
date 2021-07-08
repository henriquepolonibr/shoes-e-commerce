/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const Header = () => {
  return (
    <div>
      <S.Header>
        <Link to="/">
          <S.HeaderButton>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            <span>Back</span>
          </S.HeaderButton>
        </Link>
        <S.HeaderTitle>Sneakers</S.HeaderTitle>
        <S.PictureAvatar>img</S.PictureAvatar>
      </S.Header>
    </div>
  );
};

export default Header;
