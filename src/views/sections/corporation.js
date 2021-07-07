import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Button } from '../../components/Button'
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
                <Flex className="flex-row">
                    <div>
                        <ImageWrapper>
                            <StyledImage fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />
                            <br />
                        </ImageWrapper>
                    </div>
                    <div>
                        <LogoHalopesa style={{ justifyContent: "start!important" }} />
                        <h2>For Corporation</h2>
                        <div style={{ color: "#7A7A7A" }}>
                            HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.
                        </div>
                        <Button name="Read more" className="mt-4" />
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


const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: ${props => props.width ? props.width : "500px"};
@media(max - width: ${props => props.theme.screen.md}) {
  width: ${props => props.width ? props.width : "500px"};
}
@media(max - width: ${props => props.theme.screen.sm}) {
  width: ${props => props.width ? props.width : "180px"};
  display: none;
}
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
`