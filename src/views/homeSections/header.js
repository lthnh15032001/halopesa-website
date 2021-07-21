import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { Image } from '../../components/common/image'
import { Container } from "../../components/global"
import { LogoHalopesa } from "../../components/common/navigation/LogoHalopesa"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      greenSkew: file(sourceInstanceName: { eq: "product" }, name: { eq: "HeaderPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      appstore: file(sourceInstanceName: { eq: "product" }, name: { eq: "appstore" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ggplay: file(sourceInstanceName: { eq: "product" }, name: { eq: "ggplay" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex className="flex-md-row-reverse flex-column d-flex ">
          <HeaderTextGroup className="d-flex flex-column justify-content-center">
            <div className="d-md-block d-none">
              <LogoHalopesa styles={{
                marginBottom: "14px",
                width: "100%",
                justifyContent: "end",
              }}
              />
            </div>
            <div className="introduce">
              Introducing halopesa website
            </div>
            <h1 className="text1 ">
              Stay cool
            </h1>
            <h1 className="text1 ">
              stay convenient
            </h1>
            <h2>
              Welcome and Enjoy the digital payments transformation with HaloPesa.
            </h2>
            <div className="flex-row d-flex img-res">
              <Image display smWidth='142px' width="170px" fluid={data.appstore.childImageSharp.fluid} />
              <Image display smWidth='142px' width="170px" fluid={data.ggplay.childImageSharp.fluid} />
            </div>
          </HeaderTextGroup>
          <Image display width="680px" smWidth="360px" fluid={data.greenSkew.childImageSharp.fluid} />

        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 100px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 85px 0 0px 0;
  }
`


const HeaderTextGroup = styled.div`
  margin: 0;
  .introduce { 
    display: none
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    align-items: center;
    .img-res {
      justify-content: center
    }
   .introduce { 
        padding: 0 0 15px 0;
        text-align: center;
        color: #747474;
        font-size: 18px;
        font-weight: 500;
        display: block
    }
    .text1 { 
      font-size: 30px;
      line-height: 30px;
      font-weight: bold;
    }
    h2 { 
      text-align: center;
      color: #747474;
      padding-top: 13px;
    }
  }
  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    color: ${props => props.theme.color.primary};
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`
