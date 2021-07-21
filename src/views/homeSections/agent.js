import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Button } from '../../components/Button'
import { Image } from '../../components/common/image'

import { TitleRes } from '../../components/TitleRes'
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
        <TitleRes
          className="mb-3 d-md-none d-block"
          name="For Agent"
          des="Becoming an HaloPesa Agent is a great business opportunity that allows Agents to earn their monthly revenue following best competitive  commission rates that HaloPesa offers.
"
        />
        <Flex className="flex-md-row-reverse d-md-flex">
          <div className="d-md-block d-none">
            <Image display smWidth="340px" fluid={agentbrief.agentbrief.childImageSharp.fluid} />
          </div>
          <div className="d-sm-flex d-md-block justify-content-center align-items-center flex-column">
            <LogoHalopesa className="d-md-flex d-none" style={{ justifyContent: "start!important" }} />
            <div className="d-md-block d-none">
              <h2>For Agent</h2>
              <div style={{ color: "#7A7A7A" }}>
                Becoming an HaloPesa Agent is a great business opportunity that allows Agents to earn their monthly revenue following best competitive  commission rates that HaloPesa offers.
                </div>
            </div>
            <Image className="d-md-none d-block" display smWidth="340px" fluid={agentbrief.agentbrief.childImageSharp.fluid} />
            <div className="d-md-block d-flex justify-content-center align-items-centerr">
              <Button name="Read more" className="mt-md-4 " />
            </div>
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
  @media (min-width: ${props => props.theme.screen.md}) {
    .text { 
      width: 80%
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    .text { 
      width: 100%
    }
  }
`