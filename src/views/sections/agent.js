import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Button } from '../../components/Button'
import { Image } from '../../components/common/image'
const Agent = () => {
  const agentbrief = useStaticQuery(graphql`
    query {
        agentbrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "agent" }) {
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
      <StyledContainer>
        <Flex className="d-flex flex-row-reverse ">
          <div>
          <Image fluid={agentbrief.agentbrief.childImageSharp.fluid} />
          </div>
          <div>
            <LogoHalopesa style={{ justifyContent: "start!important" }} />
            <h2>For Agent</h2>
            <div className="w-100">
              <div style={{ color: "#7A7A7A", width: "80%" }}>
                Becoming an HaloPesa Agent is a great business opportunity that allows Agents to earn their monthly revenue following best competitive  commission rates that HaloPesa offers.
                            </div>
            </div>
            <Button name="Read more" className="mt-4" />
          </div>
        </Flex>
      </StyledContainer>
    </StyledSection>
  )
}
export default Agent
const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
background-color: ${props => props.theme.color.background.light}
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