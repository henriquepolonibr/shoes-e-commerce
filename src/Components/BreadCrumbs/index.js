import React from 'react'
import * as S from './styles'

const BreadCrumb = () =>{
    return(
        <S.BreadCrumb>
            <S.BreadCrumbLine>
                <S.BreadCrumbDotLeft />
                <S.BreadCrumbDotMiddle />
                <S.BreadCrumbDotRight inputColor="#E8E8E8" />
            </S.BreadCrumbLine>
            <S.BreadCrumbTextDiv>
                <S.BreadCrumbText>
                    Cart
                </S.BreadCrumbText>
                <S.BreadCrumbText>
                    Payment options
                </S.BreadCrumbText>
                <S.BreadCrumbText>
                    Receipt
                </S.BreadCrumbText>
            </S.BreadCrumbTextDiv>
        </S.BreadCrumb>
    )
}

export default BreadCrumb