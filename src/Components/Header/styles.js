import styled from 'styled-components'

export const Header = styled.div`
    height: 100px;
    width: 100%;
    color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 768px){
        background-color: #F1F1F1;
    }
`

export const HeaderButton = styled.button`
    position: relative;
    height: 34.81px;
    width: 115.29px;
    border-radius: 17.4025px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 21.7531px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EAEAEA;
    padding-left: 20px;
    border-width: 0px;

    svg{
        position: absolute;
        left: 12px;
        font-size: 18px;
        font-weight: 300;
    }
`

export const HeaderTitle = styled.span`
    display: none;
    @media (min-width: 768px){
    display: block;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 26.1038px;
    line-height: 30px;
    text-align: center;
    }
`

export const PictureAvatar = styled.div`
    height: 34.81px;
    width: 34.81px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`