import styled from 'styled-components';

export const CheckoutCardMobile = styled.div`
    position: relative;
    margin-top: 15px;
    height: 244px;
    width: 100%;
    background: #F7F7F7;
    border-radius: 9px;
    @media(min-width:768px){
        display: none;
    }
`;
export const ProductImage = styled.img`
    position: absolute;
    top: 0px;
    height: 106px;
    width: 92px;
    margin: 20px 30px 0px 10px;
    background: #F7F7F7;
    border-radius: 9px;
`;

export const ProductInfo = styled.div`
    position: absolute;
    left: 135px;
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

export const DeliveryDetailTitle = styled.span`
    font-family: Arial;
    font-size: 13.16px;
    line-height: 18px;
    letter-spacing: 0.612903px;
    color: #212121;
`;
export const DeliveryDetailDescription = styled.div`
    font-family: Arial;
    font-size: 13.16px;
    line-height: 18px;
    letter-spacing: 0.612903px;
    color: #A5A5A5;
`;
export const Total = styled.div`
    position: absolute;
    bottom: 20px;
    margin-left: 10px;
`;

export const TotalCostTitle = styled.span`
    font-family: Open Sans;
    font-size: 13.5333px;
    color: #000000;
`;

export const DeliveryIncludedTitle = styled(TotalCostTitle)`
    line-height: 20px;
    color: #A5A5A5;
`;
export const CostPrice = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-family: Trustly Sans;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    color: #000000;
`;
