/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CheckoutPage } from '../../Styles/styles';
import OrderSummaryMobile from '../../Components/OrderSummaryMobile';
import BreadCrumb from '../../Components/BreadCrumbs';

const Receipt = () => {
  const { idNumber } = useParams();
  const [productData, setProductData] = useState([]);
  const productFiltered = productData.filter((product) => product.id === idNumber);

  useEffect(() => {
    axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((response) => setProductData(response.data.results));
  }, []);
  return (
    <div>
      <CheckoutPage>
        <h1>Review and Confirmation</h1>
        <BreadCrumb />
        {productFiltered.map((product) => (
          <OrderSummaryMobile
            {...product}
            key={product.id}
          />
        ))}
      </CheckoutPage>
    </div>
  );
};

export default Receipt;
