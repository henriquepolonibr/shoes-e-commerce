import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
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
            {productFiltered.map(station => (
            <h1 key={station.id}>Teste - {station.id} </h1>
            ))}
        </div>
    )
}

export default Product