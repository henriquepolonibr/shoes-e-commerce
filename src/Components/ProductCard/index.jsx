/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const ProductCard = (params) => {
  return (
    <S.Card>
      <S.ProductImage src={params.thumbnailURL} />
      <S.ProductDescription>
        <S.ProductTitle>{params.description}</S.ProductTitle>
        <S.ProductSizeAndQuantity>
          <S.ProductSize>Size</S.ProductSize>
          <S.ProductSizeInput>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </S.ProductSizeInput>
          <S.ProductQuantity>Quantity</S.ProductQuantity>
          <S.ProductQuantityInput>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </S.ProductQuantityInput>
        </S.ProductSizeAndQuantity>
        <S.ProductPrice>
          $
          {params.price}
        </S.ProductPrice>
        <Link to={`/checkout/${params.id}`}><S.CardButton>Add to cart</S.CardButton></Link>
      </S.ProductDescription>
    </S.Card>
  );
};

export default ProductCard;
