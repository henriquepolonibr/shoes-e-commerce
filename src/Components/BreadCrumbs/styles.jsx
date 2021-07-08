import styled from 'styled-components';

export const BreadCrumb = styled.div`
    display: none;
    @media(min-width: 768px){
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 66px 0px 40px;
    }
`;

export const BreadCrumbLine = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-top: 1px solid #E8E8E8;
`;

export const BreadCrumbTextDiv = styled.div`
    margin-top: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 82%;
`;

export const BreadCrumbText = styled.span`
    font-family: Arial;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

export const BreadCrumbDotLeft = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.inputColor || '#61CB46'};
    top: -7px;
    position: inherit;
`;

export const BreadCrumbDotMiddle = styled(BreadCrumbDotLeft)`
    height: 15px;
`;

export const BreadCrumbDotRight = styled(BreadCrumbDotLeft)`
    height: 15px;
`;
