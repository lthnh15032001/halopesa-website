import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
// import Img from "gatsby-image"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Image } from '../../components/common/image'
import { Button } from '../../components/Button'

import { TitleRes } from '../../components/TitleRes'
const Corporation = () => {
  const corporationbrief = useStaticQuery(graphql`
    query {
        corporationbrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "corporation" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <StyledContainer>
        <TitleRes
          className="mb-3 d-md-none d-block"
          name="For Corporation"
          des="HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.    "
        />
        <Flex className="flex-row-md">
          <div className="d-lg-block d-md-none d-none">
            <Image display smWidth="340px" fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />
          </div>
          <div className="d-flex d-md-flex d-lg-block justify-content-center align-items-center flex-column">
            <LogoHalopesa className="d-md-flex d-none" style={{ justifyContent: "start!important" }} />
            <div className="d-md-flex d-lg-block flex-column d-none align-items-center">
              <h2>For Corporation</h2>
              <div className="text-des" style={{ color: "#7A7A7A" }}>
                HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.
                </div>
            </div>
            <Image className=" mt-0 mt-md-4 mt-lg-0 d-md-block d-lg-none d-block" display smWidth="340px" fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />
            <div className="d-flex d-md-block justify-content-center align-items-center">
              <Button name="Read more" className="mt-md-4 " onClick={() => {
                navigate("/corporation")
              }} />
            </div>
          </div>
        </Flex>
      </StyledContainer>
    </StyledSection>
  )
}
export default Corporation
const StyledContainer = styled(Container)`
  
    @media (max-width: ${props => props.theme.screen.md}) {
      .text-des { 
        text-align:center
      }
      h2 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
        }
  }
`

const StyledSection = styled(Section)`
`
const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`