import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Button } from '../../components/Button'
import BackgroundImage from 'gatsby-background-image'
import { Image } from '../../components/common/image'
const Testimotional = () => {
    const img = useStaticQuery(graphql`
    query {
        bg: file(sourceInstanceName: { eq: "product" }, name: { eq: "Union" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      avatar: file(sourceInstanceName: { eq: "product" }, name: { eq: "avatar" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return (
        <SectionStyled>
            <Container>
                <Flex col={2}>
                    <div className="bg-white" style={{ width: "130%", paddingTop: "80px" }}>
                        <h1>Testimonials</h1>
                        <div className="w-100">
                            <div style={{ width: "70%", color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu</div>
                        </div>
                        <Position>
                            <Flex gap="30px" col={3} className="mt-5">
                                <Card className="shadow p-5 d-flex justify-content-center align-items-center flex-column">
                                    <Image width="180px" fluid={img.avatar.childImageSharp.fluid} />
                                    <h5 className="tes">Testimonial 1</h5>
                                    <div className="des text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu</div>
                                </Card>
                                <Card className="shadow p-5 d-flex justify-content-center align-items-center flex-column">
                                    <Image width="180px" fluid={img.avatar.childImageSharp.fluid} />
                                    <h5 className="tes">Testimonial 1</h5>
                                    <div className="des text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu</div>
                                </Card>
                                <Card className="shadow p-5 d-flex justify-content-center align-items-center flex-column">
                                    <Image width="180px" fluid={img.avatar.childImageSharp.fluid} />
                                    <h5 className="tes">Testimonial 1</h5>
                                    <div className="des text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu</div>
                                </Card>
                            </Flex>
                        </Position>
                        <Button name="Become a Partner" style={{marginTop: "525px"}}/>
                    </div>
                    <BG fluid={img.bg.childImageSharp.fluid} />
                </Flex>
            </Container>
        </SectionStyled>
    )
}
export default Testimotional
const Card = styled.div`
    z-index: 1;
    background: white;
    max-width: 380px;
    .des {
        color: #7A7A7A;
    }
`
const Position = styled.div`
    position: absolute
`
const BG = styled(BackgroundImage)`
    background: #F26522;
    background-repeat: no-repeat;
    position: absolute!important;
    right: 0;
    width: 45%;
    padding-bottom: 824px;
`
const SectionStyled = styled(Section)`
    height: 760px;
    padding: 0
`
const Flex = styled.div`
    
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: ${props => props.gap ? props.gap : "0px"};
    justify-content: start;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`
