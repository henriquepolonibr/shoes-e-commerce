import styled from 'styled-components';

export const ProductPage = styled.div`
    background-color: #FFFFFF;
`;

export const ProductsShowCase = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`;

export const CheckoutPage = styled.div`
    margin: 15px 14px 55px;

    h1{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #000000;
    }

    @media(min-width: 768px){
        h1{
            display: none;
        }
    }
`;

export const CheckoutPaymentMobileStyle = styled.div`
    @media(min-width:768px){
        display: none;
    }
`;
