
import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { CardServices } from '../../components/CardServices'
import { Image } from '../../components/common/image'
const Download = () => {
    const img = useStaticQuery(graphql`
    query {
        pdf: file(sourceInstanceName: { eq: "product" }, name: { eq: "pdf" }) {
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
            <SectionStyled>
                <Container>
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        <h1>Download Documents</h1>
                    </div>
                    <Flex col={3} className="mt-5">
                        <div className="shadow rounded p-5 d-flex justify-content-center align-items-center flex-column">
                            <Image fluid={img.pdf.childImageSharp.fluid} width="140px"/>
                            <div className="text-center">Lorem ipsum dolor sit amet, consectetur.pdf</div>
                        </div>
                        <div className="shadow rounded p-5 d-flex justify-content-center align-items-center flex-column">
                            <Image fluid={img.pdf.childImageSharp.fluid} width="140px"/>
                            <div className="text-center">Lorem ipsum dolor sit amet, consectetur.pdf</div>
                        </div>
                        <div className="shadow rounded p-5 d-flex justify-content-center align-items-center flex-column">
                            <Image fluid={img.pdf.childImageSharp.fluid} width="140px"/>
                            <div className="text-center">Lorem ipsum dolor sit amet, consectetur.pdf</div>
                        </div>
                    </Flex>
                </Container>
            </SectionStyled>
        </>
    )
}
export default Download

const SectionStyled = styled(Section)`
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: ${props => props.gap ? props.gap : "60px"};
    justify-content: start;

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`