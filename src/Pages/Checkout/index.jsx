/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CheckoutPage, CheckoutPaymentMobileStyle } from '../../Styles/styles';
import CheckoutCardMobile from '../../Components/CheckoutCardMobile';
import CheckoutCardDesktop from '../../Components/CheckoutCardDesktop';
import CheckoutPaymentMobile from '../../Components/CheckoutPayment';
import BreadCrumb from '../../Components/BreadCrumbs';

const Checkout = () => {
  const { idNumber } = useParams();
  const [productData, setProductData] = useState([]);
  const productFiltered = productData.filter((product) => product.id === idNumber);

  useEffect(() => {
    // eslint-disable-next-line prefer-arrow-callback
    // PayWithMyBank.addPanelListener(function(command, event) {
    //   if (command === 'event' && event.type === 'new_location') {
    //     if (event.data.indexOf('#success') === 0) {
    //       alert('success!');
    //     } else {
    //       alert('cancel!');
    //     }
    //     return false;
    //   }
    //   return true;
    // });

    // PayWithMyBank.establish({
    //   accessId: 'D61EC9BAF0BB369B9438',
    //   merchantId: '1004314986',
    //   metadata: { demo: 'enabled' },
    //   currency: 'USD',
    //   paymentType: 'Deferred',
    //   amount: '100.00',
    //   description: 'your@email.here',
    //   merchantReference: '123456',
    //   returnUrl: '#success',
    //   cancelUrl: '#cancel',
    // });
    async function loadProduct() {
      await axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
        .then((response) => setProductData(response.data.results));
    }
    loadProduct();
  }, []);
  return (
    <div>
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
