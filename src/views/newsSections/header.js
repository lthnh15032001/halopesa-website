import React from 'react'
import { Container } from "../../components/global"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
const Header = () => {
    const img = useStaticQuery(graphql`
    query {
        bg: file(sourceInstanceName: { eq: "product" }, name: { eq: "newHeaders" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return (
        <BackgroundImageContainer fluid={img.bg.childImageSharp.fluid}>
            <HeaderWrapper>
                <h1 className="text">NEWS AND PROMOTIONS</h1>
                <div>Home/News and Promotions</div>
            </HeaderWrapper>
        </BackgroundImageContainer>
    )
}
export default Header


const BackgroundImageContainer = styled(BackgroundImage)`
  height: 400px;
  min-width: 100%;
  margin-top: 82px;

`
const HeaderWrapper = styled(Container)`
  padding: 140px 0 80px 0;
  position: relative;
  height: 100px;
  width: 100%;
  @media (max-width: ${props => props.theme.screen.xs}) {
    .text { 
      font-size: 30px;
      line-height: 30px;
      font-weight: bold;
    }
  }
  h1 {
    color:  #F26522;
  }
  div {
    color: white;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
