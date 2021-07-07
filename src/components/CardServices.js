import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components"
import Img from "gatsby-image"

export const CardServices = ({ fluid, text, style, className, name }) => {
    return (
        <div style={style && style} className={className && className}>
            <Card className="border-0 shadow-sm">
                <CardBody>
                    <CardTitle tag="h5" className="d-flex flex-row justify-content-start align-items-center">
                        <div>
                            <ImageWrapper>
                                <StyledImage width="35px" fluid={fluid && fluid} />
                                <br />
                            </ImageWrapper></div>
                        <div style={{ marginLeft: "20px" }}>
                            <H5>{name && name}</H5>
                        </div>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{text && text}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}


const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: ${props => props.width ? props.width : "250px"};
@media(max - width: ${props => props.theme.screen.md}) {
  width: ${props => props.width ? props.width : "230px"};
}
@media(max - width: ${props => props.theme.screen.sm}) {
  width: ${props => props.width ? props.width : "180px"};
  display: none;
}
`

const H5 = styled.h5`
    color: #090909;
    font-size: 18px;
    font-weight: bold
`