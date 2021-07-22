import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'
const ImgDescription = () => {
    const img = useStaticQuery(graphql`
    query {
        aboutimg1: file(sourceInstanceName: { eq: "product" }, name: { eq: "aboutimg1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aboutimg2: file(sourceInstanceName: { eq: "product" }, name: { eq: "aboutimg2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aboutimg3: file(sourceInstanceName: { eq: "product" }, name: { eq: "aboutimg3" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aboutimg4:file(sourceInstanceName: { eq: "product" }, name: { eq: "aboutimg4" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return (
        <>
            {/* <Flex col={4} gap="0px" >
                <Image fluid={img.aboutimg1.childImageSharp.fluid} width="500px"/>
                <Image fluid={img.aboutimg2.childImageSharp.fluid} width="500px"/>
                <Image fluid={img.aboutimg3.childImageSharp.fluid} width="500px"/>
                <Image fluid={img.aboutimg4.childImageSharp.fluid} width="500px"/>
            </Flex> */}
            <div className="row">
            <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <Image display smWidth="340px" fluid={img.aboutimg1.childImageSharp.fluid} width="500px"/>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <Image display smWidth="340px" fluid={img.aboutimg2.childImageSharp.fluid} width="500px"/>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <Image display smWidth="340px" fluid={img.aboutimg3.childImageSharp.fluid} width="500px"/>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <Image display smWidth="340px" fluid={img.aboutimg4.childImageSharp.fluid} width="500px"/>
              </div>
              
            </div>
            <SectionStyled>
                <Container>
                    <Flex col={4}>
                        <Number>
                            <div className="number">1,000,000 +</div>
                            <div className="des">Transactions</div>
                        </Number>
                        <Number className="text-center">
                            <div className="number">500 +</div>
                            <div className="des">Customers</div>
                        </Number>
                        <Number>
                            <div className="number">1,000,000 +</div>
                            <div className="des">Agents</div>
                        </Number>
                        <Number className="text-center">
                            <div className="number">500 +</div>
                            <div className="des">Customers</div>
                        </Number>
                    </Flex>
                </Container>
            </SectionStyled>
        </>
    )
}
export default ImgDescription

const SectionStyled = styled(Section)`
    padding-top: 0px;
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
  }
  .des {
    font-size: 20.8977px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 17.8977px;
    }
  }
`
const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: ${props => props.gap ? props.gap : "30px"};
    justify-content: start;

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`