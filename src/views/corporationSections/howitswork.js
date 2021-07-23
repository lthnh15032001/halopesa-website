import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from "../../components/global"
import { Image } from "../../components/common/image"
import { graphql, useStaticQuery } from "gatsby"
import {
    CardSubtitle
} from 'reactstrap';
import { TitleRes } from '../../components/TitleRes'
const HowItsWork = () => {
    const [active, setActive] = useState(0)
    const tabs = [
        { name: "C2C" },
        { name: "B2C" },
        { name: "KYC" }
    ]

    const img = useStaticQuery(graphql`
    query {
        img: file(sourceInstanceName: { eq: "product" }, name: { eq: "customerbusiness" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
        }
        pdf: file(sourceInstanceName: { eq: "product" }, name: { eq: "pdf" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

    }
  `)
    return (
        <ContainerStyled>
            <TitleRes
                className="d-block d-md-none"
                name="How does it work?"
                des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <div className="text-center d-none d-md-block">
                <h1>How does it work?</h1>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-3">
                    <div style={{ width: '60%', color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center mt-md-5 mb-md-5 mt-4 mb-0">
                <ul className="nav nav-pills mb-3" id="pills-tab">
                    {tabs.map((x, i) => {
                        return (
                            <li key={i.toString()} className="nav-item">
                                <button onClick={() => {
                                    setActive(i)
                                }} className={`nav-link ${i === active ? "active" : ""} ${i !== active ? "text-dark" : "text-white"}`} style={{
                                    marginRight: i === 1 ? "50px" : 0,
                                    marginLeft: i === 1 ? "50px" : 0
                                }} >{x.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Flex className="d-flex d-md-grid flex-column" col={2}>
                <div>
                    <Image display smWidth="345px" fluid={img.img.childImageSharp.fluid} />
                </div>
                <div>
                    <div className="text" styke={{ fontWeight: 900 }}>Customer to Business</div>
                    <div className="mt-3 mb-3 ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                       </div>
                    <div className="d-flex justify-content-start align-items-center shadow p-2 rounded">
                        <div className="m-3 mb-0">
                            <Image display smWidth="40px" fluid={img.pdf.childImageSharp.fluid} width="60px" />
                        </div>
                        <CardSubtitle tag="h6" className="text-muted" >Lorem ipsum dolor sit amet, consectetur.pdf</CardSubtitle>
                    </div>
                </div>
            </Flex>
        </ContainerStyled>
    )
}

export default HowItsWork
const ContainerStyled = styled(Container)`
    .active {
        border-radius: 23px;
        background: #FF6E2C!important;
        color: white;
        font-weight: bold
    }
    .text { 
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
    }
`


const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: 30px;
    justify-content: start;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
    }
`
