/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';
import CheckoutPayment from '../CheckoutPayment';

const CheckoutCardDesktop = (params) => {
  return (
    <div>
      <S.CheckoutCardDesktop>
        <S.ProductImage src={params.maxresURL} />
        <S.ProductInfo>
          <S.ProductFlex>
            <div>
              <S.CartTotal>Cart total</S.CartTotal>
              <S.ProductTitle>{params.description}</S.ProductTitle>
              <S.ProductDescription>
                x 1,
                {params.color}
                ,Size 41
                <br />
                Item #
                {params.id}
              </S.ProductDescription>
            </div>
            <div>
              <S.DeliveryDetail>
                <S.DeliveryDetailTitle>Delivery Details</S.DeliveryDetailTitle>
                <S.DeliveryDetailDescription>
                  John Smith
                  <br />
                  Phone no: 01312428200
                  <br />
                  Address: Redwood City, 2000.
                </S.DeliveryDetailDescription>
                <S.CostBlock>
                  <div>
                    <S.TotalCostTitle>Total cost</S.TotalCostTitle>
                    <S.DeliveryIncludedTitle>
                      <br />
                      Delivery included
                    </S.DeliveryIncludedTitle>
                  </div>
                  <div>
                    <S.CostPrice>
                      $
                      {params.price}
                    </S.CostPrice>
                  </div>
                </S.CostBlock>
              </S.DeliveryDetail>
            </div>
          </S.ProductFlex>
          <CheckoutPayment id={params.id} />
        </S.ProductInfo>
      </S.CheckoutCardDesktop>
    </div>
  );
};

export default CheckoutCardDesktop;
