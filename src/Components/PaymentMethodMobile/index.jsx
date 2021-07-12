/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';
import greenBank from '../../Asset/img/green-bank.png';

const PaymentMethodMobile = (params) => {
  return (
    <S.PaymentCardMobile>
      <S.PaymentTitle>
        Payment Method
      </S.PaymentTitle>
      <S.PaymentImageBlock>
        <S.PaymentImage src={greenBank} />
        <S.PaymentDescription>Online Banking</S.PaymentDescription>
      </S.PaymentImageBlock>
      <S.PaymentBlockMargin />
      <S.PaymentTotalCost>Total cost</S.PaymentTotalCost>
      <S.PaymentDeliveryTitle>Delivery included</S.PaymentDeliveryTitle>
      <S.PaymentPrice>
        $
        {params.price}
      </S.PaymentPrice>
      <S.PaymentButton>Place order</S.PaymentButton>
    </S.PaymentCardMobile>
  );
};

export default PaymentMethodMobile;
