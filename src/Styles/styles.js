import styled from 'styled-components'

export const ProductPage = styled.div`
    background-color: #FFFFFF;
`

export const ProductsShowCase = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`