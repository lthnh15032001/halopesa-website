import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components"
import { Image } from "../components/common/image"
export const CardServices = ({ fluid, text, style, className, name, imgWidth }) => {
    return (
        <div style={style && style} className={className && className}>
            <Card className="border-0 shadow-sm">
                <CardBody>
                    <CardTitle tag="h5" className="d-flex flex-row justify-content-start align-items-center">
                        <div>
                            <Image width={`${imgWidth ? imgWidth : "35px"}`} fluid={fluid && fluid} />
                        </div>
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

const H5 = styled.h5`
    color: #090909;
    font-size: 18px;
    font-weight: bold
`