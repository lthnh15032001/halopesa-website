import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
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
    <Section id="features">
      <StyledContainer>
        <Flex className="flex-row-reverse d-flex ">
          <div>
            <Image fluid={aboutBrief.file.childImageSharp.fluid} width="480px" />
          </div>
          <div className="p-5">
            <h1 style={{ marginBottom: 25 }}>About Halopesa</h1>
            <Small>The HaloPesa App brings to our customers one of its kind and the best user experience with  bundles of services including Send Money , withdraw , Pay for goods & Services,  Personal Savings, Transfers to Bank accounts etc.</Small>
            <div className="row ">
              <Number className="col-6">
                <div className="number">1,000,000+</div>
                <div className="des">Transactions</div>
              </Number>
              <Number className="col-6">
                <div className="number">500+</div>
                <div className="des">Customers</div>
              </Number>
            </div>
            <div className="row" style={{ marginTop: 30 }}>
              <Button className="col-6" name="Read more" />
              <div className="col-6 d-flex justify-content-center align-items-center " >
                <a href="/" style={{ fontWeight: 'bold' }}> How to use</a>
              </div>
            </div>
          </div>
        </Flex>
      </StyledContainer>
    </Section>
  )
}

export default About

const StyledContainer = styled(Container)``

const Small = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #7A7A7A;
  padding-right:40px
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

const Number = styled.div`
  .number {
    font-weight: bold;
    font-size: 40.3929px;
    letter-spacing: -1.59256px;
    color: #F36000;
    margin-top: 30px
  }
  .des {
    font-size: 20.8977px;
  }
`