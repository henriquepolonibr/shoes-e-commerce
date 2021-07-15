/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SearchProduct from '../../Components/SearchProduct';
import ProductCard from '../../Components/ProductCard';
import { UserContext } from '../../Contexts/filter';
import * as S from '../../Styles/styles';
import Header from '../../Components/Header';

const IndexPage = () => {
  const { filter } = useContext(UserContext);
  const [productData, setProductData] = useState([]);
  let productDataFilter = productData;
  let productFiltered = productData;
  if (filter.length > 0) {
    productFiltered = productData.filter((product) => product.description.includes(filter));
  } else {
    productDataFilter = productData.filter((product) => product.description.includes(filter));
  }

  useEffect(() => {
    axios.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((response) => setProductData(response.data.results));
  }, []);
  return (
    <S.ProductPage>
      <Header title="Sneakers" />
      <SearchProduct />
      <S.ProductsShowCase>
        {productFiltered.map((product) => (
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
