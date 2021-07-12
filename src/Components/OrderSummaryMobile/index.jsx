/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';

const OrderSummaryMobile = (params) => {
  return (
    <div>
      <S.CheckoutCardMobile>
        <S.CardTitle>Order Summary</S.CardTitle>
        <S.ProductImage src={params.thumbnailURL} />
        <S.ProductInfo>
          <S.ProductTitle>{params.description}</S.ProductTitle>
          <S.ProductDescription>
            x 1,
            {params.color}
            , Size 41
            <br />
            Item #
            {params.id}
          </S.ProductDescription>
        </S.ProductInfo>
      </S.CheckoutCardMobile>
    </div>
  );
};

export default OrderSummaryMobile;
