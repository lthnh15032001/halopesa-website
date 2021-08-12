import React from 'react'
import { Container } from "../../components/global"
import styled from "styled-components"
// import { Image } from "../../../components/common/image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
const Header = () => {
  const img = useStaticQuery(graphql`
    query {
        bg: file(sourceInstanceName: { eq: "product" }, name: { eq: "backgroundservices" }) {
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
        <h1>Halopesa For You</h1>
        <div>Home/Halopesa For You</div>
      </HeaderWrapper>
    </BackgroundImageContainer>
  )
}
export default Header


const BackgroundImageContainer = styled(BackgroundImage)`
  height: 400px;
  min-width: 100%;
  margin-top: 82px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 180px;
  }
`
const HeaderWrapper = styled(Container)`
  padding: 140px 0 80px 0;
  position: relative;
  height: 100px;
  width: 100%;
  h1 {
    color:  #F26522;
  }
  div {
    color: white;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 50px 0 80px 30px;
    h1 {
      font-size: 30px;
      line-height: 30px;
      font-weight: bold;
    }

  }
`
