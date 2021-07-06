import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckoutPage } from '../../Styles/styles'
import CheckoutCard from '../../Components/CheckoutCard'
import CheckoutPayment from '../../Components/CheckoutPayment'

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
                    <CheckoutCard
                    {...product}
                    key={product.id}
                    />
                ))}
                <CheckoutPayment />
            </CheckoutPage>
        </div>
    )
}



export default Checkout