import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components"
import { Image } from "../components/common/image"
import { navigate} from "gatsby"
export const CardServices = ({ fluid, text, style, className, name, imgWidth, vertical,smWidth, link }) => {
    return (
        <div style={style && style} className={className && className} onClick={() => {
            link !== "" ? navigate(link) : console.log("");
        }}>
            <Container className="border-0 shadow" vertical={vertical}>
                <CardBody>
                    <CardTitle tag="h5" className={`d-flex flex-${vertical ? "column" : "row"} justify-content-start align-items-center`}>
                        <div>
                            <Image display smWidth={`${smWidth ? smWidth : "70px"}`} width={`${imgWidth ? imgWidth : "35px"}`} fluid={fluid && fluid} />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <H5>{name && name}</H5>
                        </div>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{text && text}</CardSubtitle>
                </CardBody>
            </Container>
        </div>
    )
}

const H5 = styled.h5`
    color: #090909;
    font-size: 18px;
    font-weight: bold
`
const Container = styled(Card)`
    @media (min-width: ${props => props.theme.screen.lg}) {
        height:${props => props.vertical ? "310px" : "auto"}
    };
    @media (max-width: ${props => props.theme.screen.md}) {
        height: 300px
    };
    cursor: pointer
`