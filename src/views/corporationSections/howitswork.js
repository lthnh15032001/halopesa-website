import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from "../../components/global"
import { Image } from "../../components/common/image"
import { graphql, useStaticQuery } from "gatsby"
// import {
//     CardSubtitle
// } from 'reactstrap';
import { TitleRes } from '../../components/TitleRes'
const HowItsWork = () => {
    const [active, setActive] = useState(0)
    const tabs = [
        { name: "C2B" },
        { name: "B2C" },
        { name: "KYC" },
        { name: "LIPA HAPA" }
    ]
    const tabsContent = () => {

        return active === 0 ?
            <>
                <div className="text" styke={{ fontWeight: 900 }}>HaloPesa Collections  (C2B)</div>
                <div className="mt-3 mb-3 ">
                    <div>
                        No more hustling, open a C2B account with HaloPesa and collect funds from customers on regular basis, with affordable prices, quick and fast
                        Email us at <a href="mailto:halopesa@halotel.co.tz">halopesa@halotel.co.tz</a>
                    </div>
                </div>
            </> : active === 1 ?
                <>
                    <div className="text" styke={{ fontWeight: 900 }}>HaloPesa Disbursements (B2C) </div>
                    <div className="mt-3 mb-3 ">
                        <div>
                            We are determined to make it simple for you, open a HaloPesa B2C account to disburse funds to multiple customers that you have across various networks by just a click of a button, fast, safely and secured.
                            Email us at <a href="mailto:halopesa@halotel.co.tz">halopesa@halotel.co.tz</a>
                        </div>
                    </div>
                </>: active ===2 ?
                  <>
                    <div className="text" styke={{ fontWeight: 900 }}>General KYC requirements for HaloPesa Corporates</div>
                    <div className="mt-3 mb-3 ">
                        <div>
                            <ul>
                                <li>HaloPesa Business (C2B/B2C) Application form</li>
                                <li>Business License</li>
                                <li>TIN Certificate</li>
                                <li>Certificate of incorporation</li>
                            </ul>
                            These above KYC requirements must be original or certified copies. 
                        </div>
                    </div>
                </> : 
                <>
                <div className="text" styke={{ fontWeight: 900 }}>HaloPesa LIPA HAPA</div>
                <div className="mt-3 mb-3 ">
                    <div>Are you a merchant? As we are all aspiring for a Cash-lite economy in the promotion of financial inclusion, HaloPesa Lipa Hapa allows you customers to pay for various services and products with any mobile money account in Tanzania to your Lipa Hapa number
                    </div>
                    Open your number now for free, Email us at <a href="mailto:halopesa@halotel.co.tz">halopesa@halotel.co.tz</a>
                </div>
            </>
    }
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
                des=""
            />
            <div className="text-center d-none d-md-block">
                <h1>How does it work?</h1>
                {/* <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-3">
                    <div style={{ width: '60%', color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div> */}
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
                                    marginLeft: i === 1 || i === 3 ? "50px" : 0
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
                    {tabsContent()}
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
