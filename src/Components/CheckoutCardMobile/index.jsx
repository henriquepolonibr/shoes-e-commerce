/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';

const CheckoutCardMobile = (params) => {
  return (
    <div>
      <S.CheckoutCardMobile>
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
          <S.DeliveryDetailTitle>Delivery Details</S.DeliveryDetailTitle>
          <S.DeliveryDetailDescription>
            John Smith
            <br />
            Phone no: 01312428200
            <br />
            Address: Redwood City, 2000.
          </S.DeliveryDetailDescription>
        </S.ProductInfo>
        <S.Total>
          <S.TotalCostTitle>Total cost</S.TotalCostTitle>
          <S.DeliveryIncludedTitle>
            <br />
            Delivery included
          </S.DeliveryIncludedTitle>
        </S.Total>
        <S.CostPrice>
          $
          {params.price}
        </S.CostPrice>
      </S.CheckoutCardMobile>
    </div>
  );
};

export default CheckoutCardMobile;
