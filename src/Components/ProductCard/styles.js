import styled from 'styled-components'

export const Card = styled.div`
    max-width: 297.32px;
    height: 373px;
    left: 0.9px;
    top: 0px;
    margin: 25px 39px 50px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
    border-radius: 5px 5px 0px 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductImage = styled.img`
    height: 171.18px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
`
export const ProductDescription = styled.div`
    padding: 10px;
    width: 100%;

`
export const ProductSizeAndQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductTitle = styled.span`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    margin: 10px 0px 15px;
    width: 100%;
    display: flex;
    justify-content: center;

`

export const ProductSize = styled.span`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #8D8D8D;
    margin-right: 5px;
`

export const ProductSizeInput = styled.select`
    border: 2px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 25.2271px;

    width: 69.37px;
    height: 27.93px;
    outline: none;

    span{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #808080;
    }
    option {
        color: black;
        background: white !important;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
        margin-left: 10px;
    }
`
export const ProductQuantity = styled(ProductSize)`
    margin-left: 15px;
`
export const ProductQuantityInput = styled(ProductSizeInput)`
`

export const ProductPrice = styled.span`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
`

export const CardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: #6B8067;
    border-radius: 4.50483px;
    color: white;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    box-sizing: border-box;
`