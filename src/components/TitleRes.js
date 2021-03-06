import React from 'react'
import styled from "styled-components"

export const TitleRes = ({ name, des, className }) => {
    return (
        <Container className={`row text-center ${className && className}`}>
            <h1 className="text1">{name}</h1>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="des">
                    {des}
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .des {
        width: 60%;
    }
    .text1 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
        }
    @media (max-width: ${props => props.theme.screen.xs}) {
        .des {
            width: 100%;
            font-size: 16px;
            font-weight: normal;
            color: #7A7A7A;
        }
    }
    @media (max-width: ${props => props.theme.screen.md}) {
        .des {
        width: 100%;
        color: #7A7A7A;
        }
    }
    @media (min-width: ${props => props.theme.screen.lg}) {
        .des {
        width: 60%;
    }
    }
`