import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'; 

const ProductCard = (params) =>{
    return(
        <S.Card>
            <S.ProductImage src={params.thumbnailURL}></S.ProductImage>
            <S.ProductTitle>{params.description}</S.ProductTitle>
            <div>
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
            </div>
            <S.ProductPrice>$ {params.price}</S.ProductPrice>
            <Link to={`/product/${params.id}`}><S.CardButton>Add to cart</S.CardButton></Link>
        </S.Card>
    )
}

export default ProductCard