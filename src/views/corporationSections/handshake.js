import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'
import styled from 'styled-components';
const HandShake = () => {
    const corporation = useStaticQuery(graphql`
    query {
        handshake: file(sourceInstanceName: { eq: "product" }, name: { eq: "handshake" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return (
        <StyledSection>
            <Container>
                <Flex col={2}>
                    <div>
                        <Image fluid={corporation.handshake.childImageSharp.fluid} width="600px" />
                    </div>
                    <div>
                        <h1>Halopesa’s Partners</h1>
                        <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                    </div>
                </Flex>
            </Container>
        </StyledSection>
    )
}
export default HandShake
const StyledSection = styled(Section)` 
    padding: 0 0
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: 30px;
    justify-content: start;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`
