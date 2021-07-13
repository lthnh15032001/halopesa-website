import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { CardServices } from '../../components/CardServices'
const Benefit = () => {
    const img = useStaticQuery(graphql`
    query {
        sendmoney: file(sourceInstanceName: { eq: "product" }, name: { eq: "sendmoney" }) {
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
                <div className="d-flex align-items-center flex-column justify-content-center">
                    <h1>Benefits for Agent</h1>
                    <div className="w-100 d-flex align-items-center flex-column justify-content-center">
                        <div className="w-50 text-center" style={{color: "#7A7A7A"}}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                    </div>
                </div>
                <Flex col={3} className="mt-4">
                    <CardServices fluid={img.sendmoney.childImageSharp.fluid} name="Commission and bonus" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem "/>
                    <CardServices fluid={img.sendmoney.childImageSharp.fluid} name="Commission and bonus" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem "/>
                    <CardServices fluid={img.sendmoney.childImageSharp.fluid} name="Commission and bonus" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem "/>
                </Flex>
            </Container>
        </SectionStyled>
    )
}
export default Benefit

const SectionStyled = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
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
