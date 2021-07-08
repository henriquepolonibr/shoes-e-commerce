/* eslint-disable arrow-body-style */
import React from 'react';
import * as S from './styles';
import BankImage from '../../Asset/img/online-banking.png';
import CreditCardImage from '../../Asset/img/credit-card.png';
import ApplePayImage from '../../Asset/img/apple-pay.png';

const CheckoutPayment = () => {
  return (
    <div>
      <S.CheckoutPayment>
        <S.CheckoutTitle>Payment method</S.CheckoutTitle>
        <S.CheckoutPaymentCard>
          <S.CheckoutPaymentItem>
            <div>
              <S.CheckoutPaymentItemTitle>Online Banking</S.CheckoutPaymentItemTitle>
              <S.CheckoutPaymentItemDiscountLabel>SAVE $10</S.CheckoutPaymentItemDiscountLabel>
            </div>
            <S.CheckoutPaymentItemImage src={BankImage} />
          </S.CheckoutPaymentItem>
          <S.CheckoutPaymentItem>
            <S.CheckoutPaymentItemTitle>Card Payment</S.CheckoutPaymentItemTitle>
            <S.CheckoutPaymentItemImage src={CreditCardImage} />
          </S.CheckoutPaymentItem>
          <S.CheckoutPaymentItem>
            <S.CheckoutPaymentItemTitle>Apple Pay</S.CheckoutPaymentItemTitle>
            <S.CheckoutPaymentItemImage src={ApplePayImage} />
          </S.CheckoutPaymentItem>
        </S.CheckoutPaymentCard>
        <S.CheckoutButton>Continue</S.CheckoutButton>
      </S.CheckoutPayment>
    </div>
  );
};

export default CheckoutPayment;
