import styled from 'styled-components'

export const CheckoutPayment = styled.div`
    position: relative;
    margin-top: 15px;
    height: 244px;
    width: 100%;
    border-radius: 9px;
`

export const CheckoutTitle = styled.h2`
    font-family: Open Sans;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    @media(min-width:768px){
        font-size: 22px;
        line-height: 30px;
        padding: 40px 30px 0px 38px;
    }
`

export const CheckoutPaymentCard = styled.div`
    position: relative;
    margin-top: 15px;
    height: 244px;
    width: 100%;
    background: #F7F7F7;
    border-radius: 9px;
    padding: 20px;
    @media(min-width:768px){
        padding: 20px 30px 0px 38px;
    }
`
export const CheckoutPaymentItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    height: 60px;
    background: #FFFFFF;
    border-radius: 9.02222px;
    margin-bottom: 10px;

    &:active{
    border: 2px solid #63B55C;
  }
    @media(min-width:768px){
        &:hover{
            border: 2px solid #63B55C;
        }
    }
`
export const CheckoutPaymentItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    height: 100%;
    width: 100%;
    font-family: Open Sans;
    font-size: 13.5333px;
    line-height: 18px;
    color: #565656;
`
export const CheckoutPaymentItemDiscountLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px 0px 30px;
    width: 63px;
    height: 16px;
    background: #FFCC00;
    border-radius: 5px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 9.77px;
    line-height: 10px;
    text-align: center;
    color: #9E7D27;
`

export const CheckoutPaymentItemImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    max-height: 21px;
    max-width: 130px;
`

export const CheckoutButton = styled.button`
    height: 41px;
    width: 100%;
    margin-top: 20px;
    background: #6B8067;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    @media(min-width:768px){
        width: 300px;
        position: absolute;
        right: 30px;
    }
`