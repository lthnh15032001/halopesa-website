
import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'
import { TitleRes } from '../../components/TitleRes'
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
                    <TitleRes
                        name="Documents"
                    />
                    <Flex col={1} className="mt-5 w-100 d-flex justify-content-center">
                        <div
                            onClick={() => {
                                navigate("/halopesa-term-and-condition")
                            }}
                        style={{width: "40%", cursor: 'pointer'}} className="shadow rounded p-3 d-flex justify-content-center align-items-center flex-column">
                            <Image display smWidth="100px" fluid={img.pdf.childImageSharp.fluid} width="120px" />
                            <div className="text-center"><strong>HaloPesa Terms and Conditions</strong></div>
                        </div>
                    </Flex>
                </Container>
            </SectionStyled>
        </>
    )
}
export default Download

const SectionStyled = styled(Section)`
background-color: ${props => props.theme.color.background.light};

`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: ${props => props.gap ? props.gap : "60px"};
    justify-content: start;

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 32px;
    }
`