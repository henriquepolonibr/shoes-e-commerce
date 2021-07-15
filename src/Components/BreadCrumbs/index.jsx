/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';

const BreadCrumb = (params) => {
  let inputColor = '';
  if (params.greenDots > 2) {
    inputColor = '#61CB46';
  } else {
    inputColor = '#E8E8E8';
  }
  return (
    <S.BreadCrumb>
      <S.BreadCrumbLine>
        <S.BreadCrumbDotLeft />
        <S.BreadCrumbDotMiddle />
        <S.BreadCrumbDotRight inputColor={inputColor} />
      </S.BreadCrumbLine>
      <S.BreadCrumbTextDiv>
        <S.BreadCrumbText>
          Cart
        </S.BreadCrumbText>
        <S.BreadCrumbText>
          Payment options
        </S.BreadCrumbText>
        <S.BreadCrumbText>
          Receipt
        </S.BreadCrumbText>
      </S.BreadCrumbTextDiv>
    </S.BreadCrumb>
  );
};

export default BreadCrumb;
