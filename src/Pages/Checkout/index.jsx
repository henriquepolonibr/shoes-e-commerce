/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CheckoutPage, CheckoutPaymentMobileStyle } from '../../Styles/styles';
import CheckoutCardMobile from '../../Components/CheckoutCardMobile';
import CheckoutCardDesktop from '../../Components/CheckoutCardDesktop';
import CheckoutPaymentMobile from '../../Components/CheckoutPayment';
import BreadCrumb from '../../Components/BreadCrumbs';
import Header from '../../Components/Header';

const Checkout = () => {
  const { idNumber } = useParams();
  const [productData, setProductData] = useState([]);
  const productFiltered = productData.filter((product) => product.id === idNumber);

  useEffect(() => {
    async function loadProduct() {
      await axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
        .then((response) => setProductData(response.data.results));
    }
    loadProduct();
  }, []);
  return (
    <div>
      <Header title="Checkout" />
      <CheckoutPage>
        <h1>Checkout</h1>
        <BreadCrumb />
        {productFiltered.map((product) => (
          <CheckoutCardMobile
            {...product}
            key={product.id}
          />
        ))}
        {productFiltered.map((product) => (
          <CheckoutCardDesktop
            {...product}
            key={product.id}
          />
        ))}
        <CheckoutPaymentMobileStyle>
          {productFiltered.map((product) => (
            <CheckoutPaymentMobile
              {...product}
              key={product.id}
            />
          ))}
        </CheckoutPaymentMobileStyle>
      </CheckoutPage>
    </div>
  );
};

export default Checkout;
