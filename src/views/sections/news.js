import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import { Button } from '../../components/Button'
import { graphql, useStaticQuery } from "gatsby"

const News = () => {
    const img = useStaticQuery(graphql`
    query {
        img1: file(sourceInstanceName: { eq: "product" }, name: { eq: "img1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(sourceInstanceName: { eq: "product" }, name: { eq: "img2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img3: file(sourceInstanceName: { eq: "product" }, name: { eq: "img3" }) {
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
                <Flex className="d-flex align-items-center">
                    <h1>News and <br /> Promotions</h1>
                    <Button name="Read more" />
                </Flex>
                <Flex className="d-flex align-items-center">
                    <div>1</div>
                    <div>23</div>
                    <div>456</div>
                </Flex>
            </StyledContainer>
        </StyledSection>
    )
}

export default News
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
`