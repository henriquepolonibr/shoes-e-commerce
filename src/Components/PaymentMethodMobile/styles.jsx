import styled from 'styled-components';

export const PaymentCardMobile = styled.div`
position: relative;
    margin-top: 15px;
    height: 243px;
    width: 100%;
    background: #F7F7F7;
    border-radius: 9px;
    @media(min-width:768px){
        display: none;
    }
`;

export const PaymentTitle = styled.h2`
    font-family: Open Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 154.6%;
    padding: 25px 0px 9px 22px;
`;

export const PaymentImage = styled.img`
    height: 47px;
    width: 47px;
    margin: 0px 12px 0px 22px;
`;

export const PaymentDescription = styled.span`
    font-family: Open Sans;
    font-size: 17px;
    line-height: 20px;
`;

export const PaymentImageBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 27px;
`;

export const PaymentBlockMargin = styled.div`
    border: 1px solid #D6D6D6;
    margin: 0px 25px 32px;
`;

export const PaymentTotalCost = styled.div`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 20px;
    margin: 0px 0px 5px 25px;
`;

export const PaymentDeliveryTitle = styled.div`
    font-family: Arial;
    font-size: 16px;
    line-height: 20px;
    color: #A5A5A5;
    margin: 0px 0px 5px 25px;
`;

export const PaymentPrice = styled.div`
    position: absolute;
    bottom: 22px;
    right: 28px;
    font-family: Arial;
    font-family: Trustly Sans;
    font-weight: bold;
    font-size: 50.5px;
    line-height: 44px;
    margin: 0px 0px 5px 25px;
`;

export const PaymentButton = styled.div`
    margin-top: 54px;
    width: 100%;
    background: #6B8067;
    font-family: Open Sans;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;
    padding: 11px 0px;

    border-radius: 3px;
`;
