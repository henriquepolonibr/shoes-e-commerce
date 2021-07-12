import styled from 'styled-components';

export const CheckoutCardMobile = styled.div`
    position: relative;
    margin-top: 15px;
    height: 166px;
    width: 100%;
    background: #F7F7F7;
    border-radius: 9px;
    @media(min-width:768px){
        display: none;
    }
`;

export const CardTitle = styled.h2`
    position: relative;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 154.6%;
    color: #000000;
    padding: 10px 20px 10px;
`;

export const ProductImage = styled.img`
    height: 92px;
    width: 92px;
    margin: 5px 30px 0px 20px;
    background: #F7F7F7;
    border-radius: 9px;
`;

export const ProductInfo = styled.div`
    position: absolute;
    left: 135px;
    top: 50px;
    padding-top: 20px;
`;

export const ProductTitle = styled.span`
    font-family: Open Sans;
    font-size: 18px;
    line-height: 16px;
    color: #000000;
`;

export const ProductDescription = styled.div`
    margin: 10px 0px 15px;
    font-family: Arial;
    font-size: 14.4356px;
    line-height: 21px;
    color: #A5A5A5;
`;
