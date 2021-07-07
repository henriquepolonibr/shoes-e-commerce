import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckoutPage, CheckoutPaymentMobileStyle } from '../../Styles/styles'
import CheckoutCardMobile from '../../Components/CheckoutCardMobile'
import CheckoutCardDesktop from '../../Components/CheckoutCardDesktop'
import CheckoutPaymentMobile from '../../Components/CheckoutPayment'

const Checkout = () => {
    const { idNumber } = useParams()
    const [productData, setProductData] = useState([])
    let productFiltered = productData.filter(product => product.id == idNumber)

    useEffect(() => {
        async function loadProduct(){
            await axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
            .then(response => setProductData(response.data.results));
        }
        loadProduct()
    }, []);
        return(
        <div>
            <CheckoutPage>
                <h1>Checkout</h1>
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
                <CheckoutPaymentMobileStyle><CheckoutPaymentMobile /></CheckoutPaymentMobileStyle>
            </CheckoutPage>
        </div>
    )
}



export default Checkout