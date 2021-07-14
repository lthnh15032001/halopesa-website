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
        <Flex className="flex-row-reverse d-flex ">
          <HeaderTextGroup className="d-flex flex-column justify-content-center">
            <LogoHalopesa styles={{
              marginBottom: 0,
              width: "100%",
              justifyContent: "end"
            }}
            />
            <h1>
              Stay cool
              <br />
              stay convenient
            </h1>
            <h2>
              Welcome and Enjoy the digital payments transformation with HaloPesa.
            </h2>
            <div className="flex-row d-flex">
              <Image width="170px" fluid={data.appstore.childImageSharp.fluid} />
              <Image width="170px" fluid={data.ggplay.childImageSharp.fluid} />
            </div>
          </HeaderTextGroup>
          <Image style={{ marginRight: "40px" }} width="680px" fluid={data.greenSkew.childImageSharp.fluid} />
         
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
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`


const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
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
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
