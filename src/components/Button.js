import React from 'react'
import styled from "styled-components"

export const Button = ({name, className}) => {
    return (
        <ButtonStyle className={`${className && className} shadow`} >
            <div>{name && name}</div>
        </ButtonStyle>
    )
}


const ButtonStyle = styled.div`
  background: linear-gradient(116.89deg, #F36000 33.17%, #FFB800 98.72%);
  box-shadow: 10.47px 11.09px 22.19px rgba(255, 153, 0, 0.3);
  border-radius: 8px;
  width: 180.12px;
  height: 49.82px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  div {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20.2057px
  }
`