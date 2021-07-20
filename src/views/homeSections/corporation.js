import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
// import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Image } from '../../components/common/image'
import { Button } from '../../components/Button'
import {
  isMobile
} from "react-device-detect";
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
        <Flex className="flex-row-md">
          <div>
            {!isMobile && <Image display smWidth="340px" fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />}
          </div>
          <div className="d-sm-flex d-md-block justify-content-center align-items-center flex-column">
            {!isMobile && <LogoHalopesa style={{ justifyContent: "start!important" }} />}
            {isMobile && <TitleRes
              className="mb-3"
              name="For Corporation"
              des="HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.    "
            />}
            {!isMobile &&
              <>
                <h2>For Corporation</h2>
                <div style={{ color: "#7A7A7A" }}>
                  HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.
            </div> </>}
            {isMobile && <Image display smWidth="340px" fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />}
            <div className="text-center d-flex justify-content-center align-items-centerr">
              <Button name="Read more" className="mt-md-4 " />
            </div>
          </div>
        </Flex>
      </StyledContainer>
    </StyledSection>
  )
}
export default Corporation
const StyledContainer = styled(Container)``

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