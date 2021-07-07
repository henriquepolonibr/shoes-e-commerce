import styled from 'styled-components'

export const CheckoutCardDesktop = styled.div`
    display: none;
    @media(min-width: 768px){
        display: flex;
        justify-content: center;
    }
`
export const ProductImage = styled.img`
    max-height: 633px;
    max-width: 45%;
    margin: 20px 38px 0px 45px;
    border-radius: 18px;
`

export const ProductInfo = styled.div`
    position: relative;
    height: 633px;
    width: 55%;
    margin: 20px 45px 0px 0px;
    background-color: #F7F7F7;
    border-radius: 18px;
`
export const CartTotal = styled.h2`
    font-family: Open Sans;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin: 30px 0px 19px 38px;
`

export const ProductTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin: 0px 0px 6px 45px;
`

export const ProductDescription = styled.div`
    margin: 10px 0px 15px;
    font-family: Arial;
    font-size: 16px;
    line-height: 25px;
    color: #A5A5A5;
    margin-left: 45px;
`

export const DeliveryDetail = styled.div`
    position: absolute;
    top: 29px;
    right: 80px;
`

export const DeliveryDetailTitle = styled.span`
    font-family: Open Sans;
    font-size: 20px;
    line-height: 154.6%;
    color: #000000;
    margin-bottom: 13px;
`
export const DeliveryDetailDescription = styled.div`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 153.3%;
    letter-spacing: 0.612903px;
    color: #979797;
    margin-bottom: 13px;
`

export const TotalCostTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`

export const DeliveryIncludedTitle = styled(TotalCostTitle)`
    color: #A5A5A5;
`
export const CostPrice = styled.div`
    position: absolute;
    bottom: 0px;
    right: -45px;
    font-family: Trustly Sans;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    color: #000000;
`