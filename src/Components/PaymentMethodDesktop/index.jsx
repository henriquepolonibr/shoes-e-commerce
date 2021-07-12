/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';
import CheckoutPayment from '../CheckoutPayment';
import greenBank from '../../Asset/img/green-bank.png';

const CheckoutCardDesktop = (params) => {
  return (
    <div>
      <S.CheckoutCardDesktop>
        <S.ProductImage src={params.maxresURL} />
        <S.ProductInfo>
          <S.CartTotal>Order Summary</S.CartTotal>
          <S.ProductTitle>{params.description}</S.ProductTitle>
          <S.ProductDescription>
            x 1,
            {params.color}
            ,Size 41
            <br />
            Item #
            {params.id}
          </S.ProductDescription>
          <S.PaymentTitle>
            Payment Method
          </S.PaymentTitle>
          {/* <S.PaymentImageBlock>
            <S.PaymentImage src={greenBank} />
            <S.PaymentDescription>Online Banking</S.PaymentDescription>
          </S.PaymentImageBlock> */}
          <S.DeliveryDetail>
            <div>
              <S.TotalCostTitle>Total cost</S.TotalCostTitle>
              <S.DeliveryIncludedTitle>
                <br />
                Delivery included
              </S.DeliveryIncludedTitle>
            </div>
            <S.CostPrice>
              $
              {params.price}
            </S.CostPrice>
            <S.PaymentButton>Place order</S.PaymentButton>
          </S.DeliveryDetail>
        </S.ProductInfo>
      </S.CheckoutCardDesktop>
    </div>
  );
};

export default CheckoutCardDesktop;
