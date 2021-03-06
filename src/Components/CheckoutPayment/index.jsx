/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import BankImage from '../../Asset/img/online-banking.png';
import CreditCardImage from '../../Asset/img/credit-card.png';
import ApplePayImage from '../../Asset/img/apple-pay.png';

function transaction(priceAmount) {
  PayWithMyBank.establish({
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: '1004314986',
    metadata: { demo: 'enabled' },
    currency: 'USD',
    paymentType: 'Deferred',
    amount: priceAmount,
    description: 'your@email.here',
    merchantReference: '123456',
    returnUrl: '#success',
    cancelUrl: '#cancel',
  });
}

const CheckoutPayment = (params) => {
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
        <Link to={`/receipt/${params.id}`}>
          <S.CheckoutButton onClick={() => transaction(params.price)}>Continue</S.CheckoutButton>
        </Link>
      </S.CheckoutPayment>
    </div>
  );
};

export default CheckoutPayment;
