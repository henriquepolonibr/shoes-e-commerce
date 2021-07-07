import React from 'react';
import * as S from './styles'
import CheckoutPayment from '../CheckoutPayment'

const CheckoutCardDesktop = (params) => {
        return(
        <div>
            <S.CheckoutCardDesktop>
                <S.ProductImage src={params.maxresURL}></S.ProductImage>
                <S.ProductInfo>
                    <S.CartTotal>Cart total</S.CartTotal>
                    <S.ProductTitle>{params.description}</S.ProductTitle>
                    <S.ProductDescription>
                        x 1, {params.color}, Size 41 <br />
                        Item #{params.id}
                    </S.ProductDescription>
                    <S.DeliveryDetail>
                        <S.DeliveryDetailTitle>Delivery Details</S.DeliveryDetailTitle>
                        <S.DeliveryDetailDescription>John Smith <br />Phone no: 01312428200 <br />Address: Redwood City, 2000.</S.DeliveryDetailDescription>
                        <S.TotalCostTitle>Total cost</S.TotalCostTitle>
                        <S.DeliveryIncludedTitle><br />Delivery included</S.DeliveryIncludedTitle>
                        <S.CostPrice>${params.price}</S.CostPrice>
                    </S.DeliveryDetail>
                    <CheckoutPayment />
                </S.ProductInfo>
            </S.CheckoutCardDesktop>
        </div>
    )
}

export default CheckoutCardDesktop
