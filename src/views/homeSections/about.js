import React from "react"
import styled from "styled-components"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Section, Container } from "../../components/global"
// import Img from "gatsby-image"
import { Button } from "../../components/Button"
import { Image } from "../../components/common/image"
const About = () => {
  const aboutBrief = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "aboutBrief" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section>
      <StyledContainer>
        <Flex gap="0px" col={1} className="flex-lg-row-reverse flex-md-column-reverse flex-column-reverse d-flex ">
          <div>
            <Image display className="d-block d-md-flex d-lg-block align-items-center justify-content-center mb-0 mb-md-5 mb-lg-0" smWidth="340px" fluid={aboutBrief.file.childImageSharp.fluid} width="480px" />
            <Flex col={1} className="d-flex d-md-none flex-column-reverse justify-content-center align-items-center" style={{ marginTop: 20 }}>
              <Button className="" name="Read more" />
              <div className="d-flex align-items-center pb-3" >
                <a href="/" style={{ fontWeight: 'bold' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/blog/how-to-send')
                  }}
                >How to use</a>
              </div>
            </Flex>
          </div>
          <div className="p-md-5 p-xs-2 d-block d-md-flex d-lg-block align-items-center flex-md-column">
            <h1 className="text1">About Halopesa</h1>
            <Small>Your mobile phone is more than just a means of communication it is also your virtual wallet. HALOPESA is a mobile money service brought to you by Halotel and it allows our customers to receive and send money quickly, safely, affordably and conveniently 24/7. 
            <br />HaloPesa has variety of products and services that will enable our customers to reach their daily needs. HaloPesa is determined to reach every individual and cooperate in the society. HaloPesa Together for the better.
</Small>
            <Flex col={2} className="flex-row flex-md-column flex-lg-row" style={{ marginBottom: 20, padding: 20 }}>
              <Number>
                <div className="number">1,000,000+</div>
                <div className="des">Transactions</div>
              </Number>
              <Number>
                <div className="number">500+</div>
                <div className="des">Customers</div>
              </Number>
            </Flex>
            <Flex col={2} className="d-none d-md-grid" style={{ marginTop: 30 }}>
              <Button onClick={() => navigate("/about")} className="" name="Read more" />
              <div className="d-flex align-items-center " >
                <a href="/" style={{ fontWeight: 'bold' }}   onClick={(e) => {
                    e.preventDefault();
                    navigate('/blog/how-to-send')
                  }}> How to use</a>
              </div>
            </Flex>
          </div>
        </Flex>
      </StyledContainer>
    </Section>
  )
}

export default About

const StyledContainer = styled(Container)``

const Small = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: #7A7A7A;
  padding-right:40px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.xs}) {
    padding-right: 0px;
  }
  @media (min-width: ${props => props.theme.screen.lg}) {
    text-align: left
  }
`
const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  @media (min-width: ${props => props.theme.screen.xs}) {
    .text1 {
      margin-bottom: 25px
    }
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    ${'' /* grid-template-columns: repeat(1,1fr); */}
    margin-top:0px!important;
    grid-gap: ${props => props.gap ? props.gap: "64px"};
    .text1 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
        }
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 2fr;
    grid-gap: 0px;
    display: flex;
    justify-content: space-between;
    .text1 {
      font-size: 30px;
      line-height: 30px;
      font-weight: bold;
      text-align:center;
    }
  }
  
`

const Number = styled.div`
  .number {
    font-weight: bold;
    font-size: 40.3929px;
    letter-spacing: -1.59256px;
    color: #F36000;
    margin-top: 30px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      margin-top: 10px;
      font-size: 32.3929px;
    }
    @media (max-width: ${props => props.theme.screen.md}) {
      margin-top: 0px;
  }
  }
  .des {
    font-size: 20.8977px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 17.8977px;
    }
  }
`