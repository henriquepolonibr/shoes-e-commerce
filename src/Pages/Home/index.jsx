/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchProduct from '../../Components/SearchProduct';
import ProductCard from '../../Components/ProductCard';
import * as S from '../../Styles/styles';

const IndexPage = () => {
  const [productData, setProductData] = useState([]);
  const productFilter = productData;

  useEffect(() => {
    axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((response) => setProductData(response.data.results));
  }, []);
  return (
    <S.ProductPage>
      <SearchProduct />
      <S.ProductsShowCase>
        {productFilter.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
          />
        ))}
      </S.ProductsShowCase>
    </S.ProductPage>
  );
};

export default IndexPage;
