import React from 'react';
import Header from '../Components/Header'
import SearchProduct from '../Components/SearchProduct'
import ProductCard from '../Components/ProductCard'
import { useEffect, useState } from 'react';
import axios from 'axios'

const IndexPage = () => {

  const [productData, setProductData] = useState()

  useEffect(() => {
    axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
        .then(response => setProductData(response.data.results));
        console.log('response', productData)
  }, []);
  return (
    <>
    <Header />
    <SearchProduct />
    {productData.map((product) => (
      <ProductCard
        {...product}
        key={product.id}
      />
    ))}
    {/* <ProductCard productData={productData}/> */}
    </>
  )
}

export default IndexPage