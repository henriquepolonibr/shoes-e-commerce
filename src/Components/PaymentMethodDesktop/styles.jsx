import styled from 'styled-components';

export const CheckoutCardDesktop = styled.div`
    display: none;
    @media(min-width: 768px){
        display: flex;
        justify-content: center;
    }
`;
export const ProductImage = styled.img`
    max-height: 633px;
    max-width: 45%;
    margin: 20px 38px 0px 45px;
    border-radius: 18px;
`;

export const ProductInfo = styled.div`
    position: relative;
    height: 633px;
    width: 55%;
    margin: 20px 45px 20px 0px;
    background-color: #F7F7F7;
    border-radius: 18px;
`;
export const ProductDescriptionFlex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media(max-width: 1200px){
        flex-direction: column;
    }
`;
export const CartTotal = styled.h2`
    font-family: Open Sans;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    margin: 30px 0px 19px 50px;
`;

export const ProductTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin: 0px 0px 6px 50px;
`;

export const ProductDescription = styled.div`
    margin: 10px 0px 15px;
    font-family: Arial;
    font-size: 16px;
    line-height: 25px;
    color: #A5A5A5;
    margin-left: 50px;
`;

export const PaymentTitle = styled.div`
    font-family: Open Sans;
    font-size: 19.6129px;
    line-height: 154.6%;
    margin: 30px 180px 0px 0px;
    @media(max-width: 1200px){
        margin: 50px 0px 0px 50px;
    }
`;
export const PaymentImageBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px 27px;
    @media(max-width: 1200px){
        margin: 0px 0px 0px 50px;
    }
`;

export const PaymentImage = styled.img`
    height: 47px;
    width: 47px;
    margin: 0px 9px 0px -10px;
`;

export const PaymentDescription = styled.div`
    font-family: Open Sans;
    font-size: 17px;
    line-height: 20px;
`;

export const DeliveryDetail = styled.div`
    margin: 70px 80px 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DeliveryDetailTitle = styled.span`
    font-family: Open Sans;
    font-size: 20px;
    line-height: 154.6%;
    color: #000000;
    margin-bottom: 13px;
`;
export const DeliveryDetailDescription = styled.div`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 153.3%;
    letter-spacing: 0.612903px;
    color: #979797;
    margin-bottom: 13px;
`;

export const TotalCostTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

export const DeliveryIncludedTitle = styled(TotalCostTitle)`
    color: #A5A5A5;
`;
export const CostPrice = styled.div`
    font-family: Trustly Sans;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    color: #000000;
    margin: 0px 10px;
`;

export const PaymentButton = styled.button`
    width: 302px;
    height: 41px;
    background: #6B8067;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Open Sans;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
`;
